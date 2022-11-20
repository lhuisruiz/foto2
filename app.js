//NUMERO DE PAGINA "FOTO ?"
function modal_09() {
    Swal.fire({
        html: ' <a href="https://www.mediafire.com/folder/j8r8mfnlzvoqg/Camera"><h3 class="bm">Foto2</h3></a>',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',
        //ajustes
        showCloseButton: true,
        timer: '5000',
        timerProgressBar: true,
        customClass: {
            actions: 'content',
        }
    })
}

//FOTO DE PERFIL
function modal_11() {
    Swal.fire({
        html: '<div>' +
            '<img class = "img-misfotos" src="img/a.jpg" alt="">' +
            '</div>' +
            '<h3 class="bm-4">Black Momets</h3>' +
            '<div class="pasaword">' +
            '<a href="https://accounts.google.com/signoutoptions?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Fmobile%2F%3Futm_source%3Den%26pli%3D1">'+
            '<button class="bt-msj"  style="background-color:  red; color: #fff;" >Ingresar Correo y Contraseña</button></a>' +
            '</div>',
        //tamaño
        imageWidth: 300,
        imageHeight: 400,
        //cerrar,
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',

    })
}
//ABRIR FOTOS 1
/*
let boton = document.querySelector('#c');
boton.addEventListener('click', function () {
    location.href = "https://drive.google.com/drive/folders/1H-KK3zFhRrpajQ9_Oyh8Kp1_tSrVWTRb?usp=sharing"
});*/

//ABRIR FOT0S 2
function modal_088() {
    Swal.fire({
        html: '<div class="mensaje-2">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Carpetas... <i class="fa-regular fa-folder"></i></p>' +
        //CARPETA 1 
        '<a href="https://drive.google.com/drive/folders/1i2O5zPdlkUWG-3gJilWHg-Uude29nrNZ?usp=share_link" >' +
        '<button class="bt-msj" >Ver Fotos <i class="fa-solid fa-image blu"></i></button></a>' +
        //CARPETA 2 video
        '<a href="https://drive.google.com/drive/folders/1fI1D5Z5OFMLtw4NdT6BMxOnb0g_Swwkj?usp=share_link">' + 
        '<button class="bt-msj" >Ver Videos<i class="fa-solid fa-video blu"></i></button></a>'+
        //CARPETA 2 otro
        '<a href="https://drive.google.com/drive/folders/1xzBmNa5J_ZhVMpihPFrxjw9mC185MffE?usp=share_link" >' + 
        '<button class="bt-msj" >Otraas Fotos<i class="fa-solid fa-folder-open blu"></i></button></a>'+
        //cr2 origina
        '<button onclick="modal_111();" class="bt-msj" style="background-color: red; color: #fff;" >cr2<i class="fa-solid fa-camera blu"></i></button>',
        imageWidth: 400,
        imageHeight: 500,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',
        //ajustes
        showCloseButton: true,
        timerProgressBar: true,
        timerProgressBar: true,
    })
}
function modal_111() {
    Swal.fire({
        html: '<div>' +
            '<img class = "img-misfotos" src="https://raw.githubusercontent.com/lhuisruiz/foto2/main/img/Lhuis.png" alt="">' +
            '</div>' +
            '<h3 class="bm-4">Black Momets</h3>' +
            '<p class="privadas">Para ver las fotos cr2, privadas de ingresar el correo y contraseña <a class="ingresar" href="https://accounts.google.com/signoutoptions?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Fmobile%2F%3Futm_source%3Den%26pli%3D1"> *aqui* </a></p>'+
            '<div class="pasaword">' +
            '<a href="https://drive.google.com/drive/folders/1fjk5AAB33oV_3swFD3Hag2t_nilwbpLY?usp=share_link"><button class="bt-msj-5"  style="background-color:  red; color: #fff;" >Ver Cr2, fotos privadas </button></a>' +
            '</div>',
        //cerrar,
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',

    })
}

