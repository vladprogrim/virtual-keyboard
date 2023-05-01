// Создаем элементы клавиатуры
const keyboardElement = document.createElement("div");
keyboardElement.classList.add("keyboard");

const keysContainer = document.createElement("div");
keysContainer.classList.add("keys");

keyboardElement.appendChild(keysContainer);
document.body.appendChild(keyboardElement);

// Определяем раскладку для русской и английской клавиатур
const RUSSIAN_LAYOUT = [
  "ё 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
  "{tab} й ц у к е н г ш щ з х ъ \\",
  "{lock} ф ы в а п р о л д ж э {enter}",
  "{shift} я ч с м и т ь б ю . {shift}",
  "alt {space}",
];

const ENGLISH_LAYOUT = [
  "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
  "{tab} q w e r t y u i o p [ ] \\",
  "{lock} a s d f g h j k l ; ' {enter}",
  "{shift} z x c v b n m , . / {shift}",
  "alt {space}",
];

// Определяем текущую раскладку и создаем клавиши
let currentLayout = RUSSIAN_LAYOUT;

function createKeys(layout) {
  layout.forEach((keyRow) => {
    const keyRowElement = document.createElement("div");
    keyRowElement.classList.add("keyrow");

    keyRow.split(" ").forEach((key) => {
      const keyElement = document.createElement("button");
      keyElement.classList.add("key");
      keyElement.id = key;

      switch (key) {
        case "{bksp}":
          keyElement.textContent = "Backspace";
          keyElement.addEventListener("click", () => {
            textareaElement.value = textareaElement.value.substring(
              0,
              textareaElement.value.length - 1
            );
          });
          break;

        case "{tab}":
          keyElement.textContent = "Tab";
          keyElement.addEventListener("click", () => {
            textareaElement.value += "\t";
          });
          break;

        case "{lock}":
          keyElement.textContent = "Caps Lock";
          break;

        case "{enter}":
          keyElement.textContent = "Enter";
          keyElement.addEventListener("click", () => {
            textareaElement.value += "\n";
          });
          break;

        case "{shift}":
          keyElement.textContent = "Shift";
          break;

        case "alt":
          keyElement.textContent = "alt";
          break;

        default:
          keyElement.textContent = key.toLowerCase();
          keyElement.addEventListener("click", () => {
            textareaElement.value += keyElement.textContent;
          });
          break;
      }

      keyRowElement.appendChild(keyElement);
    });

    keysContainer.appendChild(keyRowElement);
  });
}

createKeys(currentLayout);

// Добавляем текстовое поле
const textareaElement = document.createElement("textarea");
document.body.appendChild(textareaElement);

//
textareaElement.addEventListener("keypress", (event) => {
  const element = document.getElementById(event.key);
  console.log("EVENT: ", event);
  if (currentLayout.find((el) => el.includes(event.key))) {
    element.style.backgroundColor = "yellow";
    setTimeout(() => (element.style.backgroundColor = ""), 300);
  }
});
//

// Переключение на английскую раскладку при нажатии
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Shift") {
    currentLayout = ENGLISH_LAYOUT;
    keysContainer.innerHTML = "";
    createKeys(currentLayout);
  }

  if (key === "Alt") {
    altPressed = true;
  }
});

document.addEventListener("keyup", (event) => {
  const key = event.key;

  if (key === "Shift") {
    if (!altPressed) {
      currentLayout = RUSSIAN_LAYOUT;
      keysContainer.innerHTML = "";
      createKeys(currentLayout);
    }
  }

  if (key === "Alt") {
    altPressed = false;
  }
});
