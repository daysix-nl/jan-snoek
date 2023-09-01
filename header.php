<?php 
/**
 * The template for displaying the header
 * 
 * @package Day Six theme
 */
 ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <link rel="stylesheet" href=https://use.typekit.net/rck3ktr.css>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php bloginfo( 'name' ); ?> | <?php the_title(); ?></title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset='UTF-8'>
</head>
<body <?php body_class( 'page-block relative' ); ?>>

<header>                    
    <section class="bg-[#00869D] h-[27px] flex">
        <div class="container flex h-full">
            <p class="text-white text-roboto text-16 leading-30 my-auto ml-auto">Tel: <a href="tel:+31 6 25 398 488">+31 6 25 398 488</a></p>
        </div>
    </section>
    <section class="relative h-auto aspect-video md:aspect-auto md:h-screen max-h-[779px]">
        <div class="container relative h-full">
            <div class="pt-5 relative z-[15]">
                <?php  include $_SERVER['DOCUMENT_ROOT'].'/wp-content/themes/jan-snoek/img/icons/logo.php'; ?>
            </div>
            <h1 class="relative z-[15] font-roboto text-30 md:text-55 text-white mt-[150px] hidden md:flex max-w-[725px]">Voor al uw schilderwerk, binnen, buiten & behangen</h1>
        </div>
        <img class="absolute top-0 left-0 w-screen h-full object-cover z-[5] shadow-image" src="/wp-content/themes/jan-snoek/img/local/header-01.jpeg" alt="hero-image">
        
        <div class="bg-gradient absolute top-0 left-0 w-screen h-[200px]  md:h-[334px] z-[10]"></div>
    </section>
</header>
