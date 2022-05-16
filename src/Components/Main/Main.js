import React, { useState } from 'react';
import EventForm from '../EventForm/EventForm';
import EventList from '../EventList/EventList';
import CountdownList from '../CountdownList/CountdownList';
import { useMediaQuery } from '@react-hook/media-query';
import useSwipeUpdate from '../../Hooks/useSwipeUpdate';

const Main = () => {
  const [events, setEvents] = useState([]);
  const [activeSection, setActiveSection, handleSwipe] = useSwipeUpdate();

  const matches = useMediaQuery('only screen and (max-width: 899px)');

  //Updates the events state and localstorage everytime a new event is added.
  const handleSubmit = (e, data) => {
    e.preventDefault();
    let items = JSON.parse(localStorage.getItem('events'));

    //If this is the first event, the event data is added to localstorage
    if (!items) {
      localStorage.setItem('events', JSON.stringify([data]));
      setEvents([data]);
    }

    //If there is already an event, localstorage is updated to add the new event data.
    else {
      items = [...items, data];
      localStorage.setItem('events', JSON.stringify(items));
      setEvents([...events, data]);
    }
    setActiveSection(0);
  };

  return (
    <div className='mt-8 font-main xs:grid xs:grid-cols-1 xs:grid-rows-1 md:grid md:grid-cols-6 md:grid-rows-2 md:gap-4 '>
      <EventForm
        handleSubmit={handleSubmit}
        handleSwipe={handleSwipe}
        matches={matches}
        activeSection={activeSection}
      />
      <EventList
        events={events}
        setEvents={setEvents}
        handleSwipe={handleSwipe}
        matches={matches}
        activeSection={activeSection}
      />
      <CountdownList
        events={events}
        handleSwipe={handleSwipe}
        matches={matches}
        activeSection={activeSection}
      />
    </div>
  );
};

export default Main;
