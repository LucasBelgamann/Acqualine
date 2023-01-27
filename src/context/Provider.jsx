import PropTypes from 'prop-types';
import useLocalStorage from 'use-local-storage';
import Context from './Context';

function ProviderHeater({ children }) {
  const [product, setProduct] = useLocalStorage("product", [])
  const contextValue = {
    product, 
    setProduct
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

ProviderHeater.propTypes = { children: PropTypes.node.isRequired };

export default ProviderHeater;