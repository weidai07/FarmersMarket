import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){
  // var styles = {
  //   border: '1px #999999 solid',
  //   width: '50%',
  //   left: 0,
  //   position: 'absolute',
  //   padding: '0',
  //   margin: '0'
  // };
  var padding = {
    padding: '0',
    margin: '0'
  };
  return (
    <div>
      <h3>{props.day} - {props.location}</h3>
      <p style={padding}><em>{props.hours} - {props.booth}</em></p>
      {/* <hr style={styles}/> */}
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