import React, { useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// components
import ImageSingle from "./components/TrelloApp/ImageSingle";
import Column from './components/TrelloApp/Column';

// mock datas
import { dataTrello } from './mocks/dataTrello';

/*
replace 
Eg: 0, 1, 2, 3, 4 -> 0, 4, 1, 2, 3

swap
Eg: 0, 1, 2, 3, 4 -> 0, 4, 2, 3, 1
*/

function App() {
  const [trello, setTrello] = React.useState(dataTrello);

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

  const onDragEnd = useCallback((result) => {
    // the only one that is required
    console.log('onDragEnd', {
      result
    });

    const { source, destination, type, draggableId } = result;

    if(!destination) return;

    // TODO: drag drop list
    if(type === 'LIST') {
      // replace
      const newColumns = [...trello.columns];
      newColumns.splice(source.index, 1);
      newColumns.splice(destination.index, 0, draggableId);
      setTrello(prevState => {
        return {
          ...prevState,
          columns: newColumns
        }
      })
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
    if(source.droppableId === destination.droppableId) {
      ///

       return;
    }

    // TODO: drag drop card difference list
  }, [trello.columns]);

  console.log('trello: ', trello)

  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__logo"></div>
          <div className="header__right">
            <div className="header__avatar">
              <ImageSingle
                title="header-logo"
                alt="header-logo"
                src="https://lh3.googleusercontent.com/a/ACg8ocL_BIaGhXjRi-s_3_7QGaP9XhEdck2vTJSf02dqW2MFMDmmlBuZ=s288-c-no"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <DragDropContext
            // onBeforeCapture={onBeforeCapture}
            // onBeforeDragStart={onBeforeDragStart}
            // onDragStart={onDragStart}
            // onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            <Droppable 
              droppableId="all-lists" 
              direction="horizontal" 
              type="LIST"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                  className="listContainer"
                  {...provided.droppableProps}
                >
                  <>
                    {trello.columns.map((column, columnIndex) => {
                      const columnItem = trello.lists[column];
                      const cards = columnItem.cards.map(cardId => trello.cards[cardId])

                      return (
                        <Column 
                          key={columnItem.id}
                          columnIndex={columnIndex}
                          columnId={columnItem.id}
                          title={columnItem.title}
                          cards={cards}
                        />
                      )
                    })}
                  </>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main>
    </>
  );
}

export default App;
