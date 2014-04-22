<?php


$db = dba_open("model/database.db4", "c", "db4") or die( "Couldn't open Database" ); 

function newTest()
{
  function generateRandomString($length = 5) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

  return 57; 
}

?>
