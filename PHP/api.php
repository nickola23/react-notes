<?php
require 'db.php';

// Retrieve quotes
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM quotes";
    $result = $conn->query($query);

    $quotes = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $quotes[] = $row;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($quotes);
}

// Add a new quote
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'));

    if ($data) {
        $name = $data->name;
        $email = $data->email;
        $color = $data->color;
        $text = $data->text;

        $query = "INSERT INTO quotes (id, name, email, color, text) VALUES (null, '$name', '$email', '$color', '$text')";
        if ($conn->query($query) === TRUE) {
            echo "New quote added successfully";
        } else {
            echo "Error: " . $query . "<br>" . $conn->error;
        }
    } else {
        echo "Invalid data";
    }
}