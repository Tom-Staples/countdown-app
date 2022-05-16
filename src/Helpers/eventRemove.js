const eventRemove = (event, events, setEvents) => {
  //Filters out the deleted event to display the new events list.
  const newEvents = events.filter(element => {
    return JSON.stringify(event) !== JSON.stringify(element);
  });

  //Update localstorage with filtered array.
  localStorage.setItem('events', JSON.stringify(newEvents));
  setEvents(newEvents);
};

export default eventRemove;
