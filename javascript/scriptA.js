document.getElementById('submit-button').addEventListener('click', (e) => {
    e.preventDefault();

    const button = e.target;

    
    button.textContent = 'Enviando...';
    button.disabled = true;

    button.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    button.style.backgroundColor = '#007bff';

    setTimeout(() => {
        button.textContent = '✔️ Enviado';
        button.style.backgroundColor = '#28a745';

        setTimeout(() => {
            button.textContent = 'Enviar';
            button.style.backgroundColor = '';
            button.disabled = false;
        }, 5000);
    }, 2000);
});