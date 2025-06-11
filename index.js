     // Tema claro/escuro
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
        
        // Efeito de clique nos links
        const links = document.querySelectorAll('.link-item');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                // Adiciona efeito de ondulação ao clicar
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                ripple.style.cssText = `
                    position: absolute;
                    background-color: rgba(255, 255, 255, 0.7);
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                    left: ${x}px;
                    top: ${y}px;
                    transform: translate(-50%, -50%) scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Animação de ondulação
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                @keyframes ripple {
                    to {
                        transform: translate(-50%, -50%) scale(4);
                        opacity: 0;
                    }
                }
            </style>
        `);