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
            imagem.css('background-image',`url(${response.url})`)
            $('#date').prop('max', response.date)
            $('#date').prop('value', response.date)
            console.log(response)
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
           console.log(response)
       }
   })
}