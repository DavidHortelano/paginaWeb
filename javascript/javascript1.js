document.addEventListener("DOMContentLoaded", () => {
    const totalPages = 2;
    const currentPage = 1; 

    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("paginacion");

    const prevLink = document.createElement("a");
    prevLink.href = currentPage > 1 ? `proyectos${currentPage - 1}.html` : "#";
    prevLink.textContent = "<-";
    prevLink.classList.toggle("disabled", currentPage === 1);
    paginationContainer.appendChild(prevLink);

    const pageText = document.createElement("p");
    pageText.textContent = `${currentPage}/${totalPages}`;
    paginationContainer.appendChild(pageText);

    const nextLink = document.createElement("a");
    nextLink.href = currentPage < totalPages ? `proyectos${currentPage + 1}.html` : "#";
    nextLink.textContent = "->";
    nextLink.classList.toggle("disabled", currentPage === totalPages);
    paginationContainer.appendChild(nextLink);

    const mainSection = document.querySelector("main");
    mainSection.appendChild(paginationContainer);
});

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