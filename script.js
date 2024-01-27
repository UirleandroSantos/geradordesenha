let sizePassword = document.querySelector("#size-password");
let sliderInput = document.querySelector("#slider-input");
let copyPassword = document.querySelector("#copy-password");
let outputPassword = document.querySelector("#output-password");

sizePassword.innerHTML = sliderInput.value;

sliderInput.oninput = () => {
    sizePassword.innerHTML = sliderInput.value;
}


function generatePassword(){

    let sizePasswordNumber = sliderInput.valueAsNumber;

    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$';

    let newPassword = '';

    

    for(let i = 1; i <= sizePasswordNumber; i++){
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        outputPassword.innerHTML = newPassword
    }

    copyPassword.style.display = 'block';
    
    navigator.clipboard.writeText(outputPassword.textContent);
    copyPassword.innerHTML = 'Click aqui para copiar a senha'
    
}
function copiedSuccessfully(){
    copyPassword.innerHTML = 'Texto copiado com sucesso!'
}