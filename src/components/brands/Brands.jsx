import bosch from "./img/Bosch.png";
import Junkers from "./img/Junkers.png";
import komeco from "./img/komeco.png";
import lorenzetti from "./img/lorenzetti.png";
import orbis from "./img/orbis.png";
import Rheem from "./img/Rheem.png";
import Rinnai from "./img/Rinnai.png";
import sakura from "./img/sakura.png";
import "./Brands.css";

const Brands = () => {
  return (
    <div className="container-brands">
     <div className="title-brands">
        <h3>Trabalhamos com as seguintes</h3>
        <h2>Marcas</h2>
     </div>
     <div className="line-brands"></div>
      <div className="brands">
          <img src={bosch} width="100" alt="logo" />
          <img src={Junkers} width="100" alt="logo" />
          <img src={komeco} width="100" alt="logo" />
          <img src={lorenzetti} width="100" alt="logo" />   
          <img src={orbis} width="100" alt="logo" /> 
          <img src={Rheem} width="100" alt="logo" />
          <img src={Rinnai} width="100" alt="logo" />
          <img src={sakura} width="100" alt="logo" />    
      </div>
    </div>
  );
};
export default Brands;
