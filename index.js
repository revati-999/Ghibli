const toggs = document.querySelector('.navbar-brand');
const togg_button = document.getElementById('togg-butt');
const close_btn = document.getElementById('closeBtn');
// const toggler = document.getElementsByClassName('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

togg_button.addEventListener('click', ()=>{
    //Functionlity to hide brand n toggler icon when toggler is clicked
    if(toggs.style.display !== 'none'){
        toggs.style.display = 'none';
    }
    else{
        toggs.style.display !== 'block';
    }
    if(togg_button.style.display !== 'none'){
        togg_button.style.display = 'none';
    }
    else{
        togg_button.style.display !== 'block';
    }

    //Functionality to add close btn and close nav items
    navbarCollapse.classList.toggle('show'); //Toggle show class for visiblilty of nav items
    close_btn.classList.toggle('d-none');  // Toggle visibility of button
    
    close_btn.addEventListener('click',()=>{
        document.querySelector('.navbar-collapse').classList.remove('show');
        close_btn.classList.toggle('d-none');
    });























});