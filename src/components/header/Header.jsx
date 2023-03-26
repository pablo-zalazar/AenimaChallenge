import { useEffect, useState } from "react";
import style from "./header.module.css";
import { Link } from "react-scroll";

function Header() {
  const [current, setCurrent] = useState("home");
  const [show, setShow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1000);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.screen.width);
      if (window.screen.width >= 600) setShow(false);
    });
  }, []);

  const handleChangeActual = (value) => {
    setCurrent(value);
    setShow(false);
  };

  const handleChangeShow = () => {
    setShow(!show);
  };

  return (
    <header className={style.header}>
      <img src="/assets/logo/logo_01.png" alt="logo" />
      <img src="/assets/iconos/hamburguer_menu.png" alt="burguer icon" className={style.hamburguer} onClick={handleChangeShow} />
      <div className={screenWidth >= 600 ? "" : show ? style.open : style.close}>
        <nav>
          {screenWidth < 600 && <img src="/assets/iconos/no.png" alt="close icon" onClick={handleChangeShow} />}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className={current === "home" ? style.active : ""}
            onClick={() => handleChangeActual("home")}
          >
            HOME
          </Link>
          <Link
            to="trends"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className={current === "tendencias" ? style.active : ""}
            onClick={() => handleChangeActual("tendencias")}
          >
            TENDENCIAS
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className={current === "blog" ? style.active : ""}
            onClick={() => handleChangeActual("blog")}
          >
            BLOG
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
