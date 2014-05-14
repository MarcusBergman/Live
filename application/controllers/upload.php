<?php

  $privateID = $matches[1];
  $test = getTestByPrivateID($privateID);

  $uploads_dir = '/uploads';
  $_FILES[]["error"] = $key => $error
  if ($error == UPLOAD_ERR_OK)
  {
    $tmp_name = $_FILES[]["tmp_name"][$key];
    $name = $_FILES[]["name"][$key];
    move_uploaded_file($tmp_name, "$uploads_dir/$privateID");
  }
?>
