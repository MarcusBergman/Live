<?php
  
  function randomString($length = 5) 
  {
    $characters = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ';
    $string = '';
    for ($i = 0; $i < $length; $i++) 
      $string .= $characters[rand(0, strlen($characters) - 1)];
      
    return $string;
   }  
?>
