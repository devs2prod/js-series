function background(){
    let num = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    document.body.style.background = '#'+ num;
}