import React from 'react';
import Header from './Header';
import MarketScheduleList from './MarketScheduleList';
import { Switch, Route } from 'react-router-dom';
import NewMarketScheduleForm from './NewMarketScheduleForm';
import Error404 from './Error404';
import Background from '../assets/images/background.jpg';

function App(){
  var style = {  
    backgroundImage: 'url(' + Background + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div style={style}>
      {/* <BackgroundImage/> */}
      <Header/>
      <Switch>
        <Route exact path='/' component={MarketScheduleList} />
        <Route path='/newmarketscheduleform' component={NewMarketScheduleForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
