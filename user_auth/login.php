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

// Check if suid_username and password are provided
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty($_POST['suid_username']) && !empty($_POST['password'])) {
        $suid_username = $_POST['suid_username'];
        $password = $_POST['password'];

        // Prepare SQL statement to prevent SQL injection
        $stmt = $pdo->prepare("SELECT * FROM users WHERE suid_username = ?");
        $stmt->execute([$suid_username]);
        $user = $stmt->fetch();

        // Verify password and generate response
        if ($user && password_verify($password, $user['password'])) {
            echo json_encode(['status' => 'success', 'message' => 'Login successful']);
        } else {
            http_response_code(401);
            echo json_encode(['status' => 'error', 'message' => 'Invalid suid_username or password']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'suid_username and password are required']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted']);
}
?>
