<?php
  header("Access-Control-Allow-Origin: *");

  include('paetong.php');

  $sql = "SELECT * FROM std_register";
  $result = mysqli_query($con,$sql);

  $a = array();
  while($row = mysqli_fetch_assoc($result)) {
    $a[] = $row;
  }
  echo json_encode($a);
?>
