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

const yesNoFortunes = [
  "Ano, dnes je pro to dobrý čas.",
  "Ne, raději počkej ještě chvíli.",
  "Spíš ano, ale buď připraven na změnu.",
  "Spíš ne, teď to není nejvhodnější okamžik.",
  "Ano, kočičí energie je na tvé straně.",
  "Ne, hvězdy raději doporučují trpělivost.",
  "Ano, je to šance, kterou stojí za to využít.",
  "Ne, teď je lepší dávat pozor a sledovat situaci."
];

const button = document.getElementById("fortuneButton");
const resultBox = document.getElementById("fortuneResult");
const questionInput = document.getElementById("fortuneQuestion");

function isYesNoQuestion(text) {
  const lower = text.toLowerCase();
  const yesNoStart = /^(je|bude|budeš|budou|může|mohou|mohu|můžeš|máš|máte|mají|musím|musíš|chce|stane|dostanu|lze|li)\b/;
  const yesNoPhrase = /(ano\s*ne|ano\/ne|ano nebo ne|li\s*ne|li\s*ano)/;
  return yesNoStart.test(lower) || yesNoPhrase.test(lower);
}

function getFortune(question) {
  if (isYesNoQuestion(question)) {
    const index = Math.floor(Math.random() * yesNoFortunes.length);
    return yesNoFortunes[index];
  }

  const index = Math.floor(Math.random() * fortunes.length);
  return fortunes[index];
}

button.addEventListener("click", () => {
  const question = questionInput.value.trim();
  if (!question) {
    resultBox.textContent = "Než kočku poprosíš, napiš otázku.";
    return;
  }

  const fortune = getFortune(question);
  resultBox.textContent = `Otázka: "${question}"

Věštba: ${fortune}`;
  questionInput.value = "";
  questionInput.focus();
});
