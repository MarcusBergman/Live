<?php

 chdir('../application');
 include 'model/database.php';

 $query = $_SERVER['QUERY_STRING'];
 
 $routes = array
 (
   '/^$/'                => 'views/home.php.html',
   '/^redigera\/(\d+)$/' => 'views/edit.php.html',
   '/^testa\/(\d+)$/'      => 'views/run.php.html',   
   '/.*/'                => 'views/error.php.html',
 );
 
 foreach ($routes as $regex => $view)
 {
   if (preg_match($regex, $query, $matches))
   {
     include $view;
     break;
   }
 }
?>
