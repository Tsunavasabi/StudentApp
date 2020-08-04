<?php
      if(isset($_SERVER['HTTP_ORIGIN']))
      {
          header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
          header('Access-Control-Allow-Credentials: true');
          header('Access-Control-Max-Age: 86400');    // cache for 1 day
      }

      $postdata = file_get_contents("php://input");
      $request = json_decode($postdata);
      $name = $request->name; 

        if (isset($request)) {

            $flgDelete = unlink($name);
            echo "Delete profile!";
        
    } 
   
?>