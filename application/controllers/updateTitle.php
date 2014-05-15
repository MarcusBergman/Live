<?php

  $privateID = $matches[1];
  $test = getTestByPrivateID($privateID);

  $title = $_POST["title"];
  
  $test['title'] = $title;
  updateTestByPrivateID($privateID, $test); 

  return;  
?>