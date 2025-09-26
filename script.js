function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* faz a mesma coisa que a função toggle acima
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2-light.png")
    img.setAttribute("alt", "foto ilustrativa de perfil, pessoa com oculos")
  } else {
    img.setAttribute("src", "./assets/avatar2.png")
    img.setAttribute("alt", "foto ilustrativa de perfil")
  }
}
