<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$error_message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user_id = $_POST['user_id'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM loginuser WHERE user_id = '$user_id' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        header("Location: welcome.php?user_id=$user_id");
        exit();
    } else {
        $error_message = "Invalid User-ID or Password!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login Form</h2>
    <form method="POST" action="login.php">
        User-ID: <input type="text" name="user_id" required><br>
        Password: <input type="password" name="password" required><br>
        <button type="submit">Login</button>
    </form>
    <?php
    if ($error_message) {
        echo "<p style='color:red;'>$error_message</p>";
    }
    ?>
</body>
</html>






<?php
if (!isset($_GET['user_id'])) {
    header("Location: login.php");
    exit();
}
$user_id = $_GET['user_id'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h2>Welcome, <?php echo htmlspecialchars($user_id); ?>!</h2>
    <p>You have successfully logged in.</p>
</body>
</html>
