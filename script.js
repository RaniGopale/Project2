// navbar scroll background color changing script start
const myNavbar = document.querySelector('.nav-transparent','.nav_a');

window.onscroll = () => {
    if(window.scrollY > 200)
    {
        myNavbar.classList.add('nav-colored','nav_a_scroll');
        // myNavbar.classList.remove("nav-transparent");
    }
    else
    {
        // myNavbar.classList.add("nav-transparent");
        myNavbar.classList.remove('nav-colored','nav_a_scroll');
    }
};
// navbar scroll background color changing script end


function readMoreFunction1(){
    let dots = document.getElementById("dots1");
    let contentText= document.getElementById("content1");
    let buttonText = document.getElementById("buttonReadMore1");

    if(dots.style.display ==='none'){
        dots.style.display = "inline";
        buttonText.innerHTML= "read more";
        contentText.style.display = "none";
    }
    else{
        dots.style.display = "none";
        buttonText.innerHTML ="read less";
        contentText.style.display="inline";
    }
}

function readMoreFunction2(){
    let dots = document.getElementById("dots2");
    let contentText= document.getElementById("content2");
    let buttonText = document.getElementById("buttonReadMore2");

    if(dots.style.display ==='none'){
        dots.style.display = "inline";
        buttonText.innerHTML= "read more";
        contentText.style.display = "none";
    }
    else{
        dots.style.display = "none";
        buttonText.innerHTML ="read less";
        contentText.style.display="inline";
    }
}

function readMoreFunction3(){
    let dots = document.getElementById("dots3");
    let contentText= document.getElementById("content3");
    let buttonText = document.getElementById("buttonReadMore3");

    if(dots.style.display ==='none'){
        dots.style.display = "inline";
        buttonText.innerHTML= "read more";
        contentText.style.display = "none";
    }
    else{
        dots.style.display = "none";
        buttonText.innerHTML ="read less";
        contentText.style.display="inline";
    }
}

