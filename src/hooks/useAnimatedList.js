import {
  createRef, useRef, useCallback, useState, useEffect,
} from 'react';

export default function useAnimatedList() {
  const [pendingRemoveItemIds, setPendingRemoveItemIds] = useState([]);
  const [items, setItems] = useState([]);
  const animatedRefs = useRef(new Map());
  const animationHasListener = useRef(new Map());
  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setPendingRemoveItemIds(
      (prevState) => prevState.filter((itemID) => itemID !== id),
    );
  }, []);

  useEffect(() => {
    pendingRemoveItemIds.forEach((itemID) => {
      const animatedRef = animatedRefs.current.get(itemID);
      const animatedElement = animatedRef?.current;
      const alredyHasListener = animationHasListener.current.has(itemID);
      if (animatedElement && !alredyHasListener) {
        const onAnimationEnd = () => { handleAnimationEnd(itemID); };
        animationHasListener.current.set(itemID, true);
        animatedElement.addEventListener(
          'animationend',
          onAnimationEnd,
        );
      }
    });
  }, [pendingRemoveItemIds]);

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemoveItemIds((prevState) => [...prevState, id]);
  }, []);

  const getAnimatedRef = useCallback((itemID) => {
    let animatedRef = animatedRefs.current.get(itemID);
    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemID, animatedRef);
    }
    return animatedRef;
  }, []);
  // eslint-disable-next-line max-len
  const renderList = useCallback(
    (renderItem) => items.map((item) => {
      const isLeaving = pendingRemoveItemIds.includes(item.id);
      const animatedRef = getAnimatedRef(item.id);

      return renderItem(item, { isLeaving, animatedRef });
    }),
    [items, pendingRemoveItemIds],
  );

  return {

    items,
    setItems,
    handleRemoveMessage,
    handleAnimationEnd,
    renderList,
  };
}
