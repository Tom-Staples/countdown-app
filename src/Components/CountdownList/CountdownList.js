import React from 'react';
import displayStyle from '../../Helpers/displayStyle';
import useObtainEvents from '../../Hooks/useObtainEvents';
import CountdownCards from '../CountdownCards/CountdownCards';

const CountdownList = props => {
  const [events] = useObtainEvents(props.events);

  const style = displayStyle(props.activeSection, 'countdownList');

  const eventArray = events.map((event, index) => {
    return (
      <li
        key={index}
        className=' flex flex-col xs:pb-4 xs:mb-4  xs:border-b-2 xs:border-black md:mb-8 md:w-1/3 md:px-4 md:border-b-0  md:border-r-2 md:border-black'
      >
        <h3 className='font-bold self-center mb-4 xs:text-4xl md:text-2xl xl:text-4xl '>
          {event.title}
        </h3>
        <CountdownCards date={event.date} time={event.time} />
      </li>
    );
  });

  return (
    <div
      className={`bg-blue-200 mx-1 flex flex-col p-4 ${
        props.matches && style
      }  xs:h-full md:col-span-6 md:h-128 `}
      onTouchStart={props.matches ? props.handleSwipe : null}
      onTouchMove={props.matches ? props.handleSwipe : null}
      onTouchEnd={props.matches ? props.handleSwipe : null}
    >
      <h2 className='self-center font-title font-bold text-6xl mb-10'>
        Counting Down...
      </h2>
      <ul className='flex xs:flex-col md:flex-row  md:flex-wrap md:overflow-auto md:h-4/5'>
        {eventArray}
      </ul>
    </div>
  );
};

export default CountdownList;
