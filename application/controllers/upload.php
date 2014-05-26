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
    $explodedName = explode ("." , $name);
	$extensions = array('png', 'gif', 'jpg', 'jpeg','PNG', 'GIF', 'JPG', 'JPEG');
    
	if (in_array($extensions, $explodedName,FALSE))
	{
	  exit;
	}
	
	else
	{
      do
      {
        $newName = randomString().".". $explodedName[1];
      }
      while(file_exists("$uploads_dir/$publicID/$newName"));
    
      move_uploaded_file($tmp_name, "$uploads_dir/$publicID/$newName");
		
      $test['images'][] = $newName;
      updateTestByPrivateID($privateID, $test);
	}	
  }
  exit;
?>
