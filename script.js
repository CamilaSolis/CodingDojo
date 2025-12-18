document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission
    const user = document.getElementById('usuario').value.trim();
    const pass = document.getElementById('contrasena').value.trim();
    const errorMsg = document.getElementById('error-message');

    const validUsers = {
        'Admin': '1234',
        'Ginett': '2345',
        'Oscar': '3456',
        'Cristian': '4567',
        'Luis': '5678',
        'Felipe': '6789'
    };

    if (!user || !pass) {
        errorMsg.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Por favor complete todos los campos';
        errorMsg.style.display = 'block';
    } else if (validUsers[user] === pass) {
        errorMsg.style.display = 'none';
        alert('Login exitoso. Bienvenido, ' + user + '!');
        // Here you can redirect or perform further actions
    } else {
        errorMsg.innerHTML = '<i class="fas fa-exclamation-triangle"></i> El usuario o la contraseña no son correctas, intentelo denuevo';
        errorMsg.style.display = 'block';
    }
});

document.querySelector('.chat-icon').addEventListener('click', function() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'none';
});

document.getElementById('send-chat').addEventListener('click', function() {
    sendMessage();
});

document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    const chatError = document.getElementById('chat-error');
    if (!message) {
        chatError.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Porfavor ingresa un mensaje';
        chatError.style.display = 'block';
    } else {
        chatError.style.display = 'none';
        const chatBody = document.querySelector('.chat-body');
        const newMessage = document.createElement('p');
        newMessage.textContent = 'Tú: ' + message;
        chatBody.appendChild(newMessage);
        input.value = '';
        input.focus();
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
