import { Element } from "react-scroll";
import style from "./blog.module.css";

function Blog() {
  const primary = [
    {
      tipo: "CIUDAD",
      titulo: "Articulo de puente",
      imagen: "/assets/img/articulo_big_01.png",
      descripcion: "Un puente es una construcción que permite salvar un accidente geográfico como un río.",
      tiempo: "Hace 2m",
    },
    {
      tipo: "AVENTURA",
      titulo: "Articulo de bosque",
      imagen: "/assets/img/articulo_big_02.png",
      descripcion: "Lugar poblado de árboles y arbustos. Área con una importante densidad de árboles.",
      tiempo: "Hace 15m",
    },
  ];

  const secondary = [
    {
      titulo: "Artículo de elefante",
      imagen: "/assets/img/articulo_small_01.png",
      tiempo: "Hace 3h",
    },
    {
      titulo: "Artículo de loro",
      imagen: "/assets/img/articulo_small_02.png",
      tiempo: "Hace 4h",
    },
    {
      titulo: "Artículo de camino",
      imagen: "/assets/img/articulo_small_03.png",
      tiempo: "Hace 8h",
    },
  ];

  return (
    <Element name="blog" className={style.blog}>
      <div>
        <h2>BLOG</h2>
        <div>
          <div className={style.primary}>
            {primary.map((elem) => (
              <div key={elem.titulo} className={style.primaryCard}>
                <img src={elem.imagen} alt="image" />
                <div className={style.data}>
                  <h4>{elem.tipo}</h4>
                  <div>
                    <h2>{elem.titulo}</h2>
                    <p>{elem.descripcion}</p>
                    <div className={style.tiempo}>
                      <img src="/assets/iconos/time.png" alt="icon" />
                      <p>{elem.tiempo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={style.secondary}>
            {secondary.map((elem) => (
              <div key={elem.titulo} className={style.secondaryCard}>
                <img src={elem.imagen} alt="image" />
                <div>
                  <h4>{elem.titulo}</h4>
                  <div className={style.tiempo}>
                    <img src="/assets/iconos/time.png" alt="icon" />
                    <p className={style.tiempo}>{elem.tiempo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}
export default Blog;
