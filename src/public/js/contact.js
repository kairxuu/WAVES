document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-apple');
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic Validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Simulate Sending
        submitBtn.disabled = true;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.style.opacity = '0.7';

        setTimeout(() => {
            // Success State
            submitBtn.textContent = 'Envoyé !';
            submitBtn.style.backgroundColor = '#34c759'; // Apple Green
            submitBtn.style.opacity = '1';

            // Show success message container if implemented, or just alert/reset
            // For this iteration, we keep it simple with button feedback

            // Reset form
            form.reset();

            // Revert button after delay
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                submitBtn.style.backgroundColor = ''; // Revert to CSS default
            }, 3000);

        }, 1500);
    });
});
