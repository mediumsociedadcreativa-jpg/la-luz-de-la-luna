// CONFIGURACIÓN DE LAS PÁGINAS DEL CUENTO (12 Páginas)
// Estructura genérica optimizada para reutilizar en futuros proyectos
const paginasCuento = [
  {
    imagen: "imagenes/escena1.webp",
    audio: "audios/lectura1.webp",
    objeto1: {
      src: "imagenes/gato1.png",
      postura: "postura-asustado",
      coordenadas: { top: "50%", left: "23%" }
    },
    objeto2: {
      src: "imagenes/mariposa.webp", 
      postura: "postura-mareado",
      coordenadas: { top: "45%", left: "28%" }
    }
  },
  {
    imagen: "imagenes/escena2.webp",
    audio: "audios/lectura2.mp3",
    objeto1: {
      src: "imagenes/gato2.webp",
      postura: "postura-flotar",
      coordenadas: { top: "35%", left: "25%" }
    },
    objeto2: {
      src: "",
    }
  },
  {
    imagen: "imagenes/escena3.webp",
    audio: "audios/lectura3.mp3",
    objeto1: {
      src: "imagenes/gato3.webp",
      postura: "postura-flotar",
      coordenadas: { top: "45%", left: "25%" }
    },
    objeto2: {
      src: "",
    }
  },
  {
    imagen: "imagenes/escena8.webp",
    audio: "audios/lectura4.mp3",
    objeto1: {
      src: "imagenes/gato3.webp",
      postura: "postura-flotar",
      coordenadas: { top: "45%", left: "25%" }
    },
    objeto2: {
      src: "imagenes/luna1.webp",
      postura: "postura-flotar",
      coordenadas: { top: "3%", left: "19%" }
    }
  },
  {
    imagen: "imagenes/escena3.webp",
    audio: "audios/lectura5.mp3",
    objeto1: {
      src: "imagenes/gato4.webp",
      postura: "",
      coordenadas: { top: "45%", left: "25%" }
    },
    objeto2: {
      src: "",
    }
  },
  {
    imagen: "imagenes/escena8.webp",
    audio: "audios/lectura6.mp3",
    objeto1: {
      src: "imagenes/gato5.webp",
      postura: "",
      coordenadas: { top: "45%", left: "25%" }
    },
    objeto2: {
      src: "imagenes/luna1.webp",
      postura: "postura-flotar",
      coordenadas: { top: "3%", left: "19%" }
    }
  },
  {
    imagen: "imagenes/escena3.webp",
    audio: "audios/lectura7.mp3",
    objeto1: {
      src: "imagenes/gato7.webp",
      postura: "",
      coordenadas: { top: "40%", left: "25%" }
    },
    objeto2: {
      src: "imagenes/luna1.webp",
      postura: "postura-flotar",
      coordenadas: { top: "3%", left: "19%" }
    }
  },
  {
    imagen: "imagenes/escena8.webp",
    audio: "audios/lectura8.mp3",
    objeto1: {
      src: "imagenes/gato8.webp",
      postura: "",
      coordenadas: { top: "45%", left: "28%" }
    },
    objeto2: {
      src: "imagenes/luna1.webp",
      postura: "postura-flotar",
      coordenadas: { top: "3%", left: "19%" }
    }
  },
  {
    imagen: "imagenes/escena8.webp",
    audio: "audios/lectura9.mp3",
    objeto1: {
      src: "imagenes/gato9.webp",
      postura: "",
      coordenadas: { top: "40%", left: "40%" }
    },
    objeto2: {
      src: "imagenes/luna1.webp",
      postura: "postura-flotar",
      coordenadas: { top: "3%", left: "19%" }
    }
  },
  {
    imagen: "imagenes/escena8.webp",
    audio: "audios/lectura10.mp3",
    objeto1: {
      src: "imagenes/gato10.webp",
      postura: "",
      coordenadas: { top: "40%", left: "35%" }
    },
    objeto2: {
      src: "imagenes/luna2.webp",
      postura: "postura-flotar",
      coordenadas: { top: "3%", left: "19%" }
    }
  },
  {
    imagen: "imagenes/escena9.webp",
    audio: "audios/lectura11.mp3",
    objeto1: {
      src: "imagenes/gato11.webp",
      postura: "",
      coordenadas: { top: "25%", left: "25%" }
    },
    objeto2: {
      src: "imagenes/corazon.webp",
      postura: "postura-flotar",
      coordenadas: { top: "15%", left: "25%" }
    }
  },
  {
    imagen: "imagenes/escena1.webp",
    audio: "audios/lectura12.mp3",
    objeto1: {
      src: "imagenes/gato12.webp",
      postura: "postura-mareado",
      coordenadas: { top: "45%", left: "30%" }
    },
    objeto2: {
      src: "imagenes/bola.webp",
      postura: "postura-asustado",
      coordenadas: { top: "52%", left: "15%" }
    }
  },
  {
    imagen: "imagenes/escena1.webp",
    audio: "audios/lectura13.mp3",
    objeto1: {
      src: "imagenes/gato13.webp",
      postura: "postura-flotar",
      coordenadas: { top: "45%", left: "30%" }
    },
    objeto2: {
      src: "imagenes/corazon.webp",
      postura: "postura-asustado",
      coordenadas: { top: "32%", left: "35%" }
    }
  },
  {
    imagen: "imagenes/escena12.webp",
    audio: "audios/lectura14.mp3",
    objeto1: {
      src: "imagenes/gato14.webp",
      postura: "postura-flotar",
      coordenadas: { top: "7%", left: "45%" }
    },
    objeto2: {
      src: "imagenes/luna3.webp",
      postura: "postura-flotar",
      coordenadas: { top: "10%", left: "10%" }
    }
  }
];

