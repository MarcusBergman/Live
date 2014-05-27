<?php

  $privateID = $matches[1];
  $pubID = $matches[2];
  $test = getTestByPrivateID($privateID);
  
  
  updateTestByPrivateID($privateID, $test); 

  return;  
?>