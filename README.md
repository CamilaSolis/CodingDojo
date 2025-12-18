# Login con Chat

Un formulario de login responsivo con funcionalidad de chat integrado, diseñado con colores de la marca TCS.

## Descripción

Esta aplicación web proporciona una interfaz de login segura con autenticación de usuarios predefinidos, junto con un sistema de chat flotante para soporte al usuario. El diseño es completamente responsivo, adaptándose a dispositivos móviles y de escritorio.

## Características

- **Formulario de Login**:
  - Campos para usuario y contraseña con validación.
  - Mensajes de error para campos vacíos o credenciales incorrectas.
  - Diseño con labels flotantes y iconos.
  - Autenticación contra una lista de usuarios válidos.

- **Sistema de Chat**:
  - Icono flotante en la esquina inferior derecha (escritorio) o centrado (móvil).
  - Cuadro de chat modal con historial de mensajes.
  - Envío de mensajes con Enter o botón.
  - Validación de mensajes vacíos.
  - Tooltip informativo al pasar el mouse sobre el icono.

- **Diseño Responsivo**:
  - En móviles: pantalla completa para login y chat centrado.
  - En escritorio: login centrado en rectángulo, chat en esquina.
  - Adaptación automática sin scroll innecesario.

- **Colores TCS**:
  - Azul TCS (#5F68C3) como color principal.
  - Blanco para fondos y contraste.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilos, animaciones y responsividad.
- **JavaScript**: Lógica de validación, autenticación y chat.
- **Font Awesome**: Iconos para inputs y botones.
- **Jest**: Framework de pruebas unitarias con jsdom para simular el DOM.

## Pruebas

El proyecto incluye pruebas unitarias utilizando Jest y jsdom para verificar la estructura HTML, elementos del formulario y chat, clases CSS, e interacciones básicas.

Las pruebas cubren 4 casos principales:
1. Verificación de elementos del formulario de login.
2. Verificación de componentes del sistema de chat.
3. Validación de estructura HTML y clases CSS.
4. Simulación de interacciones y validaciones básicas.

Para ejecutar las pruebas, usa el comando:
```
npm test
```

## Instalación y Uso

1. Clona o descarga los archivos del proyecto.
2. Abre `index.html` en un navegador web.
3. Para probar el login, usa uno de los usuarios válidos:
   - Admin / 1234
   - Ginett / 2345
   - Oscar / 3456
   - Cristian / 4567
   - Luis / 5678
   - Felipe / 6789
4. Haz clic en el icono de chat para abrir el cuadro de conversación.

## Estructura de Archivos

- `index.html`: Página principal con el formulario y chat.
- `style.css`: Estilos CSS para el diseño y responsividad.
- `script.js`: Lógica JavaScript para funcionalidades interactivas.
- `index.test.js`: Archivo de pruebas unitarias con Jest.
- `package.json`: Configuración del proyecto y dependencias.

## Compatibilidad

Compatible con navegadores modernos que soporten HTML5, CSS3 y ES6.

## Autor

Desarrollado como parte de un proyecto de ejemplo.

## Notas

- El chat es simulado; los mensajes se muestran localmente sin backend.
- Para producción, integrar con un servidor para autenticación real y chat persistente.</content>
<parameter name="filePath">c:\Users\Camila\Desktop\CodeDojo\README.md