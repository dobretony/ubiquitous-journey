import React from 'react';
import ReactDOM from 'react-dom';
import {InfoCard} from 'routes';

class UbiquitousJourney extends React.Component {

  render() {
    return (
      <InfoCard />
    );
  }

}

// ========================================

ReactDOM.render(
  <UbiquitousJourney />,
  document.getElementById('root')
);
