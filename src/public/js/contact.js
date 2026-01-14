document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-apple');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.style.opacity = '0.7';
        setTimeout(() => {
            submitBtn.textContent = 'Envoyé !';
            submitBtn.style.backgroundColor = '#34c759'; 
            submitBtn.style.opacity = '1';
            form.reset();
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                submitBtn.style.backgroundColor = ''; 
            }, 3000);
        }, 1500);
    });
});
