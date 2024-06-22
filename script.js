// Coloque aqui o conteúdo do arquivo script.js, se houver
function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    if (username === "rodrigo" && password === "1234") {
        // Sucesso no login
        errorMessage.style.display = "none";
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        // Erro no login
        errorMessage.style.display = "block";
        errorMessage.textContent = "Credenciais incorretas. Tente novamente.";
    }
}

function logout() {
    document.getElementById("loginForm").reset(); // Limpar campos de login
    document.getElementById("content").style.display = "none";
    document.getElementById("loginContainer").style.display = "block";
}

function forgotPassword() {
    var username = document.getElementById("username").value;

    if (username.trim() === "") {
        alert("Por favor, insira seu nome de usuário para redefinir a senha.");
        return;
    }

    // Aqui você implementaria a lógica real para enviar um e-mail para o usuário
    alert("Um e-mail foi enviado para redefinir sua senha.");
}
