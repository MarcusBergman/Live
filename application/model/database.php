<?php
  //öppna databasen
  $db = dba_open("model/database.db4", "c", "db4") or die( "Couldn't open Database" ); 
  //funktion för att skapa ett nytt test
  function newTest()
  {
    global $db;
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
      //loop som kollar igenom databasen och ser om private id är unikt
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
    $test['title'] = "";
    $test['images'] = array();
    //lägger in test arrayen i databasen på det publika id:et
    dba_insert($publicID, json_encode($test), $db);
    
    mkdir("../www/uploads/".$publicID);
    
    return $privateID;
  }
  //kallar på testet efter privat id 
  function getTestByPrivateID($id)
  {
    global $db;
    //kallar på första nyckeln i databasen	
    $key = dba_firstkey($db);
    //kör loop om nyckeln finns
    while($key != NULL)
    {
      $test = json_decode(dba_fetch($key, $db), true);
      if($test['privateID'] == $id)
        return $test;
      $key = dba_nextkey($db);
    }
    
    return false;
  }
  //Får fram det publika id:et genom det privata id:et
  function getPublicIDByPrivateID($id)
  {
    global $db;
    	
    $key = dba_firstkey($db);

    while($key != NULL)
    {
      $test = json_decode(dba_fetch($key, $db), true);
      if($test['privateID'] == $id)
        return $key;
      $key = dba_nextkey($db);
    }
  
    return false;
  }
  //uppdaterar testets innehåll i databasen
  function updateTestByPrivateID($id, $newTest)
  {
    global $db;
  	
    $key = dba_firstkey($db);

    while($key != NULL)
    {
      $test = json_decode(dba_fetch($key, $db), true);
      if($test['privateID'] == $id)
      {
      	dba_replace($key, json_encode($newTest), $db);
      	return;
      }

      $key = dba_nextkey($db);
    }
  
  }
  //kallar på ett test via det publika id:et
  function getTestByPublicID($id)
  {
    global $db;
    
    if ($test = dba_fetch($id, $db))
      return json_decode($test, true);
    else
      return false;
  }
  
  function renameTest($publicID, $newPublicID)
  {
    global $db;
	
	dba_replace($newPublicID, dba_fetch($publicID, $db),$db);
	dba_delete($publicID, $db);
  }
?>
