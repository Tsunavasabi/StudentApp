<?php
    header("Access-Control-Allow-Origin: *");
    $data = ['result' => false];
    $id = $_POST['ID'];
    $target = $id.'.jpg';
    echo $target;

    if (isset($_POST['file'])) {
        $imagedata = $_POST['file'];
        $imagedata = str_replace('data:image/jpeg;base64,', '', $imagedata);
        $imagedata = str_replace('data:image/jpg;base64,', '', $imagedata);
        $imagedata = str_replace('', '+', $imagedata);
        $imagedata = base64_decode($imagedata);

        $data['result'] = true;
        $data['imageUrl'] = 'http://www.zp11489.tld.122.155.167.85.no-domain.name/www/profile/'.$target;
        $con = mysqli_connect("localhost","zp11489_tsunavasabi","VaSaBi8851","zp11489_sama");
        $con->set_charset("utf8");
        if ($flag == '0') {
            $sql = "SELECT img_path FROM std_register WHERE std_ID = '$id'";
            $result = mysqli_query($con,$sql);
            $row = mysqli_fetch_assoc($result);
            if (isset($row)) {
                $flgDelete = unlink($row["img_path"]);
            }
            file_put_contents($target, $imagedata);
            $sql1 = "UPDATE std_register SET img_path = '$target' WHERE std_ID = '$id'";
            $result1 = mysqli_query($con,$sql1);
            if ($result) {
                echo "update profile!";
            }    
        } else {
            $sql = "SELECT tch_img FROM tch_register WHERE tch_username = '$id'";
            $result = mysqli_query($con,$sql);
            $row = mysqli_fetch_assoc($result);
            if ($row["tch_img"] != "") {
                echo $row["tch_img"];
                $flgDelete = unlink($row["tch_img"]);
            }
            file_put_contents($target, $imagedata);
            $sql1 = "UPDATE tch_register SET tch_img = '$target' WHERE tch_username = '$id'";
            $result1 = mysqli_query($con,$sql1);
            if ($result) {
                echo "update profile!";
            }
        }
    }
   
?>