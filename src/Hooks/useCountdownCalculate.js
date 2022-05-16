import { useEffect, useState } from 'react';
import milliSecConversion from '../Helpers/milliSecConversion';

const useCountdownCalculate = (date, time) => {
  const [timer, setTimer] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const eventDate = new Date(`${date}T${time}`);

      //The time between the event and current time in milliseconds.
      let difference = eventDate.getTime() - currentDate.getTime();

      //Converts the difference to the number of days, hours, minutes, & seconds until the event.
      const { days, hours, minutes, seconds } = milliSecConversion(difference);

      setTimer({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [date, time]);

  return [timer];
};

export default useCountdownCalculate;
