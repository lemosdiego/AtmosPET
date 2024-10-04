document.addEventListener("DOMContentLoaded", function () {
  const userLoginActive = localStorage.getItem("usuarioLogado");

  const authButtons = document.querySelector("#authButtons");
  const profileIcon = document.querySelector("#profileIcon");
  const logoutButton = document.querySelector("#logoutButton");

  if (userLoginActive) {
    authButtons.style.display = "none";
    profileIcon.style.display = "flex";
    logoutButton.style.display = "inline-block";

    logoutButton.onclick = function () {
      localStorage.removeItem("usuarioLogado");
      location.reload();
    };
    profileIcon.appendChild(logoutButton);
  } else {
    authButtons.style.display = "flex";
    profileIcon.style.display = "none";
  }
});
