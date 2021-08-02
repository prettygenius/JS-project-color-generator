const myButton = document.getElementById('mybtn')

function color() {
    let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let bgc = r + b + g;
    document.body.style.backgroundColor = bgc;

} 