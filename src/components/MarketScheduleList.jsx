import React from 'react';
import MarketSchedule from './MarketSchedule';
import Grid from '@material-ui/core/Grid';

var masterMarketScheduleList = [  
  {  
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {  
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {  
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {  
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {  
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {  
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function MarketScheduleList() {
  return (
    <div>
      <Grid container spacing={2}>
        {masterMarketScheduleList.map((marketSchedule, index) => 
          <Grid item xs={6}>
            <MarketSchedule day={marketSchedule.day}
              location={marketSchedule.location}
              hours={marketSchedule.hours}
              booth = {marketSchedule.booth}
              key = {index}/>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
export default MarketScheduleList;