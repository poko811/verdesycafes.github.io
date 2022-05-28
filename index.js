const btnMenu = document.querySelector(".btn_menu")
const menuItems = document.querySelector(".menu_items")

btnMenu.addEventListener("click", () => {
  menuItems.classList.toggle("menu_items_visible")
})

  (function () {
    var formulario = document.getElementsByName("formulario")[0],

      elementos = formulario.element,
      boton = document.getElementById("btn")

    var validarNombre = function (e) {
      if (formulario.nombre.value == 0) {
        alert("Ingrese su nombre");
        e.preventDefault();
      }
    }
    var validarApellido = function (e) {
      if (formulario.apellido.value == 0) {
        alert("Ingrese su apellido");
        e.preventDefault();
      }
    }
    var validarDni = function (e) {
      if (formulario.dni.value == 0) {
        alert("Ingrese su DNI");
        e.preventDefault();
      }
    }
    var validarFecha = function (e) {
      if (formulario.fecha.value == 0) {
        alert("Ingrese su fecha de nacimiento");
        e.preventDefault();
      }
    }
    var validarDireccion = function (e) {
      if (formulario.direccion.value == 0) {
        alert("Ingrese su direccion");
        e.preventDefault();
      }
    }
    var validarDirnumero = function (e) {
      if (formulario.dirnumero.value == 0) {
        alert("Ingrese su numero de calle");
        e.preventDefault();
      }
    }
    var validarPiso = function (e) {
      if (formulario.piso.value == 0) {
        alert("Ingrese su Piso");
        e.preventDefault();
      }
    }
    var validarDpto = function (e) {
      if (formulario.dpto.value == 0) {
        alert("Ingrese su Dpto");
        e.preventDefault();
      }
    }
    var validarCorreo = function (e) {
      if (formulario.correo.value == 0) {
        alert("Ingrese su Email");
        e.preventDefault();
      }
    }
    var validarUsuario = function (e) {
      if (formulario.usuario.value == 0) {
        alert("Ingrese un Usuario");
        e.preventDefault();
      }
    }
    var validarContrasena = function (e) {
      if (formulario.contrasena.value == 0) {
        alert("Ingrese una Contraseña");
        e.preventDefault();
      }
    }
    var validarZona = function (e) {
      console.log(formulario.zona.value)
      if (formulario.zona.value == 0) {
        alert("elija una zona");
        e.preventDefault();
      }
    }



    var validar = function (e) {
      validarNombre(e);
      validarApellido(e);
      validarDni(e)
      validarFecha(e)
      validarDireccion(e)
      validarDirnumero(e)
      validarPiso(e)
      validarDpto(e)
      validarCorreo(e)
      validarUsuario(e)
      validarContrasena(e)
      validarZona(e)
    }

    formulario.addEventListener("submit", validar)
  }())
