import * as AiIcons from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
        <a href="#" className="icon">
          ACQUALINE
      </a>
      <ul>
        <li>
          <a href="#" className="link">
            Início
          </a>
        </li>
        <li>
          <a href="#about-us" className="link">
            Sobre nós
          </a>
        </li>
        <li>
          <a href="#products" className="link">
            Produtos
          </a>
        </li>
        <li>
          <a href="#services" className="link">
            Serviços
          </a>
        </li>
        <li>
          <a href="#contact" className="link">
            Contato
          </a>
        </li>
        </ul>
    </div>
  );
};
export default Navbar;