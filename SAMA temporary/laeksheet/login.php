<?php
  header("Access-Control-Allow-Origin: *");

  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  @$username = $request->username;
  @$password = $request->password;

  $con = mysqli_connect("localhost","root","","laeksheet");
  $con->set_charset("utf8");


  $tbl = "user_data";
  $sql = "SELECT * FROM $tbl WHERE username='$username' AND password='$password'";
  $result = mysqli_query($con,$sql);
  $num = mysqli_num_rows($result);

  if ($num == 1) {
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);

  } else {
    echo $num;
    echo mysql_error();
  }
?>
