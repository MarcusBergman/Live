<?php


$db = dba_open("model/database.db4", "c", "db4") or die( "Couldn't open Database" ); 

function newTest()
{
  function randomString($length = 5) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $string = '';
    for ($i = 0; $i < $length; $i++) {
        $string .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $string;
  }

  return 57; 
}

?>
