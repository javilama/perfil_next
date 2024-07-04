import pildoraStyle from './pildora.module.css'



const Pildora = ({index,item}) => {

  return (
    <div className= {pildoraStyle.pildora} >
     {item}
    </div>
  );
}

export default Pildora;
