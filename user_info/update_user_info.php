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
    if (empty($_POST['suid_username'])) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'suid_username is required for update']);
        exit;
    }

    $suid_username = $_POST['suid_username'];
    $fields_to_update = [];

    // Check which fields are provided and prepare them for the SQL statement
    $updatable_fields = ['blood_type', 'contact_person_name', 'user_phone_number', 'contact_person_phone_number', 'user_email', 'dormitory_info'];
    foreach ($updatable_fields as $field) {
        if (!empty($_POST[$field])) {
            $fields_to_update[$field] = $_POST[$field];
        }
    }

    if (count($fields_to_update) === 0) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'No fields provided for update']);
        exit;
    }

    // Build the SQL statement dynamically based on the provided fields
    $set_clause = implode(", ", array_map(function($field) { return "$field = :$field"; }, array_keys($fields_to_update)));
    $sql = "UPDATE student_crucial_info SET $set_clause WHERE suid_username = :suid_username";

    // Prepare the statement
    $stmt = $pdo->prepare($sql);

    // Bind the parameters to the statement
    foreach ($fields_to_update as $key => $value) {
        $stmt->bindValue(":$key", $value);
    }
    $stmt->bindValue(":suid_username", $suid_username);

    // Execute the statement
    try {
        $stmt->execute();
        echo json_encode(['status' => 'success', 'message' => 'Student information updated successfully']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Failed to update data: ' . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Only POST method is accepted']);
}
?>
