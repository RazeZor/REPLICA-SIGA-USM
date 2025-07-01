// Minimal JavaScript for essential functionality
document.addEventListener("DOMContentLoaded", () => {
    // Update time display
    function updateTime() {
      const now = new Date()
      const timeString = now.toLocaleTimeString("es-CL", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      const timeElement = document.getElementById("currentTime")
      if (timeElement) {
        timeElement.textContent = timeString
      }
    }
  
    // Update time every minute
    updateTime()
    setInterval(updateTime, 60000)
  
    // Handle logout confirmation
    const logoutBtn = document.getElementById("logoutBtn")
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
          window.location.href = "../index.html"
        }
      })
    }
  
    // Handle main menu button
    const mainMenuBtn = document.getElementById("mainMenuBtn")
    if (mainMenuBtn) {
      mainMenuBtn.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "../SRC/panel.html"
      })
    }
  
    // Handle back button
    const backBtn = document.getElementById("backBtn")
    if (backBtn) {
      backBtn.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "../SRC/panel.html"
      })
    }
  
    // Handle print button
    const printBtn = document.getElementById("printBtn")
    if (printBtn) {
      printBtn.addEventListener("click", (e) => {
        e.preventDefault()
        window.print()
      })
    }
  
    // Handle clickable links
    const linkElements = document.querySelectorAll(".info-value.link")
    linkElements.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const text = link.textContent.trim()
        if (text.includes("@")) {
          // Email link
          window.location.href = `mailto:${text}`
        } else if (text.includes("Consultar")) {
          // Portal link
          alert("Redirigiendo al Portal de Autoservicio Institucional...")
        } else {
          // Other links
          console.log(`Navegando a: ${text}`)
        }
      })
    })
  })
  