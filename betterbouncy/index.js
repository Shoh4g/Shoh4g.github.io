function startBouncinator() {
    let image;
    image = document.getElementById("image-of-truth");

    url = document.getElementById("image_url").value;
    console.log(url)
    image.src = url;
    
    function stickToCursor(ev) {
        image.style.transform = 'translateY('+(ev.clientY-100)+'px)';
        image.style.transform += 'translateX('+(ev.clientX-100)+'px)';
    
        image.classList.remove("animate-bounce");
        image.parentElement.classList.remove("flex");
    
        image.setAttribute('listener', 'true');
    }
    
    
    image.addEventListener("click", () => {
    
        if(image.getAttribute('listener') == 'true') {
            image.removeEventListener('mousemove', stickToCursor, false);
    
            image.setAttribute('listener', 'false');
    
            image.classList.add("animate-bounce");
            image.parentElement.classList.add("flex");
        } else {
            image.addEventListener('mousemove', stickToCursor,false);
        }
    
    });
}