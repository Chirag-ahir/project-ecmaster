// header text effect start
const typedTextSpan = document.querySelector(".typed-text");  
 const cursorSpan = document.querySelector(".cursor");  
 const textArray = ["project", "students", "free stuff", "good score"];  
 const typingDelay = 100;  
 const erasingDelay = 100;  
 const newTextDelay = 2000; // Delay between current and next text  
 let textArrayIndex = 0;  
 let charIndex = 0;  
 function type() {  
  if (charIndex < textArray[textArrayIndex].length) {  
   if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");  
   typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);  
   charIndex++;  
   setTimeout(type, typingDelay);  
  }   
  else {  
   cursorSpan.classList.remove("typing");  
       setTimeout(erase, newTextDelay);  
  }  
 }  
 function erase() {  
      if (charIndex > 0) {  
   if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");  
   typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);  
   charIndex--;  
   setTimeout(erase, erasingDelay);  
  }   
  else {  
   cursorSpan.classList.remove("typing");  
   textArrayIndex++;  
   if(textArrayIndex>=textArray.length) textArrayIndex=0;  
   setTimeout(type, typingDelay + 1100);  
  }  
 }  
 document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect  
  if(textArray.length) setTimeout(type, newTextDelay + 250);  
 });  
 // header text effect end


// scroll to top start
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click",function(){
     window.scrollTo({
          top:0,
          left:0,
          behavior:"smooth"
      })
     // $("html,body").animate({scrollTop:0},"slow");
})
// share website desiign=================================>
const btn = document.getElementById("btn");  
// function for web share api  
function webShareAPI(header, description, link) {  
 navigator  
  .share({  
   title: header,  
   text: description,  
   url: link  
  })  
  .then(() => console.log("Successful share"))  
  .catch((error) => console.log("Error sharing", error));  
}  
if (navigator.share) {  
 // Show button if it supports webShareAPI  
 btn.style.display = "block";  
 btn.addEventListener("click", () =>  
  webShareAPI("header", "EC Master •|• Online plateform for EC Students", "")  
 );  
} else {  
 // Hide button if it supports webShareAPI  
 btn.style.display = "none";  
 console.error("Your Browser doesn't support Web Share API");  
}  
// webshareapi end============================>

 
// serch design
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
   }
   
   function filterFunction() {
     var input, filter, ul, li, a, i;
     input = document.getElementById("myInput");
     filter = input.value.toUpperCase();
     div = document.getElementById("myDropdown");
     a = div.getElementsByTagName("a");
     for (i = 0; i < a.length; i++) {
       txtValue = a[i].textContent || a[i].innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
         a[i].style.display = "";
       } else {
         a[i].style.display = "none";
       }
     }
   }


//dark mode design
function darkMode() {
     var element = document.body;
     element.classList.toggle("dark-mode");
   }

// loading animation
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
     loader.style.display="none";
})
