const touchTrack = (x1, x2, y1, y2) => {
  let xChange;
  let yChange;
  let swipeDirection;

  xChange = x1 - x2;
  yChange = y1 - y2;

  //Swipe does not indicate a change in section or a normal scroll
  if (yChange <= -50 || yChange >= 50) {
    swipeDirection = null;
  } else if (xChange <= -50) {
    //Indicates a left swipe
    swipeDirection = 'left';
  }
  //Indicates a right swipe
  else if (xChange >= 50) {
    swipeDirection = 'right';
  }
  //Change in x axis is not big enough to trigger a change of section
  else swipeDirection = null;

  return swipeDirection;
};

export default touchTrack;
