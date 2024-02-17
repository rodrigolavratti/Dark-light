function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/js_teste.png")
  } else {
    img.setAttribute("src", "https://www.github.com/rodrigolavratti.png")
  }
}
