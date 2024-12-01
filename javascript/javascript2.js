document.addEventListener("DOMContentLoaded", () => {
    const totalPages = 2;
    const currentPage = 2;

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