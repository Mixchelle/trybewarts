document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
function contador(event) {
  counter.innerHTML = 500;
  counter.innerHTML -= event.target.value.length;
}
textarea.addEventListener('keyup', contador);
document.addEventListener('DOMContentLoaded', () => {
  const evaluationForm = document.getElementById('evaluation-form');
  const formDataSection = document.getElementById('form-data-section');

  evaluationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Preencher os dados no form-data (exemplo)
    document.getElementById('form-name').textContent = `Nome: ${document.getElementById('input-name').value}`;
    document.getElementById('form-email').textContent = `Email: ${document.getElementById('input-email').value}`;
    document.getElementById('form-house').textContent = `Casa: ${document.getElementById('house').value}`;
    document.getElementById('form-family').textContent = `Família: ${document.querySelector('input[name="family"]:checked').value}`;
    document.getElementById('form-subjects').textContent = `Conteúdos: ${Array.from(document.querySelectorAll('.subject:checked')).map((subject) => subject.value).join(', ')}`;
    document.getElementById('form-rating').textContent = `Nota: ${document.querySelector('input[name="rate"]:checked').value}`;
    document.getElementById('form-comments').textContent = `Comentário: ${document.getElementById('textarea').value}`;

    formDataSection.style.display = 'block'; // Exibe a seção com os dados do formulário
    evaluationForm.style.display = 'none'; // Oculta o formulário
  });
});
