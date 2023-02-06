import { ProductsData } from "./ProductsData";
import "./NewProducts.css";

const NewProducts = () => {
  return (
    <div className="products-container">
        <h3 id="products">Nossos produtos</h3>
        <h2>Mais vendidos</h2>
      <div className="container-card">
        {ProductsData.map((e) => (
          <div className="card">
            <img src={e.ulr} alt={e.title} />
            <h4>{e.title}</h4>
            <h5>{e.price}</h5>
            <a href="#contact">
              <button>Fazer orçamento</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewProducts;
