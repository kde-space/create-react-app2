import React from 'react';
import ReactDOM from 'react-dom';
import PRODUCTS from './products';

const SearchBar = (props) => {
  const { onFilterTextChange, onInStockChange } = props;

  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e) => {
    onInStockChange(e.target.checked);
  };

  return (
    <form>
      <input 
        type="text" 
        placeholder="Search..." 
        value={props.filterText} 
        onChange={handleFilterTextChange} 
      />
      <p>
        <input 
          type="checkbox" 
          checked={props.inStockOnly} 
          onChange={handleInStockChange}
        />
        {' '}Only show products in stock
      </p>
    </form>
  );
};

const ProductCategoryRow = (props) => {
  const { category } = props;
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
};

const ProductRow  = (props) => {
  const { name, stocked, price } = props.product;
  return (
    <tr>
      <td style={stocked ? null : { color: 'red' }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

const ProductTable = (props) => {
  const { products, filterText, inStockOnly } = props;
  const filteredProducts = products.filter(product => {
    const isIncludesFilterText = product.name.includes(filterText);
    if (inStockOnly) {
      return product.stocked && isIncludesFilterText;
    }
    return isIncludesFilterText;
  });

  const dataByCategory = filteredProducts.reduce((prev, current) => {
    const prevData = prev[current.category];
    const nextData = {
      name: current.name,
      stocked: current.stocked,
      price: current.price
    };
    if (prevData === undefined) {
      prev[current.category] = [nextData];
    } else {
      prevData.push(nextData);
    }
    return prev;
  }, {});

  const rowsDom = [];
  Object.keys(dataByCategory).forEach(categoryName => {
    rowsDom.push(<ProductCategoryRow key={categoryName} category={categoryName} />);
    dataByCategory[categoryName].forEach(item => {
      rowsDom.push(<ProductRow key={item.name} product={item} />);
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rowsDom}</tbody>
    </table>
  );
};

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly
    });
  }


  render() {
    const {
      filterText,
      inStockOnly
    } = this.state;
    const { products } = this.props;
    return (
      <div>
        <SearchBar 
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable 
          filterText={filterText}
          inStockOnly={inStockOnly}
          products={products} 
        />
      </div>
    )
  }
}


ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />, 
  document.getElementById('root')
);

