import { useState } from 'react';
import touchTrack from '../Helpers/touchTrack';
import displayedIndex from '../Helpers/displayedIndex';

const useSwipeUpdate = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [touchStart, setTouchStart] = useState({
    x: 0,
    y: 0
  });
  const [touchEnd, setTouchEnd] = useState({
    x: 0,
    y: 0
  });
  const handleSwipe = e => {
    if (e.type === 'touchstart') {
      const { clientX, clientY } = e.touches[0];
      setTouchStart({
        x: clientX,
        y: clientY
      });
    }
    if (e.type === 'touchmove') {
      const { clientX, clientY } = e.touches[0];
      setTouchEnd({
        x: clientX,
        y: clientY
      });
    }
    if (e.type === 'touchend') {
      //Calculates which direction the user has swiped
      const swipeDirection = touchTrack(
        touchStart.x,
        touchEnd.x,
        touchStart.y,
        touchEnd.y
      );

      //Updates the section index based on which way the user has swiped
      const newIndex = displayedIndex(swipeDirection, activeSection);
      setActiveSection(newIndex);

      //Reset the touch positions
      setTouchEnd({
        x: 0,
        y: 0
      });
      setTouchStart({
        x: 0,
        y: 0
      });
    }
  };

  return [activeSection, setActiveSection, handleSwipe];
};

export default useSwipeUpdate;
