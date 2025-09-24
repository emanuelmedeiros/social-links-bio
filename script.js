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
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo, oculos escuros e jaqueta preta"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
