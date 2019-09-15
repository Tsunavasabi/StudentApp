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
        @$form1detail_firstname = $request->std_firstname;
        @$form1detail_lastname = $request->std_lastname;
        @$form1detail_classroom = $request->std_classroom;
        @$form1detail_number = $request->std_number;
        @$form1detail_dorm = $request->std_dorm;
        @$form1detail_ID = $request->std_id;
        @$form1detail_type = $request->acttype;
        @$form1detail_date = $request->date;
        @$form1detail_make = $request->make;
        @$form1detail_start = $request->timestart;
        @$form1detail_end = $request->timeend;
        @$form1detail_pnid = $request->pn_id;
        @$form1detail_act_name = $request->act_type_name;

        if(@$form1detail_hour !== "" && @$form1detail_place !== "" &&
         @$form1detail_make !== "" && @$form1detail_feel !== "" &&
         @$form1detail_date !== "")
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

                function diff2time($time_a,$time_b){
                $now_time1=strtotime(date("Y-m-d ".$time_a));
                $now_time2=strtotime(date("Y-m-d ".$time_b));
                $time_diff=abs($now_time2-$now_time1);
                $time_diff_h=floor($time_diff/3600); // จำนวนชั่วโมงที่ต่างกัน
                $time_diff_m=floor(($time_diff%3600)/60); // จำวนวนนาทีที่ต่างกัน
                $time_diff_s=($time_diff%3600)%60; // จำนวนวินาทีที่ต่างกัน
                return $time_diff_h.".".$time_diff_m;
                }

                $form1detail_hour = diff2time($form1detail_start,$form1detail_end);
                echo $form1detail_hour;

                $sql = "INSERT INTO std_activity ( std_firstname, std_lastname, std_classroom, std_number,
                  std_dormitory, std_ID, act_date, act_details, act_hours,
                  act_time_starts, act_time_ends, act_type, act_type_name, phone_id)
                VALUES ('$form1detail_firstname','$form1detail_lastname', '$form1detail_classroom',
                        '$form1detail_number', '$form1detail_dorm', '$form1detail_ID',
                        '$form1detail_date', '$form1detail_make', '$form1detail_hour',
                        '$form1detail_start', '$form1detail_end', '$form1detail_type',
                        '$form1detail_act_name', '$form1detail_pnid')";
                if ($con->query($sql) === TRUE) {
                  echo "<br>New record created successfully";
                } else {
                  echo "Error: " . $sql . "<br>" . $con->error;
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
