const fortunes = [
  "Mňau! Dnes najdeš něco pěkného na procházce.",
  "Kočka zvedá tlapku pro novou příležitost.",
  "Tvůj den bude jako hřejivý paprsek sluníčka.",
  "Mňau, někdo ti pošle milou zprávu.",
  "Připrav se na malou náhodnou radost.",
  "Dnes je vhodný den na odpočinek a mazlení.",
  "Kočičí hvězdy ti dnes přejí klid a dobré nápady.",
  "Mňau, brzy objevím něco zvláštního pro tebe.",
  "Tvé sny budou mít šťastný konec.",
  "Kočka ti šeptá: buď trpělivý a bude to stát za to."
];

const button = document.getElementById("fortuneButton");
const resultBox = document.getElementById("fortuneResult");
const questionInput = document.getElementById("fortuneQuestion");

button.addEventListener("click", () => {
  const question = questionInput.value.trim();
  if (!question) {
    resultBox.textContent = "Než kočku poprosíš, napiš otázku.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];
  resultBox.textContent = `Otázka: "${question}"

Věštba: ${fortune}`;
  questionInput.value = "";
  questionInput.focus();
});
