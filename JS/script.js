// Funcionalidad básica para el formulario de login
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm")
  const emailDomain = document.getElementById("email-domain")
  const username = document.getElementById("username")
  const password = document.getElementById("password")

  // Manejar envío del formulario
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validación básica
    if (!emailDomain.value || !username.value || !password.value) {
      alert("Por favor, completa todos los campos.")
      return
    }

    // Simular proceso de login
    const loginButton = loginForm.querySelector(".login-button")
    const originalText = loginButton.textContent

    loginButton.textContent = "Iniciando sesión..."
    loginButton.disabled = true

    // Simular delay de autenticación
    setTimeout(() => {
      window.location.href = "../SRC/panel.html"
    }, 2000)
  })

  // Efecto de focus en los campos
  const formInputs = document.querySelectorAll(".form-input, .form-select")
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused")
    })

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused")
    })
  })

  // Animación suave para los enlaces
  const links = document.querySelectorAll('a[href="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      console.log("Enlace clickeado:", this.textContent.trim())
    })
  })
})
