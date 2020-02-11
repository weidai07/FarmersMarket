import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: salmon;
          }
        `}</style>
      <h3>{props.day} - {props.location}</h3>
      <p><em>{props.hours} - {props.booth}</em></p>
      <hr/>
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