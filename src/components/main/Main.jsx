import "./Main.css";
import * as IoIcons from 'react-icons/io';

const Main = () => {
  return (
    <div className="container-main">
      <div className="description-main">
        <h1>
         "Olá nós somos a Acqualine, e temos o próposito de trazer um dos melhores serviços na área de aquecedores do Brasil."
        </h1>
        <a href="#about-us">
          <IoIcons.IoIosArrowDown />
        </a>
      </div>
    </div>
  );
};
export default Main;
