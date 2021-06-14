let user;

function logar() {
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  user = JSON.parse(localStorage.usuario);

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