import React from 'react';
import ReactDOM from 'react-dom';

class UbiquitousJourney extends React.Component {

  render() {
    return (
      <p>Hello, this is my first app!</p>
    );
  }

}

// ========================================

ReactDOM.render(
  <UbiquitousJourney />,
  document.getElementById('root')
);
