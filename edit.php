<?php
//database settings
    $servername = "localhost";
    $username = "root";
    $password = "root123"; //Your User Password
    $dbname = "student"; //Your Database Name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else{
    
    //echo "connected";
}

$result = mysqli_query($conn, "select * from studentdata");

$data = array();

while ($row = mysqli_fetch_array($result)) {
  $data[] = $row;
}
    print json_encode($data);
?>