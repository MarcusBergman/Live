<?php

  // Skapa ett nytt test
  // Skicka användaren till det testet.
  
  $id = newTest();
  header("Location: /redigera/"+$id);

?>
