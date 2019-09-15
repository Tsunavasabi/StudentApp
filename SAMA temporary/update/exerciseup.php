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


      if($request !== "")
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
            @$date = $request->date;
            @$start = $request->start;
            @$end = $request->end;
            @$make = $request->make;
            @$pn_id = $request->pn_id;

            function diff2time($time_a,$time_b){
            $now_time1=strtotime(date("Y-m-d ".$time_a));
            $now_time2=strtotime(date("Y-m-d ".$time_b));
            $time_diff=abs($now_time2-$now_time1);
            $time_diff_h=floor($time_diff/3600); // จำนวนชั่วโมงที่ต่างกัน
            $time_diff_m=floor(($time_diff%3600)/60); // จำวนวนนาทีที่ต่างกัน
            $time_diff_s=($time_diff%3600)%60; // จำนวนวินาทีที่ต่างกัน
            return $time_diff_h.".".$time_diff_m;
            }

            $hour = diff2time($start,$end);

            $sql = "UPDATE $tbl SET act_date = '$date', act_hours = '$hour', act_details='$make',
            act_time_starts = '$start', act_time_ends = '$end', phone_id = '$pn_id'
            WHERE act_id ='$act_id'";
            $result = mysqli_query($con,$sql);

              if ($request) {
                echo "update complete";
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
