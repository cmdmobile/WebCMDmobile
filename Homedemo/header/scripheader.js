const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
// thêm sự kiện click cho Hà Nội và nút close
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="flex";
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="none";
})