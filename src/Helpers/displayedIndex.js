const displayedIndex = (swipeDirection, activeIndex) => {
  let newIndex;

  //Accidental swipes will return the same index and not change the active section
  if (!swipeDirection) {
    newIndex = activeIndex;
  }
  //Swipe left on the first section takes you to the last section
  else if (swipeDirection === 'left' && activeIndex === 0) {
    newIndex = 2;
  }
  //Swipe right on the last section take you to the first section
  else if (swipeDirection === 'right' && activeIndex === 2) {
    newIndex = 0;
  }
  //Swipes left will go 1 section to the left
  else if (swipeDirection === 'left') {
    newIndex = activeIndex - 1;
  }
  //Swipes right will go 1 section to the right
  else if (swipeDirection === 'right') {
    newIndex = activeIndex + 1;
  }

  return newIndex;
};

export default displayedIndex;
