<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "demo1");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Attempt insert query execution
$sql = "INSERT INTO persons (first_name, last_name, email) VALUES ('Padayachy', 'Aathi', 'padayachy@mail.com')";
if(mysqli_query($link, $sql)){
    // Obtain last inserted id
    $last_id = mysqli_insert_id($link);
    echo "Records inserted successfully. Last inserted ID is: " . $last_id;
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
?>