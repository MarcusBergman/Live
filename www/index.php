<?php

 chdir('../application');
 include 'model/database.php';

 $query = $_SERVER['QUERY_STRING'];
 
 $routes = array
 (
   '/^$/'                                   => 'views/home.php.html',
   '/^redigera\/([a-zA-Z]+)$/'              => 'views/edit.php.html',
   '/^testa\/([a-zA-Z]+)$/'                 => 'views/run.php.html',
   '/^nytt$/'                               => 'controllers/new.php',
   '/^bytBild\/([a-zA-Z]+)\/(\d+)\/(\d+)$/' => 'controllers/swapImages.php',
   '/^taBordBild\/([a-zA-Z]+)\/(\d+)$/'     => 'controllers/deleteImage.php',
   '/.*/'                                   => 'views/error.php.html',
 );
 
 foreach ($routes as $regex => $route)
 {
   if (preg_match($regex, $query, $matches))
   {
     include $route;
     break;
   }
 }
?>
