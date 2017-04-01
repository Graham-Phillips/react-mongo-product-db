import React from 'react';
import Header from './Header';

class App extends React.Component  {
  // as we are using babel-stage-2 we can use class fields
  state = {
    headerText: 'Product Dataabaase dddd'
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='App'>
        <Header message={this.state.headerText}/>
        <div>
          {this.state.test}
        </div>
      </div>
    );
  }
}


export default App;
