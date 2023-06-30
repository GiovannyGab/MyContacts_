import { useCallback, useState } from 'react';

export default function useAnimatedList() {
  const [pendingRemoveItemIds, setPendingRemoveItemIds] = useState([]);
  const [items, setItems] = useState([]);

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemoveItemIds((prevState) => [...prevState, id]);
  }, []);
  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
    setPendingRemoveItemIds(
      (prevState) => prevState.filter((itemID) => itemID !== id),
    );
  }, []);

  // eslint-disable-next-line max-len
  const renderList = useCallback(
    (renderItem) => items.map((item) => renderItem(
      item,
      { isLeaving: pendingRemoveItemIds.includes(item.id) },
    )),
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
