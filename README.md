# Actividad5-ProyectoLogin-ProgramacionWeb

# Explicación y documentación
Los frameworks usados provienen de la siguiente página; **[Material Design for Bootstrap versión 5](https://mdbootstrap.com/docs/standard/extended/login/)**, además de la incorporación del [cdn](https://cdn.jsdelivr.net/gh/leosc91/Componente-Menu@main/css/componente.css) proveniente de la [librería propia](https://github.com/leosc91/Componente-Menu) para la incorporación del componente visual Menú Dropdown, el flujo inicia en el login, al confirmar a través del mismo las credenciales (correo y contraseña), pasa al index (pantalla del sistema), en el cual se encuentran las funcionalidades requeridas.

La ventana que corresponde al index (pantalla del sistema), cuenta con 3 funciones principales:
```javascript
validarCorreo(correo)
validarPassword(password)
function(evento)
```
las funciones de **validación** es la parte lógica que corrobora que el correo y la contraseña se encuentren escritas en el formato adecuado, mientras que **function** se encarga de ejecutar esas validaciones.
# Proceso de creación
## Sidebar
El recurso visual Sidebar se implementó nativamente con el uso de la estructura **div**, la cual contiene **header, label, input** y **button** 
```html
    <div id="sidebar" class="sidebar">
        <h3>Menú Usuarios</h3>
        <h4>Captura</h4>
        
        <form id="formulario-captura">
            <label for="nombre">Nombre de usuario:</label>
            <input type="text" id="nombre" required>

            <label for="correo">Correo electrónico:</label>
            <input type="email" id="correo" required>

            <label for="password">Contraseña:</label>
            <input type="password" id="password" required>

            <button type="submit" class="boton-validar">Validar Datos</button>
        </form>
        
        <p id="mensaje-validacion"></p>
    </div>
```
para que la identidad visual de la página mantuviera integra se implementó por medio del lenguaje de diseño **CSS**.
<img width="712" height="535" alt="image" src="https://github.com/user-attachments/assets/fe9e244d-4986-40ed-8f8f-c5188f1d516a" />

## Navbar
Para la implementación de componente visual Navbar, como se mencionó con anterioridad se implemento una librería propia por medio de un recurso cdn la cual se puede obtener [aquí](https://cdn.jsdelivr.net/gh/leosc91/Componente-Menu@main/css/componente.css).
<div align="center">
<img width="205" height="163" alt="image" src="https://github.com/user-attachments/assets/53b1968f-3869-4118-83a9-dcd062384390" />
</div>

# Flujo
