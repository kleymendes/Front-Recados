const email = document.getElementById("criarEmail");
const senha = document.getElementById("criarSenha");
const confSenha = document.getElementById("confirmarSenha");

let usuario = [];
let numero = 0;

function criarConta() {
  usuario = {
    email: email.value,
    senha: senha.value,
  };
  
  localStorage.setItem("usuario", JSON.stringify(usuario));
  user = JSON.parse(localStorage.usuario)

  if (email.value == user.email && senha.value == user.senha) {
    localStorage.setItem("acesso", true);
    alert("Entrando no sistema");
    window.location.href = "recados.html";
  } else {
    alert("Usuário ou senha inválidos");
    alert("Você não possui uma conta crie um usuário");
    window.location.href = "usuario.html";
  }
}