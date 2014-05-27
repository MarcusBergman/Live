<?php

  $privateID = $matches[1];
  $pubID = $matches[2];
  $test = getTestByPrivateID($privateID);
  
  echo $pubID
  
  //updateTestByPrivateID($privateID, $test); 

?>