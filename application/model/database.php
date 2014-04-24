<?php

  $db = dba_open("model/database.db4", "c", "db4") or die( "Couldn't open Database" ); 

  function newTest()
  {
    global $db;
    
    function randomString($length = 5) 
    {
      $characters = 'abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ';
      $string = '';
      for ($i = 0; $i < $length; $i++) 
        $string .= $characters[rand(0, strlen($characters) - 1)];
      
      return $string;
    }

    // Leta efter ett ledigt publikt ID.
    do
    {
      $publicID = randomString();
    }
    while (dba_fetch($publicID, $db));
    
    // Leta efter ett ledigt privat ID.
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
    }
    while (! $keyIsNotUnique);
  
    // Nu har vi hittat både privat och publikt ID. Dags att skapa testet!
    $test = array();

    $test['privateID'] = $privateID;
    $test['title'] = "En titel";
    $test['images'] = array();

    dba_insert($publicID, json_encode($test), $db);
    
    mkdir("../www/uploads/".$publicID);
    
    return $privateID;
  }
  
  function getTestByPrivateID($id)
  {
    global $db;
  	
    $key = dba_firstkey($db);

    while($key != NULL)
    {
      $test = json_decode(dba_fetch($key, $db), true);
      if($test['privateID'] == $id)
        return $test;
    }
  
    return false;
  }
  
  
?>
