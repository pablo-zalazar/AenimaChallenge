import style from "./footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <img src="/assets/logo/logo_02.png" alt="logo" />
      <div>
        <img src="/assets/iconos/instagram.png" alt="logo instagram" />
        <img src="/assets/iconos/facebook.png" alt="logo facebook" />
      </div>
    </footer>
  );
}
export default Footer;
