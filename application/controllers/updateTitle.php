<?php

  $privateID = $matches[1];
  $test = getTestByPrivateID($privateID);

  $titel = $_POST["titel"];
  
  $test['title'] = $titel;
  updateTestByPrivateID($privateID, $test); 

  return;  
?>