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
            $tbl = "std_activity";
            @$act_id = $request->act_id;
            @$act_advices = $request->act_advices;
            @$flag = $request->flag;
            $sql = "UPDATE $tbl SET act_advices = '$act_advices', flag = '$flag'
            WHERE act_id = '$act_id'";
            $result = mysqli_query($con,$sql);

              if ($result) {
                $a = "Check complete";
                echo json_encode($a);

              } else {
                echo mysql_error();
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
