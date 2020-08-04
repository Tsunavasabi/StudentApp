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
        $con = mysqli_connect("localhost","zp11489_tsunavasabi","VaSaBi8851","zp11489_sama");
          $con->set_charset("utf8");


          // Check connection
          if (mysqli_connect_errno())
          {
              echo ("Failed to connect to MySQL: ");
          }
          else
          {
            $tbl = "std_register";
            @$username = $request->username;
            @$password = $request->password;
            $sql = "SELECT * FROM std_register WHERE std_username = '$username' AND std_password = '$password'";
            $result = mysqli_query($con,$sql);
            $num = mysqli_num_rows($result);
            $sql1 = "SELECT * FROM tch_register WHERE tch_username = '$username' AND tch_password = '$password'";
            $result1 = mysqli_query($con,$sql1);
            $num1 = mysqli_num_rows($result1);

              if ($num == 1 or $num1 == 1) {
                if ($num == 1) {
                  $row = mysqli_fetch_assoc($result);
                  echo json_encode($row);
                } elseif ($num1 == 1) {
                  $row1 = mysqli_fetch_assoc($result1);
                  echo json_encode($row1);
                }

              } else {
                echo $num;

              }

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
