import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown } from 'antd';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// components
import ImageSingle from "../../components/TrelloApp/ImageSingle";
import Column from "../../components/TrelloApp/Column";
``
// Ant design
import { PlusOutlined } from "@ant-design/icons";

// Context
import { useAppContext } from "../../context/TrelloContext";

function Dashboard() {
  const navigate = useNavigate();
  const { trello, onDragEnd, handleAddList } = useAppContext();

  function logout() {
    window.sessionStorage.clear();
    navigate('/login')
  }

  const items = [
    {
      key: '1',
      label: (
        <Button type="text" onClick={logout}>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <>
      <header>
        <div className="header__container">
          <div className="header__logo"></div>
          <div className="header__right">
            <div className="header__avatar">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
              >
                <ImageSingle
                  title="header-logo"
                  alt="header-logo"
                  src="https://lh3.googleusercontent.com/a/ACg8ocL_BIaGhXjRi-s_3_7QGaP9XhEdck2vTJSf02dqW2MFMDmmlBuZ=s288-c-no"
                />
              </Dropdown>
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
  )
}

export default Dashboard;


// import Dashobard from './Dashboard'