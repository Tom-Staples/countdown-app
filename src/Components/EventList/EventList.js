import React, { useState } from 'react';
import eventRemove from '../../Helpers/eventRemove';
import formatDate from '../../Helpers/formatDate';
import useObtainEvents from '../../Hooks/useObtainEvents';
import EventListUi from './EventListUi';

const EventList = props => {
  const [mouseOver, setMouseOver] = useState({});
  const [events] = useObtainEvents(props.events);
  const [style, setStyle] = useState({});

  const handleMouseEnter = e => {
    const { id } = e.target;
    if (!id) {
      let parent = e.target.parentElement;
      if (props.matches) {
        setStyle({
          [parent.id]: 'bg-red-400'
        });
      }
      setMouseOver({
        [parent.id]: true
      });
    } else {
      if (props.matches) {
        setStyle({
          [id]: 'bg-red-400'
        });
      }
      setMouseOver({
        [id]: true
      });
    }
  };

  const handleMouseLeave = e => {
    const { id } = e.target;
    if (props.matches) {
      setStyle({
        [id]: 'bg-white'
      });
    }
    setMouseOver({
      [id]: false
    });

    props.matches && setStyle('bg-white');
  };

  //Creates an array of list elements displaying each event. Contains a conditional display if the event is moused over.
  const eventArray = events.map((event, index) => {
    //Formats the date and time appearance
    const [date, time] = formatDate(event);

    return (
      <li
        key={index}
        id={index}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex justify-between rounded mb-2 p-2 bg-white ${style[index]} relative xs:p-4 xs:text-xs sm:text-base md:hover:bg-red-400 md:text-xs lg:text-lg xl:text-xl`}
      >
        {mouseOver[index] ? (
          <>
            <span>Do you want to delete this event?</span>

            <button
              className='rounded bg-purple-400 hover:bg-purple-200 px-4 absolute xs:right-4'
              onClick={() => {
                eventRemove(event, events, props.setEvents);
              }}
            >
              Yes
            </button>
          </>
        ) : (
          <>
            <p className='xs:w-1/5 md:w-1/6 xs:mr-4'>{event.title}</p>
            <p className='xs:w-2/5 md:w-3/6 xs:mr-4'>{event.description}</p>
            <p className='xs:w-1/5 xs:mr-4 md:w-1/6 '>{date}</p>
            <p className='xs:w-1/5 xs:mr-4 md:w-1/6 '>{time}</p>
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
