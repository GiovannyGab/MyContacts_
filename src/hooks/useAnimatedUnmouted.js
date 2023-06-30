import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmouted(visible) {
  const [shouldRender, setShouldRender] = useState(visible);
  const animatedElementRef = useRef(null);
  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }
    function handleAnimationEnd() {
      setShouldRender(false);
    }
    const overlayRefContent = animatedElementRef.current;
    if (!visible && overlayRefContent) {
      overlayRefContent.addEventListener('animationend', handleAnimationEnd);
    }
    return () => {
      if (overlayRefContent) {
        overlayRefContent.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [visible]);
  return {
    shouldRender, animatedElementRef,
  };
}
