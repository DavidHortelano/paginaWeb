// Espera 3 segundos para mostrar el botón
setTimeout(() => {
    // Crear el botón dinámicamente
    const button = document.createElement('button');
    button.id = 'animated-button';
    button.textContent = '¿Quieres un iPhone gratis?';
    const lineBreak = document.createElement('br');
    button.appendChild(lineBreak);
    button.appendChild(document.createTextNode('¡Pulsa aquí!'));    
    document.getElementById('container').appendChild(button);
  
    // Agregar evento de clic al botón
    button.addEventListener('click', () => {
      // Mostrar el jumpscare
      const jumpscare = document.getElementById('jumpscare');
      jumpscare.classList.add('show');
      
      // Reproducir el sonido
      const audio = document.getElementById('jumpscare-audio');
      audio.play();
  
      // Ocultar el jumpscare después de unos segundos
      setTimeout(() => {
        jumpscare.classList.remove('show');
      }, 3000);
      // Eliminar el botón del DOM
      button.remove();
    });
  }, 3000);
  