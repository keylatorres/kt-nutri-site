const tabBtns = document.querySelectorAll(".tab-btn");
const tabConteudos = document.querySelectorAll(".tab-conteudo");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("tab-ativa"));
    tabConteudos.forEach((c) => c.classList.remove("ativo"));

    btn.classList.add("tab-ativa");
    document.getElementById(btn.dataset.tab).classList.add("ativo");
  });
});
