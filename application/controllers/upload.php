<?php

  $privateID = $matches[1];
  $test = getTestByPrivateID($privateID);
  $publicID = getPublicIDByPrivateID($privateID);

  $uploads_dir = 'uploads';
  print ("innan foreach");
  print_r ($_FILES);
  
    print ("innan if");
	if ($_FILES["picture"]["error"] == UPLOAD_ERR_OK) {
        print ("här är jag");
		$tmp_name = $_FILES["picture"]["tmp_name"];
		print ($tmp_name);
        $name = $_FILES["picture"]["name"];
		print ($name);
        move_uploaded_file($tmp_name, "$uploads_dir/$publicID/$name");
		
    }

?>
