<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <meta charset="utf-8">

    <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
       Remove this if you use the .htaccess -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">


    <title><?php echo isset($toolbar_title) ? $toolbar_title.' ~ ' : ''; ?>Browns Furniture</title>
    <meta name="description" content="Browns Furniture">
    <meta name="author" content="<?php echo base_url(); ?>">

    <!-- Facebook Open Graph Meta Property -->
    <meta property="og:title" content="Browns Furniture"/>
    <meta property="og:url" content="<?php echo base_url(); ?>"/>
    <meta property="og:image" content="<?php echo base_url('public/img/logo.png'); ?>"/>
    <meta property="og:site_name" content="Browns Furniture"/>
    <meta property="og:description" content="It feels good to be lost in the right direction! - Browns Furniture"/>

    <!-- Mobile viewport optimized: j.mp/bplateviewport -->
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <!-- Place favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
    <link rel="shortcut icon" href="<?php echo base_url(); ?>favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!-- CSS: implied media="all" -->      
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/bootstrap.css">  
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/browns-furniture.css">  

    <!-- Uncomment if you are specifically targeting less enabled mobile browsers
    <link rel="stylesheet" media="handheld" href="public/css/handheld.css">  -->

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <script>
        var BASE_URL = '<?php echo base_url(); ?>';
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
</head>

<body>
  <div id="main" class="page-<?php echo $page; ?>">