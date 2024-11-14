import { Form } from "antd";
import React, { useCallback } from "react";

// mock datas
import { dataTrello } from "../mocks/dataTrello";

const AppContext = React.createContext();

export const TrelloProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [trello, setTrello] = React.useState(dataTrello);

  const [form] = Form.useForm();

  const showModal = (columnId) => {
    setIsModalOpen(true);
    setSelectColumnId(columnId);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddList = () => {
    const quantityLists = Object.keys(trello.lists).length;
    const newList = `list${quantityLists + 1}`;
    setTrello((prev) => {
      return {
        ...prev,
        columns: [...prev.columns, `${newList}`],
        cards: { ...prev.cards },
        lists: {
          ...prev.lists,
          [`${newList}`]: {
            id: newList,
            title: newList,
            cards: [],
          },
        },
      };
    });
  };

  const handleAddCard = (cardId) => {
    const quantityCards = Object.keys(trello.cards).length;
    const newCardId = `card${quantityCards + 1}`;
    const cardItem = {
      id: newCardId,
      title: `Card + ${quantityCards + 1}`,
    };
    setTrello((prev) => {
      return {
        ...prev,
        cards: {
          ...prev.cards,
          [newCardId]: cardItem,
        },
        lists: {
          ...prev.lists,
          [cardId]: {
            ...prev.lists[cardId],
            cards: [...prev.lists[cardId].cards, newCardId],
          },
        },
      };
    });
    handleCancel();
  };

  const deleteList = (columnId) => {
    const newList = trello.columns.filter((colId) => colId !== columnId);
    setTrello((prev) => {
      return {
        ...prev,
        columns: newList,
      };
    });
  };

  const deleteCard = (cartId) => {
    const newLists = { ...trello.lists };
    const newCards = { ...trello.cards };
    Object.keys(newLists).forEach((listId) => {
      newLists[listId].cards = newLists[listId].cards.filter(
        (card) => card !== cartId
      );
      delete newCards[cartId];

      setTrello((prev) => ({
        ...prev,
        lists: newLists,
        cards: newCards,
      }));
    });
  };

  // Drap drop context

  // using useCallback is optional
  // const onBeforeCapture = useCallback(() => {
  //   /*...*/
  //   console.log('onBeforeCapture')
  // }, []);
  // const onBeforeDragStart = useCallback(() => {
  //   /*...*/
  //   console.log('onBeforeDragStart')
  // }, []);
  // const onDragStart = useCallback(() => {
  //   /*...*/
  //   console.log('onDragStart')
  // }, []);
  // const onDragUpdate = useCallback(() => {
  //   /*...*/
  //   console.log('onDragUpdate')
  // }, []);

  console.log("Trello Update =>", trello);

  const onDragEnd = useCallback(
    (result) => {
      // the only one that is required
      console.log("onDragEnd", {
        result,
      });

      const { source, destination, type, draggableId } = result;

      if (!destination) return;

      // TODO: drag drop list
      if (type === "LIST") {
        // replace
        const newColumns = [...trello.columns];
        newColumns.splice(source.index, 1);
        newColumns.splice(destination.index, 0, draggableId);
        setTrello((prevState) => {
          return {
            ...prevState,
            columns: newColumns,
          };
        });
        // swap
        // const newColumns = [...trello.columns];
        // [newColumns[source.index], newColumns[destination.index]] = [newColumns[destination.index], newColumns[source.index]];
        // setTrello(prevState => {
        //   return {
        //     ...prevState,
        //     columns: newColumns
        //   }
        // })
        // setTrello(prevState => {
        //   const newColumns = [...prevState.columns];
        //   newColumns.splice(source.index, 1);
        //   newColumns.splice(destination.index, 0, draggableId);
        //   return {
        //     ...prevState,
        //     columns: newColumns
        //   }
        // })
        return;
      }

      // TODO: drag drop card same list
      if (source.droppableId === destination.droppableId) {
        const newLists = { ...trello.lists };
        const newCards = [...newLists[source.droppableId].cards];
        newCards.splice(source.index, 1);
        newCards.splice(destination.index, 0, draggableId);
        setTrello((prevState) => {
          return {
            ...prevState,
            lists: {
              ...newLists,
              [source.droppableId]: {
                ...newLists[source.droppableId],
                cards: newCards,
              },
            },
          };
        });

        return;
      }

      // TODO: drag drop card difference list
      if (source.droppableId !== destination.droppableId) {
        const newLists = { ...trello.lists };
        const newCards = { ...trello.cards };

        const sourceList = newLists[source.droppableId];
        const [remove] = sourceList.cards.splice(destination.index, 1);

        const destinationList = newLists[destination.droppableId];
        destinationList.cards.splice(destination.index, 0, remove);
        setTrello((prevState) => {
          return {
            ...prevState,
            lists: newLists,
            cards: newCards,
          };
        });
      }
    },
    [trello.columns, trello]
  );

  return (
    <AppContext.Provider
      value={{
        // State
        isModalOpen,
        trello,
        setTrello,

        // action
        showModal,
        handleCancel,
        handleAddList,
        handleAddCard,
        form,
        deleteList,
        deleteCard,
        onDragEnd,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
