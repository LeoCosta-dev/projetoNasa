// Declaração de variáveis

const imagem = $("#dia")
const enviar = $('#enviar')

// Eventos

defaultsPage()

enviar.on('click', () =>{
    nasa()
})

// Lógica de requisição de api e manipulação de documento com Jquery

function defaultsPage(){
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=Zt5ss0RRWEJhhqmyjC3hqGiOwqGeAKxXR4yumBwm`,
        method: 'get',
        success: (response) => {
            $('#date').prop('max', response.date)
            $('#date').prop('value', response.date)
            imagem.css('background-image',`url(${response.url})`)
            $('#texto').html(response.explanation)
        }
    })
}


function nasa(){
    
    
    return $.ajax({
       url: `https://api.nasa.gov/planetary/apod?api_key=Zt5ss0RRWEJhhqmyjC3hqGiOwqGeAKxXR4yumBwm&date=${date.value}`,
       method: 'get',
       success: (response) => {
           imagem.css('background-image',`url(${response.url})`)
           $('#texto').html(response.explanation)
       }
   })
}