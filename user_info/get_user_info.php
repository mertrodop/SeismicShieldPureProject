<?php
// Database configuration
$host = 'localhost'; // or your host
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
    $stmt = $pdo->prepare("SELECT blood_type, contact_person_name, user_phone_number, contact_person_phone_number, user_email, dormitory_info FROM student_crucial_info WHERE suid_username = ?");
    $stmt->execute([$suid_username]);

    // Fetch the result
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($result) {
        echo json_encode(['status' => 'success', 'data' => $result]);
    } else {
        http_response_code(404);
        echo json_encode(['status' => 'error', 'message' => 'No information found for the provided username']);
    }
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'suid_username parameter is required']);
}
?>
