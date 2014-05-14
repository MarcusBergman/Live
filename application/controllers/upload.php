<?php
  
  $privateID = $matches[1];
  $test = getTestByPrivateID($privateID);
  $publicID = getPublicIDByPrivateID($privateID);

   header("Location: http://august.friskola.nu/redigera/$privateID");
  
  $uploads_dir = '/var/www/august.friskola.nu/Live/www/uploads';
  
  if ($_FILES["picture"]["error"] == UPLOAD_ERR_OK) 
  {
    $tmp_name = $_FILES["picture"]["tmp_name"];
    $name = $_FILES["picture"]["name"];
    move_uploaded_file($tmp_name, "$uploads_dir/$publicID/$name");
		
    $test['images'][] = $name;
	updateTestByPrivateID($privateID, $test);
		
  }
  exit;
?>
