function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
     

     if(html.classList.contains("light")){

        img.setAttribute("src", "./assets/imagens/imagem-escura1.png")
        img.setAttribute("alt", "Foto de Gilberto Gonçalves sorrindo, usando óculos escuros e jaqueta verde.");
       
       } else {

        img.setAttribute("src", "./assets/imagens/imagem-clara1.png")
        img.setAttribute("alt", "Foto de Gilberto Gonçalves sorrindo, usando óculos claro, blusa clara e sorrindo.");
       
      
      }


}