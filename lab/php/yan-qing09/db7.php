<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "demo1");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Prepare an insert statement
$sql = "INSERT INTO persons (first_name, last_name, email) VALUES (?, ?, ?)";
 
if($stmt = mysqli_prepare($link, $sql)){
    // Bind variables to the prepared statement as parameters
    mysqli_stmt_bind_param($stmt, "sss", $first_name, $last_name, $email);
    
    /* Set the parameters values and execute
    the statement again to insert another row */
    $first_name = "Ananda Riza";
    $last_name = "Pratomo";
    $email = "ananda@mail.com";
    mysqli_stmt_execute($stmt);
    
    /* Set the parameters values and execute
    the statement to insert a row */
    $first_name = "Shafia Carina";
    $last_name = "Rachmi";
    $email = "shafia@mail.com";
    mysqli_stmt_execute($stmt);
    
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not prepare query: $sql. " . mysqli_error($link);
}
 
// Close statement
mysqli_stmt_close($stmt);
 
// Close connection
mysqli_close($link);
?>
