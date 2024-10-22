import "./App.css";
import Noticia from "./components/Noticia.jsx";

function App() {
  const noticias = [
    {
      id: 0,
      avatarUrl: "/avatar01.png",
      titulo: "El chico en el atardecer",
      fecha: "11 de octubre de 2022",
      imagenUrl: "/sky.jpg",
      textoNoticia: "El precioso atardecer de una tarde de verano, el cielo pintado con colores llamativos por la puesta del sol, y las nubes enmarcando una preciosa vista.",
      likes: 38,
      altAvatar: 'Chico',
      altImagen: 'Cielo'
    },
    {
      id: 1,
      avatarUrl: "/avatar02.png",
      titulo: "La chica en el mar",
      fecha: "23 de mayo de 2023",
      imagenUrl: "/sea.jpg",
      textoNoticia: "Un mar en el que se refleja el sol, iluminando con fuerza toda su superficie y mostrando un paisaje digno de admirar y de recordar para siempre.",
      likes: 113,
      altAvatar: 'Chica',
      altImagen: 'Mar'
    },
    {
      id: 2,
      avatarUrl: "/avatar03.png",
      titulo: "La tortura del estudiante (Linux)",
      fecha: "17 de septiembre de 2023",
      imagenUrl: "/tux.jpg",
      textoNoticia: "El sistema operativo que, a pesar de ser mucho más seguro que cualquiera, causa pesadillas a todos los estudiantes y desean no ver nunca durante su enseñanza.",
      likes: 65,
      altAvatar: 'Pingüino de Linux',
      altImagen: 'Linux'
    },
    {
      id: 3,
      avatarUrl: "/avatar04.png",
      titulo: "Super Mario Bros",
      fecha: "19 de octubre de 2024",
      imagenUrl: "/mario.jpg",
      textoNoticia: "El juego que acompañó a miles de niños durante su infancia, una figura que todos saben reconocer y que sigue alegrando la vida de muchas personas con los buenos momentos que ofrece.",
      likes: 294,
      altAvatar: 'Mario Bros',
      altImagen: 'Super Mario'
    }
  ];
  return (
    <>
      {noticias.map((noticia) =>
        <Noticia key={noticia.id}
                 avatarUrl={noticia.avatarUrl}
                 titulo={noticia.titulo}
                 fecha={noticia.fecha}
                 imagenUrl={noticia.imagenUrl}
                 textoNoticia={noticia.textoNoticia}
                 likes={noticia.likes}
                 altAvatar={noticia.altAvatar}
                 altImagen={noticia.altImagen}
        />)}
    </>
  );
}

export default App;
