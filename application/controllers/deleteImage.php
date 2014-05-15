<?php

  $privateID = $matches[1];
  $imageToBeDeleted = $matches[2];
  
  $test = getTestByPrivateID($privateID);
  
  if ($imageToBeDeleted < count($test["images"]))
  {
  
    $newArray = array();
  
    foreach($test["images"] as $i => $image)
      if ($i != $imageToBeDeleted)
        $newArray[] = $image;
  
    $test["images"] = $newArray;
  
    updateTestByPrivateID($privateID, $test);
  
  }
  return;

?>
