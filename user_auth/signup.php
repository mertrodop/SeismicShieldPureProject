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

// Check if the method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Check if all required data are provided
    if (!empty($_POST['suid']) && !empty($_POST['suid_username']) && !empty($_POST['email']) && !empty($_POST['password'])) {
        $suid = $_POST['suid'];
        $suid_username = $_POST['suid_username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Check if the suid, suid_username, or email is already taken
        $stmt = $pdo->prepare("SELECT id FROM users WHERE suid = ? OR suid_username = ? OR email = ?");
        $stmt->execute([$suid, $suid_username, $email]);
        if ($stmt->rowCount() > 0) {
            http_response_code(409);
            echo json_encode(['status' => 'error', 'message' => 'suid, suid_username, or email is already taken']);
        } else {
            // Hash the password
            $passwordHash = password_hash($password, PASSWORD_DEFAULT);

            // Insert new user into the database
            $stmt = $pdo->prepare("INSERT INTO users (suid, suid_username, email, password) VALUES (?, ?, ?, ?)");
            $stmt->execute([$suid, $suid_username, $email, $passwordHash]);

            echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'All fields are required: suid, suid_username, email, and password']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted']);
}
?>
