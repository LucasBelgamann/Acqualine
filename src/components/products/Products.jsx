import img from './img/aquecedor.png';
import { ProductsData } from './ProductsData';
import './Products.css';

const Products = () => {
  return (
    <div className="container-products">
         <div className="titles-products">
            <h3 className="our-products">Nossos produtos</h3>
            <h2 id="products">Mais vendidos</h2>
         </div>
        <div>
            <div className="products">
               {
                ProductsData.map((product) => (
                    <div className='card-product'>
                        <img src={img} alt={product.title} />
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                       <a href="#contact">
                       <button>Fazer orçamento</button>
                       </a>
                    </div>
                ))
               }
            </div>
        </div>
    </div>
  );
};
export default Products;