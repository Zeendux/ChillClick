const btn = document.getElementById('copyBtn');

btn.addEventListener('click', function () {
  const originalText = btn.innerText;
  const textToCopy = btn.dataset.text;

  navigator.clipboard.writeText(textToCopy).then(() => {
    btn.innerText = 'Скопировано!';
    //btn.disabled = true; // необязательно — можно убрать
    btn.style.backgroundColor = '';
    btn.style.color = '';

    setTimeout(() => {
      btn.innerText = originalText;
      btn.disabled = false;
      btn.style.backgroundColor = '';
      btn.style.color = '';
    }, 500); // через 2 секунды вернуть назад
  });
});
