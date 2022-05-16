import React from 'react';
import useCountdownCalculate from '../../Hooks/useCountdownCalculate';

const CountdownCards = props => {
  const [timer] = useCountdownCalculate(props.date, props.time);

  const headStyle =
    'font-bold text-center xs:text-lg xs:w-16 sm:text-xl sm:w-24 md:text-base md:w-14 mb-2 lg:text-xl lg:w-20 xl:text-2xl xl:w-28';
  const boxStyle =
    'bg-white text-center rounded font-bold font-title pt-3 shadow-lg \
  xs:text-5xl xs:w-16 xs:h-16 xs:mr-4 sm:w-24 sm:h-24 sm:text-7xl \
  md:w-14 md:h-14 md:mr-2 md:text-4xl lg:w-20 lg:h-20 lg:text-6xl \
  xl:w-28 xl:h-28 xl:text-8xl';

  if (timer) {
    return (
      <div className='flex justify-evenly pt-4'>
        <div>
          <h3 className={headStyle}>Days</h3>
          <p className={boxStyle}>{timer.days}</p>
        </div>
        <div>
          <h3 className={headStyle}>Hours</h3>
          <p className={boxStyle}>{timer.hours}</p>
        </div>
        <div>
          <h3 className={headStyle}>Minutes</h3>
          <p className={boxStyle}>{timer.minutes}</p>
        </div>
        <div>
          <h3 className={headStyle}>Seconds</h3>
          <p className={boxStyle}>{timer.seconds}</p>
        </div>
      </div>
    );
  }
};

export default CountdownCards;
