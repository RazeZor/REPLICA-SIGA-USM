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
        console.log("Navegando al menú principal")
      })
    }
  
    // Handle help chat button
    const helpChatBtn = document.getElementById("helpChatBtn")
    if (helpChatBtn) {
      helpChatBtn.addEventListener("click", (e) => {
        e.preventDefault()
        alert("Sistema de ayuda disponible")
      })
    }
  
    // Keyboard navigation for menu items
    const menuItems = document.querySelectorAll(".menu-item")
    menuItems.forEach((item) => {
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          item.click()
        }
      })
    })
  })
  