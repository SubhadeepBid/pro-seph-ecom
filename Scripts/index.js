let init = 0;

function showPics(index) {
    let disp = document.getElementById('disp');
    let slides = ["./Images/Slider_01.webp",
        "./Images/Slider_02.webp",
        "./Images/Slider_03.webp",
        "./Images/Slider_04.webp",
        "./Images/Slider_05.webp",
        "./Images/Slider_06.webp",
        "./Images/Slider_07.webp"]; 
    let dots = document.getElementsByClassName("dot");

    disp.innerHTML = null;
    let img = document.createElement('img');
    img.src = slides[index];
    console.log(slides[index], index);
    img.style.width = '100%';

    disp.append(img);

    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace("active", "");
    }
    dots[index].className += " active";
}


function master() {
    if (++init >= 7) {
        init = 0;
    }
    showPics(init);
}

setInterval(master, 3000)