import { useEffect, useState } from 'react';
import orderEvents from '../Helpers/orderEvents';

const useObtainEvents = dependencies => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    //Retrieves the events stored in localstorage.
    const events = JSON.parse(localStorage.getItem('events'));
    if (!events) {
      setEventList([]);
      return;
    }

    //Puts all the events in date & time order (earliest to latest)
    const orderedEvents = orderEvents(events);
    setEventList(orderedEvents);
  }, [dependencies]);

  return [eventList];
};

export default useObtainEvents;
