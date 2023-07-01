import {
  createRef, useRef, useCallback, useState,
} from 'react';

export default function useAnimatedList() {
  const [pendingRemoveItemIds, setPendingRemoveItemIds] = useState([]);
  const [items, setItems] = useState([]);
  const animatedRefs = useRef(new Map());
  const handleRemoveMessage = useCallback((id) => {
    setPendingRemoveItemIds((prevState) => [...prevState, id]);
  }, []);
  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setPendingRemoveItemIds(
      (prevState) => prevState.filter((itemID) => itemID !== id),
    );
  }, []);
  const getAnimatedRef = useCallback((itemID) => {
    let animatedRef = animatedRefs.current.get(itemID);
    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemID, animatedRef);
    }
  }, []);
  // eslint-disable-next-line max-len
  const renderList = useCallback(
    (renderItem) => items.map((item) => {
      const isLeaving = pendingRemoveItemIds.includes(item.id);
      const animatedRef = getAnimatedRef(item.id);
      console.log({ animatedRef });
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
