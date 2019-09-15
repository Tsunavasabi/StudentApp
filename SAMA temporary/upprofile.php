<?php
header("Access-Control-Allow-Origin: *");
/* Getting file name */

if (isset($_FILES['file']['name'])) {
  $con = mysqli_connect("localhost","zp11489_tsunavasabi","VaSaBi8851","zp11489_sama");
  $con->set_charset("utf8");
    $filename = $_FILES['file']['name'];
    $id = $_REQUEST['id'];
    /* Location */
    $location = 'profile/';
    $sql2 = "SELECT img_path FROM std_register WHERE std_ID = '$id'";
    $result2 = mysqli_query($con,$sql2);
    $row = mysqli_fetch_assoc($result2);
    echo $row["img_path"];
    if (isset($row)) {
      $flgDelete = unlink("profile/".$row["img_path"]);
      $newname = $id.$filename;
    }

    move_uploaded_file($_FILES['file']['tmp_name'],$location.$newname);

    $sql = "UPDATE std_register SET img_path = '$newname' WHERE std_ID = '$id'";
    $result = mysqli_query($con,$sql);
    if ($result) {
      echo "upprofile";
    }
}
