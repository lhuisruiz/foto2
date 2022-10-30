const evento = document.getElementById('send')
const enviarFormulario = () => {

    let numero = document.getElementById('numero').value;


    var win = window.open(`https://wa.me/54${numero}?text=Mis Fotos App Web:%20https://bit.ly/3gAGP0I%0APara que el enlace se active me tienes que enajenar`, '_blank');
    //
}
evento.addEventListener('click', enviarFormulario)


//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Por favor, lea este gran artículo: ',
            url: 'https://bit.ly/3gAGP0I'
        }).then(() => {
            console.log('Gracias por compartir mis fotos!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("El navegador actual no admite la función de compartir. Por favor, comparte manualmente el enlace")
    }
});


//Numero de pagina
function modal_009() {
    Swal.fire({
        html: '<h3 class="bm">ivan zarate Foto2</h3>',
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


// automatica
Swal.fire({

    html: '<div class="mensaje-2">' +
        '<h3 class="bm-4">Black Momets</h3>' +
        '<p class="bm-2-pp">Foto disponible el <b>4 de octubre</b>, Si no aparecen escribeme al </p>' +
        '<a href="https://wa.me/541144382987" target="_blank"><button class="bt-msj" >+54 11 4438-2987</button></a>' +
        '</div>',
   
       html: '<div class="mensaje">' +
       '<h3 class="bm-4">Black Momets</h3>' +
       '<p class="bm-2-pp">Fotos listas, gracias por la confianza</p>' +
       '</div>',
   
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
    timer: '3000',
    timerProgressBar: true,
    customClass: {
        actions: 'content',
    }
})


//Abrir fotos automaticamante
let boton = document.querySelector('#boton');
boton.addEventListener('click', function () {

    setTimeout(function () {
        location.href = "https://drive.google.com/drive/folders/1i2O5zPdlkUWG-3gJilWHg-Uude29nrNZ?usp=sharing"
    }, 1000 * 3)



});


//ventana automaticamante
function modal_08() {
    Swal.fire({
        html: '<div class="mensaje">' +
            '<h3 class="bm-2-h3">Black Momets</h3>' +
            '<p class="bm-2-p">Tus Fotos Al Mejor Precio. </p>' +
            '</div>',
        //tamaño
        imageWidth: 400,
        imageHeight: 500,
        //cerrar
        padding: '1rem',
        showCloseButton: true,
        showConfirmButton: false,
        background: '#000',
        //ajustes
        showCloseButton: true,
        timer: '5000',
        timerProgressBar: true,
        timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}



// Foto lhuis ruiz
function modal_05() {
    Swal.fire({
        html: '<h3>Black Momets</h3>'+
        '<p>Fotos al mejor precio.</p>',
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


