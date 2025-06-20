function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
     

     if(html.classList.contains("light")){

        img.setAttribute("src", "./assests/assets/assets/imagem escura.png")
        img.setAttribute("alt", "Foto de Gilberto Gonçalves sorrindo, usando óculos escuros e jaqueta verde, em um fundo de pasaigem.");
       
       } else {

        img.setAttribute("src", "./assests/assets/assets/imagem clara.png")
        img.setAttribute("alt", "Foto de Gilberto Gonçalves sorrindo, usando óculos claro, blusa clara e sorrindo.");
       
      
      }


}