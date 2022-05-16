import React from 'react';
import displayStyle from '../../Helpers/displayStyle';

const EventListUi = props => {
  const style = displayStyle(props.activeSection, 'eventList');
  return (
    <div
      className={`flex flex-col rounded bg-blue-200 p-4 font-bold text-lg relative ${
        props.matches && style
      } xs:h-full xs:mx-1 md:mr-1 md:col-span-4 md:h-128`}
      onTouchStart={props.matches ? props.handleSwipe : null}
      onTouchMove={props.matches ? props.handleSwipe : null}
      onTouchEnd={props.matches ? props.handleSwipe : null}
    >
      <h2 className='font-title self-center mb-2 xs:text-6xl md:text-6xl'>
        Event List
      </h2>
      <ul className='flex flex-col xs:mb-4 md:h-4/6 md:overflow-auto'>
        <li className='flex justify-between mb-2 border-b-4 border-black pb-2 xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl'>
          <h3 className='xs:w-1/5 xs:mr-4 md:w-1/6'>Title</h3>
          <h3 className='xs:w-2/5 xs:mr-4 md:w-3/6'>Description</h3>
          <h3 className='xs:w-1/5 xs:mr-4 md:w-1/6'>Date</h3>
          <h3 className='xs:w-1/5 xs:mr-4 md:w-1/6'>Time</h3>
        </li>
        {props.eventArray}
      </ul>
      <button
        className='rounded p-2 self-center font-bold bg-purple-400  hover:bg-purple-200 md:absolute md:bottom-4 md:w-1/6'
        onClick={() => {
          props.setEvents([]);
          localStorage.clear();
        }}
      >
        Delete All
      </button>
    </div>
  );
};

export default EventListUi;
