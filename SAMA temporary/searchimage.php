<?php
  if(isset($_SERVER['HTTP_ORIGIN']))
  {
      header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Max-Age: 86400');    // cache for 1 day
  }

  //Access-Control headers are received during OPTIONS requests
  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
  {
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
          header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
          header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
      exit(0);
  }

  $postdata = file_get_contents("php://input");
  if(isset($postdata))
  {
      $request = json_decode($postdata);
      @$username = $request->username;
      @$password = $request->password;

      if(@$username !== "" && @$password !== "")
      {
        $con = mysqli_connect("localhost","id5592579_paetongkul","vasabi8851","id5592579_firstdata");
          $con->set_charset("utf8");


          // Check connection
          if (mysqli_connect_errno())
          {
              echo ("Failed to connect to MySQL: ");
          }
          else
          {
            $tbl = "std_register";
            @$firstname = $request->std_firstname;
            @$lastname = $request->std_lastname;
            $sql = "SELECT img_path FROM std_register WHERE std_firstname = '$firstname' AND std_lastname = '$lastname'";
            $result = mysqli_query($con,$sql);
            $row = mysqli_fetch_assoc($result);
            echo json_encode($row);

          }
       }

      else
      {
          echo ("Empty name and description parameter!");
      }
    }
  else
  {
      echo ("Not called properly with name and description parameter!");
  }



?>