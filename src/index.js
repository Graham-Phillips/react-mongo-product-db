import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
    <h2 className="text-center">
        {props.headerMsg}
    </h2>
  );
};

App.propTypes = {
  headerMsg: React.PropTypes.string
};

App.defaultProps = {
  headerMsg: 'Yahtzee'
};
// note, dont need React.PropTypes.string.isRequired as we have this default

ReactDOM.render(
  <App />,
  document.getElementById('products')
);
