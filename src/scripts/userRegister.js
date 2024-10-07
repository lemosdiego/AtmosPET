// 1 Salvar valores do formulario
//1.1 capturar valores dos inputs
const form = document.querySelector("#formRegister");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomeCompleto = document.getElementById("nome-completo").value;
  const email = document.getElementById("email").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const cep = document.getElementById("cep").value;
  const rua = document.getElementById("rua").value;
  const numero = document.getElementById("numero").value;
  const senha = document.getElementById("senha").value;
  const confirmaSenha = document.getElementById("confirma-senha").value;

  const userRegisterData = {
    nomeCompleto,
    email,
    whatsapp,
    cep,
    rua,
    numero,
    senha,
    confirmaSenha,
  };
  localStorage.setItem("userRegisterData", JSON.stringify(userRegisterData));
  alert("Cadastro Realizado");
  form.reset();
});
