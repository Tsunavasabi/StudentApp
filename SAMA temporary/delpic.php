<?php
      if(isset($_SERVER['HTTP_ORIGIN']))
      {
          header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
          header('Access-Control-Allow-Credentials: true');
          header('Access-Control-Max-Age: 86400');    // cache for 1 day
      }

      $postdata = file_get_contents("php://input");
      $request = json_decode($postdata);
      $flag = $request->flag;
      $id = $request->id; 

        if (isset($request)) {
            
            $con = mysqli_connect("localhost","zp11489_tsunavasabi","VaSaBi8851","zp11489_sama");
            $con->set_charset("utf8");
            if ($flag == '0') {
                $sql = "SELECT img_path FROM std_register WHERE std_ID = '$id'";
                $result = mysqli_query($con,$sql);
                $row = mysqli_fetch_assoc($result);
                if (isset($row)) {
                    $flgDelete = unlink($row["img_path"]);
                    echo "Delete profile!";
                }
            } else {
                $sql = "SELECT tch_img FROM tch_register WHERE tch_username = '$id'";
                $result = mysqli_query($con,$sql);
                $row = mysqli_fetch_assoc($result);
                if (isset($row)) {
                    $flgDelete = unlink($row["tch_img"]);
                    echo "Delete profile!";
                }
            }
        
    } 
   
?>