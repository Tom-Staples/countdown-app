const milliSecConversion = time => {
  let days;
  let hours;
  let minutes;
  let seconds;

  days = Math.floor(time / (1000 * 60 * 60 * 24));
  hours = Math.floor(time / (1000 * 60 * 60) - days * 24);
  minutes = Math.floor(time / (1000 * 60) - (days * 24 * 60 + hours * 60));
  seconds = Math.floor(
    time / 1000 - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60)
  );

  return { days, hours, minutes, seconds };
};

export default milliSecConversion;
