import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  componentDidMount() {
    // App component passes down a fetchAreas function to fetch the areas from the areas collection
    this.props.fetchAreas(this.props.areaIds);
  }

  render() {
    return (
      <div className = "Product">
        <div className="product-description">
          {this.props.productDescription}
        </div>
        <span>
          {this.props.price}
        </span>
        <ul className="list-group">
          {this.props.areaIds.map(areaId =>
            <li key={areaId} className="list-group-item">
              {this.props.lookUpArea(areaId).name}
            </li>
          )}
        </ul>
        <div className="home-link link"
             onClick={this.props.productListClick}>
          Product List
        </div>
      </div>
    );
  }
}

Product.PropTypes = {
  id: PropTypes.number.isRequired,
  productListClick: PropTypes.func.isRequired,
  fetchAreas: PropTypes.func.isRequired,
  areaIds: PropTypes.array.isRequired,
  lookUpArea: PropTypes.func.isRequired

};

export default Product;
