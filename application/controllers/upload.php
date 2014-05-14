<?php

  $privateID = $matches[1];
  $test = getTestByPrivateID($privateID);
  $publicID = getPublicIDByPrivateID($privateID);

  $uploads_dir = 'uploads';
  foreach ($_FILES["pictures"]["error"] as $key => $error) {
    if ($error == UPLOAD_ERR_OK) {
        print ("här är jag");
		$tmp_name = $_FILES["pictures"]["tmp_name"][$key];
		print ($tmp_name);
        $name = $_FILES["pictures"]["name"][$key];
		print ($name);
        move_uploaded_file($tmp_name, "$uploads_dir/$publicID");
		
    }
}
?>
