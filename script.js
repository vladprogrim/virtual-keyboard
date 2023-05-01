// Создаем элемент-контейнер для клавиатуры
const keyboardContainer = document.createElement('div');
keyboardContainer.style.display = 'flex';
keyboardContainer.style.flexWrap = 'wrap';
keyboardContainer.style.width = '400px';
keyboardContainer.style.margin = 'auto';
document.body.appendChild(keyboardContainer);

// Создаем элемент-контейнер для отображения нажатых клавиш
const screenContainer = document.createElement('div');
screenContainer.style.width = '400px';
screenContainer.style.height = '50px';
screenContainer.style.border = '1px solid black';
screenContainer.style.margin = '10px auto';
screenContainer.style.textAlign = 'center';
screenContainer.style.lineHeight = '50px';
keyboardContainer.parentNode.insertBefore(screenContainer, keyboardContainer.nextSibling);

// Создаем массив с символами клавиатуры
const keyboardKeys = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Fn', 'Ctrl', 'Alt', 'Space', 'AltGr', 'Ctrl', '←', '↑', '↓', '→',
    'Backspace'
  ];

  let inputString = '';

  // Добавляем символы клавиатуры на экран
  keyboardKeys.forEach((key) => {
    const keyElement = document.createElement('button');
    keyElement.textContent = key;
    keyElement.style.width = '30px';
    keyElement.style.height = '30px';
    keyElement.style.margin = '5px';
    keyElement.addEventListener('click', () => {
      if (key === 'Backspace') {
        inputString = inputString.slice(0, -1);
      } else {
        inputString += key;
      }
      screenContainer.textContent = inputString;
    });
    keyboardContainer.appendChild(keyElement);
  });

  // Добавляем обработчик событий для клавиши backspace на клавиатуре
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      inputString = inputString.slice(0, -1);
      screenContainer.textContent = inputString;
    }
  });