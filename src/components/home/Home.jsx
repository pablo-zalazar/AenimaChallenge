import style from "./home.module.css";
import { Element } from "react-scroll";

function Home() {
  return (
    <Element name="home" className={style.home}>
      <div className={style.left}>
        <h1>
          <img src="/assets/iconos/ic_pin.png" /> AMERICA DEL SUR
        </h1>
        <h3>Lugares maravillosos por America del sur</h3>
        <p>Estos son algunos lugares que elijen la mayoría de los turistas que visitan America del Sur</p>
      </div>
      <div className={style.right}>
        <p>
          PRÓXIMAS AVENTURA <img src="/assets/iconos/arrow.png" />
        </p>
        <p>Europa Meridional</p>
        <p>Forman parte de veinte países, ej. España, Francia, etc.</p>
      </div>
      <div className={style.slider}>01</div>
    </Element>
  );
}
export default Home;
