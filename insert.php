<?php

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $name = $request->name;
    $email = $request->email;
    $course = $request->course;
    $fee = $request->fee;
    $due = $request->due;
    $address = $request->address;
    $city = $request->city;
    $state = $request->state;
    $country = $request->country;
    $contact = $request->contact;


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
    
    echo "connected";
}

$sql = "INSERT INTO studentdata (name, email, course, fee,due,address,city,state,country,contact)
VALUES ('$name','$email' ,'$course', '$fee','$due','$address','$city','$state','$country','$contact')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>