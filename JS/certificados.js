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
  
    // Handle certificate form submission
    const certificateForm = document.getElementById("certificateForm")
    if (certificateForm) {
      certificateForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const tipo = document.getElementById("tipo").value
        const alumno = document.getElementById("alumno").value
  
        if (!tipo || !alumno) {
          alert("Por favor, completa todos los campos requeridos.")
          return
        }
  
        // Simulate form processing
        const submitBtn = certificateForm.querySelector(".btn-primary")
        const originalText = submitBtn.innerHTML
  
        submitBtn.innerHTML = '<span class="btn-icon">⏳</span> Procesando...'
        submitBtn.disabled = true
  
        setTimeout(() => {
          alert("Solicitud de certificado enviada exitosamente.")
          submitBtn.innerHTML = originalText
          submitBtn.disabled = false
  
          // Reset form or redirect
          certificateForm.reset()
        }, 2000)
      })
    }
  
    // Handle cancel button
    const cancelBtn = document.getElementById("cancelBtn")
    if (cancelBtn) {
      cancelBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (confirm("¿Estás seguro de que deseas cancelar? Se perderán los datos ingresados.")) {
          certificateForm.reset()
        }
      })
    }
  
    // Handle sidebar navigation
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href")
  
        // Handle special navigation cases
        if (href === "#") {
          e.preventDefault()
          const linkText = link.querySelector("span:last-child").textContent.trim()
  
          if (linkText === "Cerrar sesión") {
            if (confirm("¿Estás seguro de que deseas cerrar sesión?")) {
              window.location.href = "index.html"
            }
          } else {
            console.log(`Navegando a: ${linkText}`)
            // Here you would handle navigation to different certificate sections
          }
        }
      })
  
      // Keyboard navigation
      link.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          link.click()
        }
      })
    })
  
    // Handle tipo select change
    const tipoSelect = document.getElementById("tipo")
    if (tipoSelect) {
      tipoSelect.addEventListener("change", (e) => {
        const selectedValue = e.target.value
        console.log(`Tipo de certificado seleccionado: ${selectedValue}`)
  
        // You could show/hide additional fields based on selection
        if (selectedValue === "exento") {
          // Show additional info for exempt certificates
          console.log("Certificado exento seleccionado - se enviará por correo")
        }
      })
    }
  })
  