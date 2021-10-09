$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
             $('.navbar').addClass("sticky");    
        }else{
             $('.navbar').removeClass("sticky");
         }
         if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
         }else{
          $('.scroll-up-btn').removeClass("show");
         }
    });
// slide up start 
      $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop:0});     
      });

     //  typing animation script
     var typed = new Typed(".typing",{
       strings: ["YouTuber","Blogger","Developer","Designer","Freelancer"],
       typeSpeed: 100,
       backSpeed: 60,
       loop:true
     });
     var typed = new Typed(".typing-2",{
          strings: ["YouTuber","Blogger","Developer","Designer","Freelancer"],
          typeSpeed: 100,
          backSpeed: 60,
          loop:true
        });
        
    // toggle menu bars
     $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active")
     });

     // owl carousel start here
     $('.carousel').owlCarousel({
          margin: 20,
          loop: true,
          autoplayTimeOut: 2000,
          autoplayHoverPause: true,
          responsive: {
          0:{
               items: 1,
               nav: false
          }, 
          600:{
               items: 2,
               nav: false
          } ,
          1000:{
               items: 3,
               nav: false
          }     
          }
     });


     //Place this form script at the end of the body tag 

    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add("success");
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
});












