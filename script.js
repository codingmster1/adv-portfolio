//  
//  
//  

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs 
    .sendForm (
       'service_5ue1zrs',
       'template_gnv340c',
        event.target,
        'uaOfhrHzF6IfYqdsd'

    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += " modal__overlay--visible";
   }).catch(() => {
    loading.classList.remove('modal__overlay--visible');
    alert(
        "The email service is temporarily unavailable. Please contact me directly at doylejeff98@gmail.com"
    );
   })

}

function toggleModal() {
    document.body.classList += " modal--open";
}