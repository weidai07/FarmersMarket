import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

function MarketSchedule(props){
  // var styles = {
  //   border: '1px #999999 solid',
  //   width: '50%',
  //   left: 0,
  //   position: 'absolute',
  //   padding: '0',
  //   margin: '0'
  // };
  var paragraphPadding = {
    padding: '0',
    margin: '0'
  };
  var headerPadding = {
    marginTop: '0'
  };
  var cards = {
    margin: '3px',
    width: '20%',

  };
  return (
    <div>
      <Card style={cards}>
        <h3 style={headerPadding}>{props.day} - {props.location}</h3>
        <p style={paragraphPadding}><em>{props.hours} - {props.booth}</em></p>
      </Card>
    </div>
  );
}

MarketSchedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default MarketSchedule;