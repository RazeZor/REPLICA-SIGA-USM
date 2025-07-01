// Cambio de Carrera JavaScript
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
  
    // Character counter for textarea
    const motivoTextarea = document.getElementById("motivo")
    const charCount = document.getElementById("charCount")
  
    if (motivoTextarea && charCount) {
      motivoTextarea.addEventListener("input", (e) => {
        const currentLength = e.target.value.length
        charCount.textContent = currentLength
  
        // Change color when approaching limit
        if (currentLength > 200) {
          charCount.style.color = "#dc3545"
        } else if (currentLength > 150) {
          charCount.style.color = "#f39c12"
        } else {
          charCount.style.color = "#6c757d"
        }
      })
    }
  
    // Handle form submission
    const careerChangeForm = document.getElementById("careerChangeForm")
    if (careerChangeForm) {
      careerChangeForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Validate required fields
        const motivo = document.getElementById("motivo").value.trim()
        const beneficios = document.querySelector('input[name="beneficios"]:checked')
        const campus = document.getElementById("campus").value
        const carrera = document.getElementById("carrera").value
        const plan = document.getElementById("plan").value
  
        if (!motivo) {
          alert("Por favor, ingrese el motivo de su solicitud.")
          document.getElementById("motivo").focus()
          return
        }
  
        if (!beneficios) {
          alert("Por favor, seleccione si cuenta con beneficios estudiantiles.")
          return
        }
  
        if (!campus || !carrera || !plan) {
          alert("Por favor, complete todos los campos requeridos de la nueva carrera.")
          return
        }
  
        // Simulate form processing
        const submitBtn = careerChangeForm.querySelector(".btn-primary")
        const originalText = submitBtn.innerHTML
  
        submitBtn.innerHTML = '<span class="btn-icon">⏳</span> Enviando...'
        submitBtn.disabled = true
  
        setTimeout(() => {
          alert(
            "Solicitud de cambio de carrera enviada exitosamente.\n\nRecibirá una confirmación por correo electrónico.",
          )
          submitBtn.innerHTML = originalText
          submitBtn.disabled = false
  
          // Reset form or redirect
          if (confirm("¿Desea realizar otra solicitud?")) {
            careerChangeForm.reset()
            document.getElementById("charCount").textContent = "0"
          } else {
            window.location.href = "../SRC/panel.html"
          }
        }, 3000)
      })
    }
  
    // Handle cancel button
    const cancelBtn = document.getElementById("cancelBtn")
    if (cancelBtn) {
      cancelBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (confirm("¿Estás seguro de que deseas cancelar? Se perderán todos los datos ingresados.")) {
          window.location.href = "../SRC/panel.html"
        }
      })
    }
  
    // Handle help button
    const helpBtn = document.getElementById("helpBtn")
    if (helpBtn) {
      helpBtn.addEventListener("click", (e) => {
        e.preventDefault()
        alert(
          "Ayuda:\n\n• Complete todos los campos marcados con asterisco (*)\n• El motivo debe ser detallado y claro\n• Seleccione correctamente si tiene beneficios estudiantiles\n• Verifique que la carrera de destino sea correcta\n\nPara más información, contacte a su Secretaría Académica.",
        )
      })
    }
  
    // Handle send button in header
    const sendBtn = document.getElementById("sendBtn")
    if (sendBtn) {
      sendBtn.addEventListener("click", (e) => {
        e.preventDefault()
        // Trigger form submission
        careerChangeForm.dispatchEvent(new Event("submit"))
      })
    }
  
    // Handle sidebar navigation
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href")
        if (href === "#") {
          e.preventDefault()
          const linkText = link.textContent.trim()
          console.log(`Navegando a: ${linkText}`)
          // Here you would handle navigation to different sections
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
  
    // Dynamic career options based on campus
    const campusSelect = document.getElementById("campus")
    const carreraSelect = document.getElementById("carrera")
  
    if (campusSelect && carreraSelect) {
      campusSelect.addEventListener("change", (e) => {
        const selectedCampus = e.target.value
        console.log(`Campus seleccionado: ${selectedCampus}`)
  
        // Here you would update career options based on campus
        // For now, we'll just log the selection
      })
    }
  
    // Form validation styling
    const requiredFields = document.querySelectorAll("[required]")
    requiredFields.forEach((field) => {
      field.addEventListener("blur", (e) => {
        if (!e.target.value.trim()) {
          e.target.style.borderColor = "#dc3545"
        } else {
          e.target.style.borderColor = "#d1d5db"
        }
      })
  
      field.addEventListener("input", (e) => {
        if (e.target.value.trim()) {
          e.target.style.borderColor = "#28a745"
        }
      })
    })
  
    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  
    // Accessibility announcements
    function announceToScreenReader(message) {
      const announcement = document.createElement("div")
      announcement.setAttribute("aria-live", "polite")
      announcement.setAttribute("aria-atomic", "true")
      announcement.className = "sr-only"
      announcement.textContent = message
      document.body.appendChild(announcement)
  
      setTimeout(() => {
        document.body.removeChild(announcement)
      }, 1000)
    }
  
    // Add CSS for screen reader only content
    const style = document.createElement("style")
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `
    document.head.appendChild(style)
  
    // Announce when form loads
    announceToScreenReader(
      "Formulario de cambio de carrera cargado. Complete los campos requeridos y envíe su solicitud.",
    )
  })
  