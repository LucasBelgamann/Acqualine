import './Products.css';
import lz1600 from './img/LorenzettiLZ1600DE.png';
import lz2000 from './img/LZ2000DELorenzetti.png';
import E15 from './img/E15.png';
import E21 from './img/E21.png';
import rheemDigital15 from './img/RheemDigital.png';
import rheemDigital20 from './img/RheemDigital20Litros.png';

const Products = () => {
  return (
    <div className="container-products">
         <div className="titles-products">
            <h3 className="our-products">Nossos produtos</h3>
            <h2 id="products">Mais vendidos</h2>
         </div>
        <div>
            <div className="products">
               <div className='card-product'>
                        <img src={lz1600} alt="aquecedor1" />
                        <h4>Aquecedor a gás GN Lorenzetti LZ 1600DE branco 127V/220V</h4>
                        <h4 className='price'>R$1.900,00</h4>
                       <a href="#contact">
                       <button>Fazer orçamento</button>
                       </a>
                    </div>
                    <div className='card-product'>
                        <img src={lz2000} alt="aquecedor2" />
                        <h4>Aquecedor de Água a Gás LZ2000DE Lorenzetti</h4>
                        <h4 className='price'>R$ 2.450,00</h4>
                       <a href="#contact">
                       <button>Fazer orçamento</button>
                       </a>
                    </div>
                    <div className='card-product'>
                        <img src={E15} alt="aquecedor3" />
                        <h4>Aquecedor a Gás E15 - Branco - Bivolt</h4>
                        <h4 className='price'>R$ 1.950,00</h4>
                       <a href="#contact">
                       <button>Fazer orçamento</button>
                       </a>
                    </div>
                    <div className='card-product'>
                        <img src={E21} alt="aquecedor4" />
                        <h4>Rinnai - Aquecedor a Gás E21 - Bivolt</h4>
                        <h4 className='price'>R$ 3.000,00</h4>
                       <a href="#contact">
                       <button>Fazer orçamento</button>
                       </a>
                    </div>
                    <div className='card-product'>
                        <img src={rheemDigital15} alt="aquecedor5" />
                        <h4>Aquecedor Rheem Digital - Vazão 15 Litros - Branco - GLP</h4>
                        <h4 className='price'>R$ 2.150,00</h4>
                       <a href="#contact">
                       <button>Fazer orçamento</button>
                       </a>
                    </div>
                    <div className='card-product'>
                        <img src={rheemDigital20} alt="aquecedor6" />
                        <h4>Aquecedor Rheem Digital - Vazão 20 Litros - Branco</h4>
                        <h4 className='price'>R$ 3.000,00</h4>
                       <a href="#contact">
                       <button>Fazer orçamento</button>
                       </a>
                    </div>
            </div>
        </div>
    </div>
  );
};
export default Products;