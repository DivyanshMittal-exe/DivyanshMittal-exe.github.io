

const vid = document.querySelector(".vidbg")

document.addEventListener("mousedown", function(){
    vid.pause()
});
document.addEventListener("mouseup", function(){
    vid.play()
});

console.log(window.matchMedia)

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const favicon = document.querySelector("link[rel~='icon']");
    favicon.href = '/Assets/Images/Logol.png';
    // console.log("Hi")
}


