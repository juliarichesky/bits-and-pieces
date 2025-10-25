const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const qrColor = document.getElementById('qr-color');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
let color = qrColor.value;

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    if (qrText.value.length > 0) {
        generateQRCode();
    }
});

qrColor.addEventListener('input', (e) => {
    color = e.target.value;
    if (qrText.value.length > 0) {
        generateQRCode();
    }
});

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');
    let canvas = document.querySelector('.qr-body canvas');
    
    if (img != null) {
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAttr);
    } 
    else if (canvas != null) {
        downloadBtn.setAttribute('href', canvas.toDataURL('image/png'));
    } 
    else {
        alert("Nenhum QR Code gerado para download.");
    }
});

function isEmptyInput() {
    if (qrText.value.length > 0) {
        generateQRCode();
    } else {
        alert("Digite o texto ou URL para gerar o QR Code.");
    }
}

function generateQRCode() {
    qrContainer.innerHTML = ""; 
    
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#ffffff", // fundo do qr code sempre branco para legibilidade
        colorDark: color,       // cor do qr code (variavel 'color')
    });
}