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
    // Collect input data
    $suid_username = $_POST['suid_username'] ?? '';
    $blood_type = $_POST['blood_type'] ?? '';
    $contact_person_name = $_POST['contact_person_name'] ?? '';
    $user_phone_number = $_POST['user_phone_number'] ?? '';
    $contact_person_phone_number = $_POST['contact_person_phone_number'] ?? '';
    $user_email = $_POST['user_email'] ?? '';
    $dormitory_info = $_POST['dormitory_info'] ?? null; // Change default value to NULL

    // Simple validation for required fields (assuming all are required except dormitory_info)
    if (empty($suid_username) || empty($blood_type) || empty($contact_person_name) || 
        empty($user_phone_number) || empty($contact_person_phone_number) || 
        empty($user_email)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'All fields except dormitory info are required']);
        exit;
    }

    // Check if dormitory_info is empty and explicitly set it to NULL
    if (empty($dormitory_info)) {
        $dormitory_info = NULL;
    }

    // Prepare SQL statement to prevent SQL injection
    $stmt = $pdo->prepare("INSERT INTO student_crucial_info (suid_username, blood_type, contact_person_name, user_phone_number, contact_person_phone_number, user_email, dormitory_info) VALUES (?, ?, ?, ?, ?, ?, ?)");

    // Execute SQL statement
    try {
        $stmt->execute([$suid_username, $blood_type, $contact_person_name, $user_phone_number, $contact_person_phone_number, $user_email, $dormitory_info]);
        echo json_encode(['status' => 'success', 'message' => 'Student information added successfully']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to insert data: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted']);
}
?>
