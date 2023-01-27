import img from './img/aquecedor.png';
import { ProductsData } from './ProductsData';
import './Products.css';
import { useContext } from 'react';
import Context from '../../context/Context';

const Products = () => {
  const { setProduct } = useContext(Context);


  const handleProductClick = (value) => {
    setProduct(value)
  }

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
                       <button onClick={ () => handleProductClick(product) }>Fazer orçamento</button>
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