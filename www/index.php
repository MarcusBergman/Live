<?php

 chdir('../application');
 include 'model/database.php';

 $query = $_SERVER['QUERY_STRING'];
 
 $routes = array
 (
   '/^$/'                => 'views/home.php.html',
   '/^redigera\/(\d+)$/' => 'views/edit.php.html',
   '/^testa\/(\d+)$/'    => 'views/run.php.html',
   '/^nytt$/'            => 'controllers/new.php',   
   '/.*/'                => 'views/error.php.html',
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
