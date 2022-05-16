const displayStyle = (index, section) => {
  let displayStyle;
  if (section === 'countdownList') {
    if (index === 0) {
      displayStyle = 'block';
    }
    if (index === 1 || index === 2) {
      displayStyle = 'hidden';
    }
  }
  if (section === 'eventForm') {
    if (index === 0 || index === 2) {
      displayStyle = 'hidden';
    }
    if (index === 1) {
      displayStyle = 'block';
    }
  }
  if (section === 'eventList') {
    if (index === 0 || index === 1) {
      displayStyle = 'hidden';
    }
    if (index === 2) {
      displayStyle = 'block';
    }
  }

  return displayStyle;
};

export default displayStyle;
