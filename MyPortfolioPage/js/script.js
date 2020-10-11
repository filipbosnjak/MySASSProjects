$(document).ready(function(){

  
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $(".navbar").addClass("sticky");
        $(".goTop").fadeIn();
      }
      else{
        $(".navbar").removeClass("sticky");
        $(".goTop").fadeOut();
      }
    });
    $(".goTop").click(function(){
      scroll(0,0);
    })

    // Toggling responsive navbar
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
    $('.link').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });

    //Animated reveal

    if(window.innerWidth>800){
    window.sr = ScrollReveal();

    sr.reveal('.navbar-menu',{
      duration:1500,
      origin:'top',
      distance:'50px',
      mobile: false
    });
    sr.reveal('.lg-heading',{
      duration:3000,
      origin:'bottom',
      mobile: false
    });
    sr.reveal('.sm-heading',{
      duration:4000,
      origin:'bottom',
      mobile: false
    });
    sr.reveal('.left',{
      duration:2000,
      origin:'left',
      distance:'300px',
      mobile: false
    });
    sr.reveal(' .right',{
      duration:2000,
      origin:'right',
      distance:'300px',
      mobile: false
    });
    sr.reveal('.about-pic',{
      duration:3000,
      origin:'left',
      distance:'300px',
      mobile: false
    });
    sr.reveal('.s1',{
      duration: 3000,
      origin:'bottom',
      distance:'10px',
      mobile: false
    });
    sr.reveal('.s2',{
      duration: 3000,
      origin:'bottom',
      distance:'10px',
      delay:200,
      mobile: false
    });
    sr.reveal('.s3',{
      duration: 3000,
      origin:'bottom',
      distance:'10px',
      delay:300,
      mobile: false
    });
    sr.reveal('.s4',{
      duration: 3000,
      origin:'bottom',
      distance:'10px',
      delay:400,
      mobile: false
    });
    sr.reveal('.s5',{
      duration: 3000,
      origin:'bottom',
      distance:'10px',
      delay:500,
      mobile: false
    });
    sr.reveal('.s6',{
      duration: 3000,
      origin:'bottom',
      distance:'10px',
      delay:600,
      mobile: false
    });
    sr.reveal('.w1',{
      duration: 3000,
      origin:'left',
      distance:'100px',
      mobile: false
    });
    sr.reveal('.w2',{
      duration: 3000,
      origin:'top',
      distance:'100px',
      delay:200,
      mobile: false
    });
    sr.reveal('.w3',{
      duration: 3000,
      origin:'right',
      distance:'100px',
      delay:300,
      mobile: false
    });
    sr.reveal('.w4',{
      duration: 3000,
      origin:'left',
      distance:'100px',
      delay:400,
      mobile: false
    });
    sr.reveal('.w5',{
      duration: 3000,
      origin:'bottom',
      distance:'10px',
      delay:500,
      mobile: false
    });
    sr.reveal('.w6',{
      duration: 3000,
      origin:'rught',
      distance:'100px',
      delay:600,
      mobile: false
    });
    sr.reveal('.f1',{
      duration: 1500,
      origin:'bottom',
      distance:'100px',
      mobile: false
    });
    sr.reveal('.f2',{
      duration: 1500,
      origin:'bottom',
      distance:'100px',
      delay:200,
      mobile: false
    });
    sr.reveal('.f3',{
      duration: 1500,
      origin:'bottom',
      distance:'100px',
      delay:300,
      mobile: false
    });
    sr.reveal('.f4',{
      duration: 1500,
      origin:'bottom',
      distance:'100px',
      delay:400,
      mobile: false
    });
    sr.reveal('.f5',{
      duration: 1500,
      origin:'bottom',
      distance:'100px',
      delay:500,
      mobile: false
    });
  }
  });
