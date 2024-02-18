document.addEventListener('DOMContentLoaded', function () {
    const contactInfo = document.querySelectorAll('.contact-info p');

    contactInfo.forEach(info => {
        info.addEventListener('mouseover', () => {
            info.style.fontWeight = 'bold';
        });
        info.addEventListener('mouseout', () => {
            info.style.fontWeight = 'normal';
        });
    });
});
