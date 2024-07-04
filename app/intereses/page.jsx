import Section from '@/components/Sections';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pildora from '@/components/Pildora';


import interesesStyles from './page.module.css'

const contenidoPildora = [
  "Programación",
  "Desarrollo web",
  "Inteligencia artificial",
  "Música",
  "Deportes",
  "Naturaleza"
]


const Intereses = () => {
  return (
    <>
    <Header/>
    <Section >
      <div className={interesesStyles.int__content} >
     <h2>Mis intereses</h2>
     <div className= {interesesStyles.pildoras__container}>
       
       {
        contenidoPildora.map((item, index) => (
            <Pildora key={index}  item={item} />
        ))
        
       }
     </div>
      </div>
    </Section>
    <Footer/>
    </>
  );
}

export default Intereses;
