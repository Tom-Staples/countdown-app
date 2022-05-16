const formatDate = event => {
  let oldDate = event.date;
  let oldTime = event.time;
  let newDate = `${oldDate.substring(8)}-${oldDate.substring(
    5,
    7
  )}-${oldDate.substring(0, 4)}`;
  let newTime =
    oldTime.substring(0, 2) >= 12 ? `${oldTime} PM` : `${oldTime} AM`;

  return [newDate, newTime];
};

export default formatDate;
