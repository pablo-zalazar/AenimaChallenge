import { Element } from "react-scroll";
import style from "./trends.module.css";

function Trends() {
  const data = [
    {
      title: "Montañas y magia",
      description: "Aquí la descripción para Montañas y magia",
      image: "/assets/img/card_01.png",
      new: true,
    },
    {
      title: "Playas y sol",
      description: "La descripción de Playas y sol debe ser esta",
      image: "/assets/img/card_02.png",
      new: false,
    },
    {
      title: "Nieve y aventura",
      description: "Contiene la informacion de Nieve y aventuras",
      image: "/assets/img/card_03.png",
      new: false,
    },
  ];

  return (
    <Element name="trends" className={style.tendencias}>
      <div>
        <h2>TENDENCIAS</h2>
        <div className={style.cardsContainer}>
          {data.map((elem) => (
            <div key={elem.title} className={!elem.new ? style.old : style.card}>
              <img src={elem.image} alt="iamge" />
              <div>
                <h4>{elem.title}</h4>
                <p>{elem.description}</p>
                {elem.new && <p className={style.new}>Nuevo</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
export default Trends;
