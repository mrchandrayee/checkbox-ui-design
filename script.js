// All ten controls use native checkbox inputs, so they work with mouse,
// touch, keyboard and assistive technology. Keep the ON/OFF text in sync.
document.querySelectorAll(".onoff input").forEach((input) => {
  const label = input.closest(".onoff").querySelector(".state-label");
  const original = label.textContent;
  input.addEventListener("change", () => {
    label.textContent = input.checked ? original : original + " (off)";
  });
});

// The selectable package card has a clear selected state and can be toggled.
document.querySelectorAll(".selection-control input").forEach((input) => {
  input.addEventListener("change", () => {
    input.closest(".selection-card").classList.toggle("selected", input.checked);
  });
});
