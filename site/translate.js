const translations = {
  en: {
    "days-label": "day",
    "percent-end": "%",
    "percent-start": "",
    pluralSuffix: "s",
    title: "countdown",
    "weeks-label": "week",
  },
  tr: {
    "days-label": "gün",
    "percent-end": "",
    "percent-start": "%",
    pluralSuffix: "",
    title: "geri sayım",
    "weeks-label": "hafta",
  },
};

const language =
  new URLSearchParams(window.location.search).get("lang") ??
  (navigator.language.startsWith("tr") ? "tr" : "en");
const labelSuffix = "-label";
const text = translations[language];

const pluralSuffix = (id) => {
  const number = Number(
    document.getElementById(id.slice(0, -labelSuffix.length)).textContent,
  );
  if (number === 0 || number > 1) {
    return text.pluralSuffix;
  }

  return "";
};

const translateElem = (id) => {
  let content = text[id];

  if (["pluralSuffix", "percentPosition"].includes(id)) {
    return;
  }

  if (id === "title") {
    document.title = content;
    return;
  }

  if (id.endsWith(labelSuffix)) {
    content += pluralSuffix(id, content);
  }

  document.getElementById(id).textContent = content;
};

const translate = () => {
  for (const id of Object.keys(text)) {
    translateElem(id);
  }
};

export default translate;
