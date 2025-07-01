// Horario Personal JavaScript
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
  
    // Handle period selector
    const periodSelect = document.getElementById("period")
    if (periodSelect) {
      periodSelect.addEventListener("change", (e) => {
        const selectedPeriod = e.target.value
        console.log(`Período seleccionado: ${selectedPeriod}`)
        // Here you would reload the schedule for the selected period
      })
    }
  
    // Tooltip functionality
    const tooltip = document.getElementById("tooltip")
    const classBlocks = document.querySelectorAll(".class-block[data-tooltip='true']")
  
    classBlocks.forEach((block) => {
      block.addEventListener("mouseenter", (e) => {
        showTooltip(e, block)
      })
  
      block.addEventListener("mouseleave", () => {
        hideTooltip()
      })
  
      block.addEventListener("mousemove", (e) => {
        updateTooltipPosition(e)
      })
  
      // Keyboard support
      block.addEventListener("focus", (e) => {
        showTooltip(e, block)
      })
  
      block.addEventListener("blur", () => {
        hideTooltip()
      })
  
      // Make blocks focusable
      block.setAttribute("tabindex", "0")
    })
  
    function showTooltip(event, block) {
      const className = block.dataset.class
      const classFullName = block.dataset.name
      const professor = block.dataset.professor
      const room = block.dataset.room
      const time = block.dataset.time
      const type = block.dataset.type
      const parallel = block.dataset.parallel
  
      // Update tooltip content
      document.getElementById("tooltip-title").textContent = `${className} - ${classFullName}`
      document.getElementById("tooltip-time").textContent = time
      document.getElementById("tooltip-room").textContent = room
      document.getElementById("tooltip-professor").textContent = professor
      document.getElementById("tooltip-type").textContent = type
      document.getElementById("tooltip-parallel").textContent = parallel
  
      // Show tooltip
      tooltip.classList.add("show")
      updateTooltipPosition(event)
    }
  
    function hideTooltip() {
      tooltip.classList.remove("show")
    }
  
    function updateTooltipPosition(event) {
      const tooltipRect = tooltip.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
  
      let left = event.pageX + 15
      let top = event.pageY - 10
  
      // Adjust if tooltip goes off screen
      if (left + tooltipRect.width > viewportWidth) {
        left = event.pageX - tooltipRect.width - 15
      }
  
      if (top + tooltipRect.height > viewportHeight) {
        top = event.pageY - tooltipRect.height - 10
      }
  
      // Ensure tooltip doesn't go off the left edge
      if (left < 0) {
        left = 10
      }
  
      // Ensure tooltip doesn't go off the top edge
      if (top < 0) {
        top = 10
      }
  
      tooltip.style.left = `${left}px`
      tooltip.style.top = `${top}px`
    }
  
    // Handle class block clicks
    classBlocks.forEach((block) => {
      block.addEventListener("click", (e) => {
        const className = block.dataset.class
        const classFullName = block.dataset.name
        console.log(`Clase seleccionada: ${className} - ${classFullName}`)
  
        // You could show a modal with more detailed information
        // or navigate to a detailed view of the class
      })
  
      block.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          block.click()
        }
      })
    })
  
    // Add smooth scrolling for better mobile experience
    const scheduleContainer = document.querySelector(".schedule-grid")
    if (scheduleContainer) {
      scheduleContainer.style.scrollBehavior = "smooth"
    }
  
    // Handle window resize for tooltip positioning
    window.addEventListener("resize", () => {
      if (tooltip.classList.contains("show")) {
        hideTooltip()
      }
    })
  
    // Add accessibility announcements
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
  
    // Announce when schedule loads
    announceToScreenReader("Horario personal cargado. Use las teclas de flecha para navegar por las clases.")
  
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
  })
  