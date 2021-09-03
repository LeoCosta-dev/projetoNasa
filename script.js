// Declaração de variáveis

let imagem = $("#dia")
let enviar = $('#enviar')


enviar.on('click', () =>{
    nasa()
    console.log(date.value)
})

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