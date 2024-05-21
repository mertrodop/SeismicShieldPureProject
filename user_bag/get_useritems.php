<?php
// Database configuration
$host = 'localhost';
$dbname = 'purephprest';
$user = 'root';
$pass = '';

// Connect to the database
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}

// Check if the method is GET and suid_username is provided
if ($_SERVER['REQUEST_METHOD'] == 'GET' && !empty($_GET['suid_username'])) {
    $suid_username = $_GET['suid_username'];

    // Prepare SQL statement to prevent SQL injection
    $stmt = $pdo->prepare("SELECT item FROM student_bag WHERE suid_username = ?");
    $stmt->execute([$suid_username]);

    // Fetch the results
    $items = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($items) {
        echo json_encode(['status' => 'success', 'data' => $items]);
    } else {
        http_response_code(404);
        echo json_encode(['status' => 'error', 'message' => 'No items found for the provided username']);
    }
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'suid_username parameter is required']);
}
?>
