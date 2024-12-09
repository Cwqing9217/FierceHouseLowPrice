<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email= $_POST['email'];
    $feedback = $_POST['feedback'];
    echo "Thank you!" . $name . "! We will contact you asap.";
}
?>
