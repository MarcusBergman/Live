<?php

  $privateID = $matches[1];
  $publicID = $matches[2];
  $test = getTestByPrivateID($privateID);
  
  $tempTest = getTestByPublicID($publicID);
  
  if ($tempTest)
  {
    return FALSE;
  }
  else	
  {
    $test['publicID'] = $publicID;
	updateTestByPrivateID($privateID, $test); 
  }
?>