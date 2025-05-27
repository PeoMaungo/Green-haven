// responsive.js - Comprehensive mobile responsiveness handler

class ResponsiveDesign {
  constructor() {
    this.mobileBreakpoint = 768;
    this.header = document.getElementById('header');
    this.navbar = document.getElementById('navbar');
    this.init();
  }

  init() {
    this.setupViewport();
    this.adjustLayout();
    this.setupMobileMenu();
    this.setupResizeHandler();
    this.setupTouchOptimizations();
  }

  setupViewport() {
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewportMeta);
  }

  adjustLayout() {
    const isMobile = window.innerWidth <= this.mobileBreakpoint;
    
    // Header adjustments
    if (this.header) {
      this.header.style.padding = isMobile ? "10px 15px" : "20px 80px";
    }

    // Navbar adjustments
    if (this.navbar) {
      if (isMobile) {
        this.navbar.style.display = "none";
        this.navbar.style.position = "absolute";
        this.navbar.style.top = "100%";
        this.navbar.style.left = "0";
        this.navbar.style.width = "100%";
        this.navbar.style.backgroundColor = "#f8f9fa";
        this.navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        this.navbar.style.flexDirection = "column";
        this.navbar.style.zIndex = "1000";
        this.navbar.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        this.navbar.style.transform = "translateY(-10px)";
        this.navbar.style.opacity = "0";
      } else {
        this.navbar.style.display = "flex";
        this.navbar.style.position = "static";
        this.navbar.style.width = "auto";
        this.navbar.style.backgroundColor = "transparent";
        this.navbar.style.boxShadow = "none";
        this.navbar.style.flexDirection = "row";
        this.navbar.style.transform = "none";
        this.navbar.style.opacity = "1";
      }
    }

    // Nav item adjustments
    document.querySelectorAll('#navbar li').forEach(item => {
      if (isMobile) {
        item.style.width = "100%";
        item.style.textAlign = "center";
        item.style.padding = "15px 0";
        item.style.borderBottom = "1px solid #eee";
      } else {
        item.style.width = "auto";
        item.style.textAlign = "left";
        item.style.padding = "0 20px";
        item.style.borderBottom = "none";
      }
    });
  }

  setupMobileMenu() {
    if (window.innerWidth > this.mobileBreakpoint || !this.navbar) return;

    // Create or reuse menu button
    let menuButton = document.querySelector('.mobile-menu-button');
    if (!menuButton) {
      menuButton = document.createElement('button');
      menuButton.className = 'mobile-menu-button';
      menuButton.innerHTML = '<i class="fas fa-bars"></i>';
      menuButton.setAttribute('aria-label', 'Toggle menu');
      
      if (this.header) {
        this.header.style.position = "relative";
        this.header.appendChild(menuButton);
      }
    }

    // Enhanced toggle with animation
    const toggleMenu = () => {
      if (this.navbar.style.display === "flex") {
        this.navbar.style.transform = "translateY(-10px)";
        this.navbar.style.opacity = "0";
        setTimeout(() => {
          this.navbar.style.display = "none";
        }, 300);
      } else {
        this.navbar.style.display = "flex";
        setTimeout(() => {
          this.navbar.style.transform = "translateY(0)";
          this.navbar.style.opacity = "1";
        }, 10);
      }
    };

    // Event delegation for better performance
    document.body.addEventListener('click', (e) => {
      if (e.target.closest('.mobile-menu-button')) {
        toggleMenu();
      } else if (!e.target.closest('#navbar') && this.navbar.style.display === "flex") {
        toggleMenu();
      }
    });
  }

  setupResizeHandler() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.adjustLayout();
        this.setupMobileMenu();
      }, 250);
    });
  }

  setupTouchOptimizations() {
    // Ensure tap targets are large enough
    document.querySelectorAll('a, button').forEach(element => {
      element.style.minHeight = '44px';
      element.style.minWidth = '44px';
      element.style.display = 'flex';
      element.style.alignItems = 'center';
      element.style.justifyContent = 'center';
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ResponsiveDesign();
});
// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const notification = document.getElementById('notification');

menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
    }
});

   