let paginaActual = 0;
const audioCuento = document.getElementById('audio-cuento');
const audioEfecto = document.getElementById('audio-efecto');
const imgPagina = document.getElementById('imagen-pagina');

// Instancias del DOM asignadas a las nuevas variables genéricas
const elObjeto1 = document.getElementById('objeto1-interactivo');
const elObjeto2 = document.getElementById('objeto2-interactivo');

const progresoFill = document.getElementById('progreso-fill');
const contador = document.getElementById('contador-pagina');

function comenzar() {
  document.getElementById('pantalla-inicio').classList.add('oculto');
  document.getElementById('visor').classList.remove('oculto');
  
  // Forzamos el inicio limpio en la página 1 (índice 0) al hacer clic físico
  paginaActual = 0;
  cargarPagina();
}

function cargarPagina() {
  const datos = paginasCuento[paginaActual];
  
  if (!datos) return; // Validación de seguridad por si el arreglo falla
  
  imgPagina.src = datos.imagen;
  contador.textContent = `${paginaActual + 1} / ${paginasCuento.length}`;
  
  const porcentaje = ((paginaActual + 1) / paginasCuento.length) * 100;
  progresoFill.style.width = `${porcentaje}%`;

  // --- RENDERIZADO DEL OBJETO INTERACTIVO 1 ---
  if (elObjeto1) {
    if (datos.objeto1 && datos.objeto1.src) {
      elObjeto1.src = datos.objeto1.src;
      elObjeto1.className = datos.objeto1.postura; 
      elObjeto1.style.top = datos.objeto1.coordenadas.top;
      elObjeto1.style.left = datos.objeto1.coordenadas.left;
      elObjeto1.classList.remove('oculto');
    } else {
      elObjeto1.classList.add('oculto');
    }
  }

  // --- RENDERIZADO DEL OBJETO INTERACTIVO 2 ---
  if (elObjeto2) {
    if (datos.objeto2 && datos.objeto2.src) {
      elObjeto2.src = datos.objeto2.src;
      elObjeto2.className = datos.objeto2.postura; 
      elObjeto2.style.top = datos.objeto2.coordenadas.top;
      elObjeto2.style.left = datos.objeto2.coordenadas.left;
      elObjeto2.classList.remove('oculto');
    } else {
      elObjeto2.classList.add('oculto');
    }
  }

  const btnJugar = document.getElementById('btn-jugar');

  // Limpieza y reasignación de eventos de estado para el botón Play
  if (audioCuento) {
    audioCuento.onplaying = null;
    audioCuento.onpause = null;
    audioCuento.onended = null;

    audioCuento.onplaying = function() {
      if(btnJugar) btnJugar.classList.add('play-bailando');
    };
    audioCuento.onpause = function() {
      if(btnJugar) btnJugar.classList.remove('play-bailando');
    };
    audioCuento.onended = function() {
      if(btnJugar) btnJugar.classList.remove('play-bailando');
    };

    // Asignación segura del archivo de audio
    audioCuento.src = datos.audio;
    audioCuento.load();
    audioCuento.play()
      .catch(e => {
        if(btnJugar) btnJugar.classList.remove('play-bailando');
        console.log("Audio en espera debido a las restricciones del navegador.");
      });
  }

  const botonRegresar = document.getElementById('btn-regresar');
  const botonAvanzar = document.getElementById('btn-avanzar');

  if(botonRegresar) botonRegresar.disabled = (paginaActual === 0);
  if(botonAvanzar) botonAvanzar.disabled = (paginaActual === paginasCuento.length - 1);
}

function paginaSiguiente() {
  if (paginaActual < paginasCuento.length - 1) {
    if (audioEfecto) audioEfecto.play().catch(e => {}); 
    paginaActual++;
    cargarPagina();
  }
}

function paginaAnterior() {
  if (paginaActual > 0) {
    if (audioEfecto) audioEfecto.play().catch(e => {}); 
    paginaActual--;
    cargarPagina();
  }
}

function toggleAudio() {
  if (audioCuento.paused) {
    audioCuento.play().catch(e => {});
  } else {
    audioCuento.pause();
  }
}

function regresarAlMenu() {
  if (audioCuento) audioCuento.pause();
  window.location.href = "../index.html"; 
}

// CONTROL DE ARRANCADO SEGURO
document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  const vieneDeEncadenadorURL = parametros.get('saltarPortada') === 'true';
  const vieneDeEncadenadorSesion = sessionStorage.getItem('sesionIniciada') === 'true';
  
  if (vieneDeEncadenadorURL || vieneDeEncadenadorSesion) {
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('visor').classList.remove('oculto');
    
    // Si viene de un redireccionamiento externo forzado, se carga con normalidad
    paginaActual = 0; 
    cargarPagina();
  } else {
    console.log("Esperando clic del usuario en 'Comenzar' para iniciar de forma segura.");
  }
});
