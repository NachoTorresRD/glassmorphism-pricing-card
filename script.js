"use strict";
(() => {
  const stage = document.querySelector("#pricing");
  const radios = [...document.querySelectorAll('input[name="mode"]')];
  const buttons = [...document.querySelectorAll(".pricing-stage button")];
  const badge = stage?.querySelector(".badge");
  const notice = document.querySelector("#notice");
  if (!stage || !radios.length || !notice) return;
  radios.forEach(radio => radio.addEventListener("change", () => {
    const detailed = radio.value === "detail";
    stage.classList.toggle("detail", detailed);
    notice.textContent = detailed ? "Detalle ampliado: la tarjeta protagonista gana profundidad." : "Modo foco activo.";
  }));
  buttons.forEach((button, index) => button.addEventListener("click", () => {
    const cards = [...stage.querySelectorAll("article")];
    cards.forEach((card, cardIndex) => card.classList.toggle("featured", cardIndex === index));
    if (badge) cards[index].append(badge);
    notice.textContent = `Tarjeta ${String(index + 1).padStart(2, "0")} destacada.`;
  }));
})();
