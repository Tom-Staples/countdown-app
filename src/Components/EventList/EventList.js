import React, { useState } from 'react';
import eventRemove from '../../Helpers/eventRemove';
import formatDate from '../../Helpers/formatDate';
import useObtainEvents from '../../Hooks/useObtainEvents';
import EventListUi from './EventListUi';

const EventList = props => {
  const [mouseOver, setMouseOver] = useState({});
  const [events] = useObtainEvents(props.events);

  //Creates an array of list elements displaying each event. Contains a conditional display if the event is moused over.
  const eventArray = events.map((event, index) => {
    //Formats the date and time appearance
    const [date, time] = formatDate(event);
    return (
      <li
        key={index}
        id={index}
        onMouseEnter={e => {
          setMouseOver({
            [e.target.id]: true
          });
        }}
        onMouseLeave={e => {
          setMouseOver({
            [e.target.id]: false
          });
        }}
        className='flex justify-between rounded mb-2 p-2 bg-white hover:bg-red-400 relative xs:p-4 xs:text-xs sm:text-base md:text-xs lg:text-lg xl:text-xl'
      >
        {mouseOver[index] ? (
          <>
            <span>Do you want to delete this event?</span>

            <button
              className='rounded bg-purple-400 hover:bg-purple-200 px-4 absolute xs:right-1/4 sm:right-1/2 xl:right-2/3'
              onClick={() => {
                eventRemove(event, events, props.setEvents);
              }}
            >
              Yes
            </button>
          </>
        ) : (
          <>
            <span className='xs:w-1/5 md:w-1/6 xs:mr-4'>{event.title}</span>
            <span className='xs:w-2/5 md:w-3/6 xs:mr-4'>
              {event.description}
            </span>
            <span className='xs:w-1/5 xs:mr-4 md:w-1/6 '>{date}</span>
            <span className='xs:w-1/5 xs:mr-4 md:w-1/6 '>{time}</span>
          </>
        )}
      </li>
    );
  });

  return (
    <EventListUi
      eventArray={eventArray}
      setEvents={props.setEvents}
      handleSwipe={props.handleSwipe}
      matches={props.matches}
      activeSection={props.activeSection}
    />
  );
};

export default EventList;
