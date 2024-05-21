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

// Check if the method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty($_POST['suid_username']) && !empty($_POST['item'])) {
        $suid_username = $_POST['suid_username'];
        $item = $_POST['item'];

        // Prepare SQL statement to prevent SQL injection
        $stmt = $pdo->prepare("DELETE FROM student_bag WHERE suid_username = ? AND item = ?");

        // Execute SQL statement
        try {
            $stmt->execute([$suid_username, $item]);
            if ($stmt->rowCount() > 0) {
                echo json_encode(['status' => 'success', 'message' => 'Item deleted successfully']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'No item found for the specified suid_username and item combination']);
            }
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete item: ' . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Both suid_username and item are required']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted']);
}
?>
