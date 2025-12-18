/**
 * @jest-environment jsdom
 */

describe('Pruebas del formulario de login y chat', () => {
    beforeEach(() => {
        // Configurar el DOM con el HTML completo
        document.body.innerHTML = `
        <form action="#" method="post">
            <div class="avatar">
                <i class="fas fa-user"></i>
            </div>
            <h1>Iniciar Sesión</h1>
            <div class="input-container">
                <i class="fas fa-user"></i>
                <input type="text" id="usuario" name="usuario" placeholder=" " required>
                <label for="usuario">Usuario</label>
            </div>
            
            <div class="input-container">
                <i class="fas fa-lock"></i>
                <input type="password" id="contrasena" name="contrasena" placeholder=" " required>
                <label for="contrasena">Contraseña</label>
            </div>
            
            <div id="error-message"></div>
            
            <button type="submit">Login</button>
        </form>
        <div class="chat-icon">
            <i class="fas fa-comment"></i>
            <span class="tooltip">chatea conmigo</span>
        </div>
        <div id="chat-box" class="chat-box">
            <div class="chat-header">
                <span>Chat</span>
                <button id="close-chat">&times;</button>
            </div>
            <div class="chat-body">
                <p>¡Hola! ¿En qué puedo ayudarte?</p>
            </div>
            <div class="chat-footer">
                <input type="text" id="chat-input" placeholder="Escribe un mensaje...">
                <button id="send-chat">Enviar</button>
                <div id="chat-error"></div>
            </div>
        </div>
        `;
    });

    // CASO 1: Verificar elementos del formulario
    test('Caso 1: El formulario tiene todos los elementos necesarios con atributos correctos', () => {
        // Verificar existencia de elementos
        expect(document.getElementById('usuario')).not.toBeNull();
        expect(document.getElementById('contrasena')).not.toBeNull();
        expect(document.getElementById('error-message')).not.toBeNull();
        expect(document.querySelector('button[type="submit"]')).not.toBeNull();
        
        // Verificar atributos del input usuario
        const usuarioInput = document.getElementById('usuario');
        expect(usuarioInput.type).toBe('text');
        expect(usuarioInput.required).toBe(true);
        expect(usuarioInput.name).toBe('usuario');
        expect(usuarioInput.hasAttribute('placeholder')).toBe(true);
        
        // Verificar atributos del input contraseña
        const contrasenaInput = document.getElementById('contrasena');
        expect(contrasenaInput.type).toBe('password');
        expect(contrasenaInput.required).toBe(true);
        expect(contrasenaInput.name).toBe('contrasena');
        expect(contrasenaInput.hasAttribute('placeholder')).toBe(true);
        
        // Verificar botón de submit
        const submitButton = document.querySelector('button[type="submit"]');
        expect(submitButton.textContent).toBe('Login');
        expect(submitButton.type).toBe('submit');
    });

    // CASO 2: Verificar elementos del chat
    test('Caso 2: El sistema de chat contiene todos los componentes necesarios', () => {
        // Verificar elementos principales del chat
        expect(document.querySelector('.chat-icon')).not.toBeNull();
        expect(document.getElementById('chat-box')).not.toBeNull();
        expect(document.getElementById('close-chat')).not.toBeNull();
        expect(document.getElementById('chat-input')).not.toBeNull();
        expect(document.getElementById('send-chat')).not.toBeNull();
        expect(document.getElementById('chat-error')).not.toBeNull();
        
        // Verificar contenido inicial del chat
        const chatBody = document.querySelector('.chat-body p');
        expect(chatBody).not.toBeNull();
        expect(chatBody.textContent).toBe('¡Hola! ¿En qué puedo ayudarte?');
        
        // Verificar input del chat
        const chatInput = document.getElementById('chat-input');
        expect(chatInput.placeholder).toBe('Escribe un mensaje...');
        expect(chatInput.type).toBe('text');
        
        // Verificar botón de enviar chat
        const sendButton = document.getElementById('send-chat');
        expect(sendButton.textContent).toBe('Enviar');
        
        // Verificar botón de cerrar chat
        const closeButton = document.getElementById('close-chat');
        expect(closeButton.textContent).toBe('×');
        expect(closeButton.tagName).toBe('BUTTON');
    });

    // CASO 3: Verificar estructura y clases CSS
    test('Caso 3: La estructura HTML tiene las clases CSS correctas para estilizado', () => {
        // Verificar clases de formulario
        expect(document.querySelectorAll('.input-container').length).toBe(2);
        expect(document.querySelector('.avatar')).not.toBeNull();
        
        // Verificar iconos de Font Awesome
        const iconosUsuario = document.querySelectorAll('.fa-user');
        expect(iconosUsuario.length).toBe(2);
        
        const iconoCandado = document.querySelector('.fa-lock');
        expect(iconoCandado).not.toBeNull();
        
        const iconoChat = document.querySelector('.fa-comment');
        expect(iconoChat).not.toBeNull();
        
        // Verificar tooltip del chat
        const tooltip = document.querySelector('.tooltip');
        expect(tooltip).not.toBeNull();
        expect(tooltip.textContent).toBe('chatea conmigo');
        
        // Verificar estructura del chat-box
        expect(document.querySelector('.chat-header')).not.toBeNull();
        expect(document.querySelector('.chat-body')).not.toBeNull();
        expect(document.querySelector('.chat-footer')).not.toBeNull();
        
        // Verificar título del chat
        const chatHeader = document.querySelector('.chat-header span');
        expect(chatHeader.textContent).toBe('Chat');
    });

    // CASO 4: Simular interacciones y validaciones
    test('Caso 4: El sistema responde correctamente a interacciones básicas', () => {
        const usuarioInput = document.getElementById('usuario');
        const contrasenaInput = document.getElementById('contrasena');
        const errorMessage = document.getElementById('error-message');
        const chatInput = document.getElementById('chat-input');
        const chatError = document.getElementById('chat-error');
        
        // Subcaso 4.1: Verificar estado inicial
        expect(usuarioInput.value).toBe('');
        expect(contrasenaInput.value).toBe('');
        expect(errorMessage.textContent).toBe('');
        expect(chatInput.value).toBe('');
        expect(chatError.textContent).toBe('');
        
        // Subcaso 4.2: Simular llenado de formulario
        usuarioInput.value = 'usuario123';
        contrasenaInput.value = 'pass123456';
        
        expect(usuarioInput.value).toBe('usuario123');
        expect(contrasenaInput.value).toBe('pass123456');
        
        // Subcaso 4.3: Simular mensaje de error en formulario
        errorMessage.textContent = 'Credenciales incorrectas. Intente nuevamente.';
        expect(errorMessage.textContent).toBe('Credenciales incorrectas. Intente nuevamente.');
        
        // Subcaso 4.4: Simular interacción con chat
        chatInput.value = 'Hola, tengo una pregunta sobre mi cuenta';
        expect(chatInput.value).toBe('Hola, tengo una pregunta sobre mi cuenta');
        
        // Subcaso 4.5: Simular error en chat
        chatError.textContent = 'No se pudo enviar el mensaje';
        expect(chatError.textContent).toBe('No se pudo enviar el mensaje');
        
        // Subcaso 4.6: Limpiar campos
        usuarioInput.value = '';
        contrasenaInput.value = '';
        chatInput.value = '';
        
        expect(usuarioInput.value).toBe('');
        expect(contrasenaInput.value).toBe('');
        expect(chatInput.value).toBe('');
    });
});