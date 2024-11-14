import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// components
import ImageSingle from "./components/TrelloApp/ImageSingle";
import Column from "./components/TrelloApp/Column";

// mock datas
// import { dataTrello } from './mocks/dataTrello';

// Ant design
import { PlusOutlined } from "@ant-design/icons";

import { Button } from "antd";

// Context
import { useAppContext } from "../src/context/TrelloContext";

/*
replace 
Eg: 0, 1, 2, 3, 4 -> 0, 4, 1, 2, 3

swap
Eg: 0, 1, 2, 3, 4 -> 0, 4, 2, 3, 1
*/

function App() {
  // const [trello, setTrello] = React.useState(dataTrello);

  const { trello, onDragEnd, handleAddList } = useAppContext();

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
                      const cards = columnItem.cards.map(
                        (cardId) => trello.cards[cardId]
                      );

                      return (
                        <Column
                          key={columnItem.id}
                          columnIndex={columnIndex}
                          columnId={columnItem.id}
                          title={columnItem.title}
                          cards={cards}
                        />
                      );
                    })}
                  </>
                  {provided.placeholder}
                  <Button 
                  icon={<PlusOutlined />}
                  onClick={() => handleAddList()}>
                    Add another list
                  </Button>
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
