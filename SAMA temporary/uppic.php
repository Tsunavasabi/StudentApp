<?php
      if(isset($_SERVER['HTTP_ORIGIN']))
      {
          header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
          header('Access-Control-Allow-Credentials: true');
          header('Access-Control-Max-Age: 86400');    // cache for 1 day
      }
    $target_file = basename($_FILES['photo']['name']);
    $imageType = pathinfo($target_file,PATHINFO_EXTENSION);
    $check = getimagesize($_FILES['photo']['tmp_name']);

    if ($check !== false) {
        echo "File is an image" . $check['mime'];
        if (move_uploaded_file($_FILES['photo']['tmp_name'], $target_file)) {
            echo "Upload Success";
        } else {
            echo "upload failed";
        }
    } else {
        echo "file is not image";
    }
   
?>