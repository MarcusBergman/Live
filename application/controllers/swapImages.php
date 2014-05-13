<?php

  $privateID = $matches[1];
  $firstImage = $matches[2];
  $secondImage = $matches[3];
  
  $test = getTestByPrivateID($privateID);
  
  $tempImage                    = $test['images'][$firstImage];
  $test['images'][$firstImage]  = $test['images'][$secondImage];
  $test['images'][$secondImage] = $tempImage;
  
  updateTestByPrivateID($privateID, $test);
  
  return;

?>
