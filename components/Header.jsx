import Navbar from "./Navbar";
import Image from "next/image";
import stylesHeader from "./header.module.css";

const Header = ({ children }) => {
  return (
    <header className={stylesHeader.header}>
      <div className={stylesHeader.header__container}>
        <div className={stylesHeader.header__content} >
          <Image
            className={stylesHeader.profile__image}
            src="/avatar.jpg"
            alt="Imagen de perfil"
            width={80}
            height={80}
            priority
          />
          <h1>Jairo Avila Maury</h1>
        </div>
        <Navbar />
      </div>
      {children}
    </header>
  );
};

export default Header;
