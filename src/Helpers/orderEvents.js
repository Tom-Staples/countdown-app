const orderEvents = events => {
  for (let i = 0; i < events.length; i++) {
    if (i === events.length - 1) {
      break;
    }
    for (let j = i + 1; j < events.length; j++) {
      if (j === events.length) {
        break;
      }
      let temp = events[i];
      let date = new Date(`${events[i].date}T${events[i].time}`);
      let nextDate = new Date(`${events[j].date}T${events[j].time}`);
      if (date.getTime() > nextDate.getTime()) {
        events[i] = events[j];
        events[j] = temp;
      }
      continue;
    }
  }

  return events;
};

export default orderEvents;
