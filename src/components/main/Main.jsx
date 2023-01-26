import "./Main.css";
import * as IoIcons from 'react-icons/io';

const Main = () => {
  return (
    <div className="container-main">
      <div className="description-main">
        <h1>Olá</h1>
        <p>
        Cansado de ter problemas com seu aquecedor e com falta de mão de obra especializada no mercado? Nós estamos a 10 anos no mercado, trazendo a qualidade das melhores marcas nacionais em nossos produtos. E fornecendo alguns dos melhores serviços da área de aquecedores.
        </p>
        <a href="#products">
          <IoIcons.IoIosArrowDown />
        </a>
      </div>
    </div>
  );
};
export default Main;
