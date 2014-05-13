<?php

  $privateID = $matches[1];
  $firstImage = $matches[2];
  $secondImage = $matches[3];
  
  $test = getTestByPrivateID($privateID);
  
  $num = count($test["images"]);
  
  if($firstImage  >=0     && 
     $firstImage  < $num &&
     $secondImage >=0     &&
     $secondImage < $num &&
     $firstImage  != $secondImage
     ) 
  {
  
  $tempImage                    = $test['images'][$firstImage];
  $test['images'][$firstImage]  = $test['images'][$secondImage];
  $test['images'][$secondImage] = $tempImage;
  
  updateTestByPrivateID($privateID, $test);
  
  }
  return;

?>
