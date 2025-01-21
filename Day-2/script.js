function conf(){
    let cls = document.getElementById('confirm');
    let con = confirm('Do you Confirm???');
    if(con == 'true')
        cls.innerText = "Confirm"
}