//DESCARGAR TODO
function modal_08() {
    Swal.fire({
        html: '<div class="mensaje-2">' +
            '<h3 class="bm-4">Black Momets</h3>' +
            '<p class="bm-2-pp">Tamaño de Descarga, <b>5GB De Fotos (JPG Y RAW)</b>, atravez de  mediafire... Archivo rar </p>' +
            //mediafire jpg
            '<a href="https://www.mediafire.com/file/c9k94tidau5z7cn/jpg.rar/file" target="_blank">'+
            '<button class="bt-msj" style="background-color: rgb(0, 38, 255); color: #fff;" >Descargar jpg<i class="fa-solid fa-download blu"></i></button></a>' +
            //mediafire Raw
            '<a href="https://www.mediafire.com/folder/gx1fe4t41fbjr/Documents" target="_blank">'+
            '<button class="bt-msj" style="background-color: rgb(225, 0, 255); color: #fff;" > Descargar cr2<i class="fa-solid fa-download blu"></i></button></a>',           
        imageWidth: 400,
        imageHeight: 500,
        //cerrars
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#0e0e0e',
        //ajustes
        showCloseButton: true,
        timerProgressBar: true,
        timerProgressBar: true,
    })
}

//MSJ DE INGRESO Y FOTO LISTA
Swal.fire({
    html: '<div class="mensaje-2">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Foto disponible en <b>120 hs</b>, Si no aparecen escribeme al </p>' +
        '<a href="https://wa.me/541144382987" target="_blank"><button class="bt-msj" >+54 11 4438-2987</button></a>'+
        '</div>'+
        '<div class="pasaword">' +
        '<a href="https://accounts.google.com/signoutoptions?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Fmobile%2F%3Futm_source%3Den%26pli%3D1">'+
        '<button class="bt-msj-3">Ingresar correo...</button></a>' +
        '</div>',
        
    html: '<div class="mensaje">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Fotos Listas, Gracias por la confianza. </br><span class="olvides">¡ No te olvides Inglresar el correo en la app web !</span></p>' +
        '</div>'+
        '<div class="pasaword">' +
        '<a href="https://accounts.google.com/signoutoptions?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Fmobile%2F%3Futm_source%3Den%26pli%3D1">'+
        '<button class="bt-msj-3">Ingresar...</button></a>' +
        '</div>',

    //tamaño
    imageWidth: 300,
    imageHeight: 300,
    //cerrar
    padding: '1rem',
    showCloseButton: true,
    showConfirmButton: false,
    background: '#0e0e0e',
    //ajustes
    showCloseButton: true,
    timer: '3000',
    timerProgressBar: true,
    customClass: {
        actions: 'content',
    }
})





//COMPARTIR POR WSPP
const evento = document.getElementById('send')
const enviarFormulario = () => {

    let numero = document.getElementById('numero').value;


    var win = window.open(`https://wa.me/54${numero}?text=Mis Fotos App Web:%20https://bit.ly/3gAGP0I%0APara que el enlace se active me tienes que ajenar`, '_blank');

}

//SIN AJENDAR 
evento.addEventListener('click', enviarFormulario)
let botonWspp = document.querySelector('#botonWspp');
botonWspp.addEventListener('click', function () {
    location.href = "https://wa.me/?text=https://bit.ly/3gAGP0I"
});

//COMPARTIR SHEAR
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Instala la App web "Mis fotos": ',
            url: 'https://bit.ly/3gAGP0I'
        }).then(() => {
            console.log('Gracias por compartir mis fotos!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("El navegador actual no admite la función de compartir. Por favor, comparte manualmente el enlace")
    }
});

// Foto lhuis ruiz
function modal_05() {
    Swal.fire({
        html: '<h3 class="bm-4" onclick="modal_09();">Black Momets</h3>' +
            '<p class = "bm-2-pp">Fotos al mejor precio.</p>',
        imageUrl: 'https://res.cloudinary.com/lhuis/image/upload/v1666754485/iconos/fkppmxoe9qs9xhggmzcc.png',
        //tamaño
        imageWidth: 300,
        imageHeight: 300,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: 'linear-gradient(#000,#000)',

    })
}

