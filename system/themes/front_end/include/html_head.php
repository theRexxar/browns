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


    <title><?php echo isset($toolbar_title) ? $toolbar_title.' ~ ' : ''; ?>BroChallanges</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Facebook Open Graph Meta Property -->
    <meta property="og:title" content="Close Up Moment"/>
    <meta property="og:url" content="<?php echo base_url(); ?>"/>
    <meta property="og:image" content="<?php echo base_url('assets/images/logo-200x200.png'); ?>"/>
    <meta property="og:site_name" content="Close Up Moment"/>
    <meta property="og:description" content=""/>

    <!-- Mobile viewport optimized: j.mp/bplateviewport -->
    <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <!-- Place favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
    <link rel="shortcut icon" href="<?php echo base_url(); ?>favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!-- CSS: implied media="all" -->      
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/bootstrap.css">  
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/brochallange.css">  

    <!-- Uncomment if you are specifically targeting less enabled mobile browsers
    <link rel="stylesheet" media="handheld" href="public/css/handheld.css">  -->

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <script>
        var BASE_URL = '<?php echo base_url(); ?>';
    </script>
</head>

<body>
  <div id="main" class="page-<?php echo $page; ?>">