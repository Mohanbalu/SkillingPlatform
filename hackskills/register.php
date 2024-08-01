<?php
$host = 'localhost';
$db = 'usershack';
$user = 'root';  // Adjust if you have a different username
$pass = '';  // Adjust if you have a different password

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

// Check if username or email already exists
$query = $conn->prepare("SELECT * FROM users WHERE username = ? OR email = ?");
$query->bind_param("ss", $username, $email);
$query->execute();
$result = $query->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Account already registered']);
    $query->close();
    $conn->close();
    exit();
}

// Insert new user
$query = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$query->bind_param("sss", $username, $email, $password);

if ($query->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Registration successful']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $query->error]);
}

$query->close();
$conn->close();
?>
