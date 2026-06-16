document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('mainCard');
    const ctaBtn = document.getElementById('ctaBtn');

    // 3D Tilt Effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotate degrees (max 8 degrees for a subtle effect)
        const rotateX = ((centerY - y) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * 8;
        
        // Dynamic glare/gradient shift effect
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.borderColor = `rgba(255, 255, 255, ${0.18 + Math.abs(rotateY) / 100})`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s ease';
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Particle Effect on Button Click
    ctaBtn.addEventListener('click', (e) => {
        createParticles(e.clientX, e.clientY);
        
        // Subtle button push animation
        ctaBtn.style.transform = 'scale(0.95) translateY(-1px)';
        setTimeout(() => {
            ctaBtn.style.transform = '';
        }, 150);
    });

    function createParticles(x, y) {
        const colors = ['#3b82f6', '#8b5cf6', '#a78bfa', '#60a5fa', '#c084fc'];
        const particleCount = 24;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            document.body.appendChild(particle);
            
            // Random size between 4px and 10px
            const size = Math.random() * 6 + 4;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '999';
            particle.style.boxShadow = `0 0 10px ${color}`;
            
            // Random direction and velocity
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 6 + 4;
            const destinationX = Math.cos(angle) * velocity * 18;
            const destinationY = Math.sin(angle) * velocity * 18;
            
            // CSS Animation
            const animation = particle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) scale(0)`, opacity: 0 }
            ], {
                duration: Math.random() * 500 + 450,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                fill: 'forwards'
            });
            
            animation.onfinish = () => {
                particle.remove();
            };
        }
    }
});
