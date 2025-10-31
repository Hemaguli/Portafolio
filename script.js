// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de scroll en la barra de navegación
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(59, 95, 127, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(59, 95, 127, 0.15)';
    }
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las secciones
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Manejo de la imagen de perfil si no está disponible
window.addEventListener('load', function() {
    const profilePhoto = document.getElementById('profile-photo');
    if (profilePhoto && profilePhoto.naturalWidth === 0) {
        profilePhoto.style.display = 'none';
        // Crear un placeholder si la imagen no carga
        const placeholder = document.createElement('div');
        placeholder.className = 'profile-placeholder';
        placeholder.style.cssText = `
            width: 280px;
            height: 280px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
            font-weight: bold;
            border: 8px solid var(--white);
            box-shadow: 0 10px 30px var(--shadow);
        `;
        placeholder.textContent = 'HG';
        profilePhoto.parentElement.appendChild(placeholder);
    }
});

