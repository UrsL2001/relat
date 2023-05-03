// recupera o valor armazenado do textarea
const savedValue = localStorage.getItem('textareaValue');

// obtém a referência para o textarea
const a1 = document.querySelector('#a1');
const b1 = document.querySelector('#b1');
const c1 = document.querySelector('#c1');


// define um ouvinte de evento que atualiza o valor armazenado sempre que houver uma alteração no textarea
textarea.addEventListener('input', () => {
  localStorage.setItem('textareaValue', textarea.value);
});

// define o valor do textarea como o valor armazenado
if (savedValue) {
  textarea.value = savedValue;
}
