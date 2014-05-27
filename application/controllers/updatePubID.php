<?php

  $privateID = $matches[1];
  $newPublicID = $matches[2];
  $currentPublicID = getPublicIDByPrivateID($privateID);
  
  if (getTestByPublicID($newPublicID))
  {
    return FALSE;
  }
  else	
  {
    renameTest($currentPublicID, $newPublicID);
  }
?>