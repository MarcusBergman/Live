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

    do
    {
    $publicID = randomString();
    while (dba_fetch($publicID, $db));
    }
  
    do
    {
    $privateID = randomString();
    $keyIsNotUnique = "false";
    $key = dba_firstkey($db);
    while($key != NULL)
    {
      $test = json_decode(dba_fetch($key, $db), true);
      if($test['privateID'] == $privateID)
        $keyIsNotUnique = "true";
      
	  $key = dba_nextkey($db);
    }
    while (! $keyIsNotUnique);
  }
}

  $test = array();

  $test['privateID'] = $privateID;
  $test['title'] = "En titel";
  $test['images'] = array();

  dba_insert($publicID, json_encode($test), $db);

  header("Location: http://august.friskola.nu/redigera/".$publicID);
  
?>
