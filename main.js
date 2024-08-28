/*Código que simula el Inventario de una tienda y permite calcular el total a pagar de un cliente*/

let timeout;

let mercancia = [
  {
    nombre: "polo",
    precio: 4,
    disponibilidad: 10,
  },

  {
    nombre: "pantalones",
    precio: 9,
    disponibilidad: 18,
  },

  {
    nombre: "chaquetas",
    precio: 12,
    disponibilidad: 32,
  },

  {
    nombre: "sudaderas",
    precio: 3,
    disponibilidad: 20,
  },

  {
    nombre: "shorts",
    precio: 7,
    disponibilidad: 29,
  },
];

for (i = 1; i <= 5; i++) {
  document.getElementById("producto" + i).textContent =
    mercancia[i - 1].disponibilidad;
}

for (i = 1; i <= 5; i++) {
  document.getElementById("precio" + i).textContent = mercancia[i - 1].precio;
}

function inventario() {
  for (i = 1; i <= 5; i++) {
    let cantidadInicial = parseInt(
      document.getElementById("producto" + i).textContent
    );

    let agregar = parseInt(document.getElementById("agregar" + i).value);

    let restar = parseInt(document.getElementById("restar" + i).value);

    if (agregar<0 || restar<0) {

      Swal.fire({
        imageUrl: "https://martinbrainon.com/inicio/wp-content/uploads/2018/01/lead-nuclear-power-human-error-homer-simpson-1-600x398.jpg",
        imageHeight: 350,
        //text: "<b>Error, no puedes ingresar números negativos!<b>",
        confirmButtonText: `<i class="fa fa-thumbs-up"></i> Volver al Inventario`,
        imageAlt: "A tall image",
        html: `<b>Error, no puedes ingresar números negativos!</b>`
        
      });

    }

    else {

        let cantidadFinal = cantidadInicial + agregar - restar;

        document.getElementById("cantidadF" + i).textContent = cantidadFinal;

    }

    
  }
}

function pagar() {
  let pagarT = [];

  for (i = 1; i <= 5; i++) {
    pagarT[i - 1] =
      parseInt(document.getElementById("precio" + i).textContent) *
      parseInt(document.getElementById("restar" + i).value);
  }

  const PagoF = pagarT.reduce(
    (acumulador, cantidad) => acumulador + cantidad,
    0
  );

  document.getElementById("montaPagar").innerText =
    "El total a pagar es  " + PagoF;
}

//Cantidad de artículos que no están en inventario guardados en localStorage

localStorage.setItem("articulos", 34);

function articulosdemas() {
  const valor = localStorage.getItem("articulos");

  document.getElementById("textoFuera").textContent =
    "La cantidad total de artículos que no están en inventario son  " + valor;
}

//Uso de JSON para guardar un producto de inventario sin especificar

const inventariodesconocido = {
  nombre: "desconocido 1",

  cantidad: 25,
};

const articuloDesconocidos = JSON.stringify(inventariodesconocido);

localStor;


 function iniciarTimeout() {
            timeout = setTimeout(() => {
                document.getElementById("mensajeError").textContent="Por favor, introduce un valor."
            }, 4000);
        } 

//document.getElementById("mensajeError").textContent="Por favor, introduce un valor."
          