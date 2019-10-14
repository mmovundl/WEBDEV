<?php
   // all of this to  another script.
   // declare my variables
   $servername = “localhost”;
   $username = “root”;
   $passwd = “theophylus”;
   $dname = “store”;
   // create a connection
   $conn = mysqli_connect($servername, $username, $passwd, $dname);
   // check the connecion
   if (!$conn){
       die(“Connection Failed: “.mysqli_connect_error());
   }
?>