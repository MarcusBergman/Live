<?php

  // Skapa ett nytt test
  // Skicka användaren till det testet.
  
  $id = newwTest();
  header("Location: http://august.friskola.nu/redigera/"+$id);
  
  exit;

?>
