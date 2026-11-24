const result = document.getElementById('result');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const message = document.getElementById('message');

let count = 0;

function updateUI() {
  result.textContent = count;

  // Цвет фона в зависимости от значения
  result.classList.remove('positive', 'negative', 'zero');
  if (count > 0) {
    result.classList.add('positive');
  } else if (count < 0) {
    result.classList.add('negative');
  } else {
    result.classList.add('zero');
  }

  // Блокировка кнопок на экстремальных значениях
  plusBtn.disabled = count >= 10;
  minusBtn.disabled = count <= -10;

  // Сообщение о достижении экстремального значения
  if (count === 10 || count === -10) {
    message.textContent = 'Вы достигли экстремального значения';
  } else {
    message.textContent = '';
  }
}

plusBtn.addEventListener('click', () => {
  if (count < 10) {
    count++;
    updateUI();
  }
});

minusBtn.addEventListener('click', () => {
  if (count > -10) {
    count--;
    updateUI();
  }
});

// Начальное состояние
updateUI();
