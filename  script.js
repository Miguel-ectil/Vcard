// Efeitos otimizados para mobile
document.addEventListener('DOMContentLoaded', function () {
    // Efeito de toque nos ícones para mobile
    const icons = document.querySelectorAll('.icon');
    let isTouchDevice = 'ontouchstart' in window;

    if (isTouchDevice) {
        icons.forEach(icon => {
            icon.addEventListener('touchstart', function () {
                this.style.transform = 'translateY(-2px)';
            });

            icon.addEventListener('touchend', function () {
                setTimeout(() => {
                    this.style.transform = 'translateY(0)';
                }, 150);
            });
        });
    }

    // Click no email para copiar
    const emailIcon = document.querySelector('a[href^="mailto"]');

    emailIcon.addEventListener('click', function (e) {
        if (!isTouchDevice) {
            e.preventDefault();
        }

        const email = 'ectilmiguel@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            const originalHTML = this.innerHTML;
            this.innerHTML = '📧<span>Copiado!</span>';

            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 2000);
        });

        if (!isTouchDevice) {
            window.location.href = `mailto:${email}`;
        }
    });

    // Feedback tátil para botões
    const portfolioBtn = document.querySelector('.portfolio-btn');

    if (isTouchDevice) {
        portfolioBtn.addEventListener('touchstart', function () {
            this.style.transform = 'translateY(-1px)';
        });

        portfolioBtn.addEventListener('touchend', function () {
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 100);
        });
    }
});