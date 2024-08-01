function toggleMode () {
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector('#profile img')
    
    // Caso queira trocar a imagem so usar esse script
    //if (html.classList.contains('light')) {
    
    //    img.setAttribute('src' , './assets/avatar-light.png')
        
    //} else {

    //    img.setAttribute('src', './assets/FOTO.jpg')

   // }


}