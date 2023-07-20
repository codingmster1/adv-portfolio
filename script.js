//  
//  
//  

function contact(event) {
    event.preventDefault();
  //  emailjs 
  //  .sendForm (
  //      'service_5ue1zrs',
 //       'template_gnv340c',
 //       event.target,
 //       'uaOfhrHzF6IfYqdsd'

 //   ).then(() => {
 //       console.log('this worked')
 //   })
 const loading = document.querySelector('.modal__overlay--loading');
 const success = document.querySelector('.modal__overlay--success');
 loading.classList += " modal__overlay--visible"
 setTimeout(() => {
console.log('it worked 1')
 }, 500);
}