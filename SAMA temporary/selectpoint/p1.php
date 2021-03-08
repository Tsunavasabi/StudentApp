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


      if(@$acttype !== "" && @$stdid !== "")
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
            @$stdid = $request->std_id;
            @$act_type = $request->act_type;
            if ($act_type == "01" || $act_type == "02") {
              $sql = "SELECT * FROM $tbl WHERE act_type IN('$act_type') AND std_ID IN('$stdid')";
              $result = mysqli_query($con,$sql);
              $num = mysqli_num_rows($result);
            } else {
              $sql = "SELECT * FROM $tbl WHERE std_ID IN('$stdid') AND act_type='$act_type'";
              $result = mysqli_query($con,$sql);
              $num = mysqli_num_rows($result); 
            }

              if ($num >= 0) {
                if ($act_type == "01" || $act_type == "02") {
                  $a = array();
                  while($row = mysqli_fetch_assoc($result)) {
                  $a[] = $row;
                }
                echo json_encode($a);
                } else {
                  echo $num;
                }
                
              } else {
                echo $num;
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