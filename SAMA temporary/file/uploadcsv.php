<?php
      if(isset($_SERVER['HTTP_ORIGIN']))
      {
          header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
          header('Access-Control-Allow-Credentials: true');
          header('Access-Control-Max-Age: 86400');    // cache for 1 day
      }
    $target_file = basename($_FILES['csv']['name']);
    $fileType = pathinfo($target_file,PATHINFO_EXTENSION);
    $check = $_FILES['csv']['tmp_name'];
    echo $target_file;

    if (isset($_FILES['csv']['name'])) {
        echo "File is a csv" . $check['mime'];
        if (move_uploaded_file($_FILES['csv']['tmp_name'], $target_file)) {
            echo "Upload Success";
        } else {
            echo "upload failed";
        }
    } else {
        echo "file is not csv";
    }
   
?>