const items = document.querySelectorAll("#menu-list li");
const previewImg = document.querySelector("#preview img");
const previewTitle = document.querySelector("#preview h3");
const previewPrice = document.querySelector("#preview .price");

  items.forEach(item => {
    item.addEventListener("click", () => {
      previewImg.src = item.getAttribute("data-img");
      previewTitle.textContent = item.textContent;
      previewPrice.textContent = item.getAttribute("data-preco");
    });
  });

  // Troca automática de itens a cada 4 segundos
  let index = 0;
  setInterval(() => {
const current = items[index];
    previewImg.src = current.getAttribute("data-img");
    previewTitle.textContent = current.textContent;
    previewPrice.textContent = current.getAttribute("data-preco");
    index = (index + 1) % items.length;
  }, 4000);