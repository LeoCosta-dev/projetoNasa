// Declaração de variáveis

const imagem = $("#dia")
const enviar = $('#enviar')

// Eventos

defaultsPage()

enviar.on('click', () => {
    nasa()
})

// Lógica de requisição de api e manipulação de documento com Jquery

function defaultsPage() {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=Zt5ss0RRWEJhhqmyjC3hqGiOwqGeAKxXR4yumBwm`,
        method: 'get',
        success: (response) => {
            console.log(response)
            $('#titulo').html(response.title)
            $('#date').prop('max', response.date)
            $('#date').prop('value', response.date)
            $('#texto').html(response.explanation)
            if (response.media_type == 'image') {
                imagem.css('background-image', `url(${response.url})`)
                document.getElementById('dia').style.display = 'flex'
                document.getElementById('video').style.display = 'none'
            } else if (response.media_type == 'video') {
                video.setAttribute('src', response.url)
                document.getElementById('dia').style.display = "none"
                document.getElementById('video').style.display = 'flex'
            }
        }
    })
}


function nasa() {
    return $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=Zt5ss0RRWEJhhqmyjC3hqGiOwqGeAKxXR4yumBwm&date=${date.value}`,
        method: 'get',
        success: (response) => {
            console.log(response)
            $('#titulo').html(response.title)
            $('#texto').html(response.explanation)
            if (response.media_type == 'image') {
                imagem.css('background-image', `url(${response.url})`)
                document.getElementById('dia').style.display = 'flex'
                document.getElementById('video').style.display = 'none'
            } else if (response.media_type == 'video') {
                video.setAttribute('src', response.url)
                document.getElementById('dia').style.display = "none"
                document.getElementById('video').style.display = 'flex'
            }
        }
   })
}