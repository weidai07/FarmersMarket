import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MarketScheduleList from './MarketScheduleList';
import SeasonalProduceList from './SeasonalProduceList';

function App(){
  return (
    <div>
      <Header/>
      <TicketList />
      <MarketScheduleList />
      <SeasonalProduceList />

    </div>
  );
}

export default App;
