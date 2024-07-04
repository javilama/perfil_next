import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Sections";

import styles from "./page.module.css";

export default function Home({ children }) {
  return (
    <>
      <Header />
      <Section>
        <div className={styles.content}>
          <h2>Sobre mí</h2>
          <p>
            Creo en el poder del trabajo en equipo para potenciar la creatividad
            y la eficiencia de los proyectos. Me apasiona aprender y enseñar, y
            disfruto compartiendo mis conocimientos con los demás.
          </p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
