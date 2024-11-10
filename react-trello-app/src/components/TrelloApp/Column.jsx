import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import {
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Card, Space, Button, Tooltip, Popconfirm } from "antd";

// components
import SimpleCard from './SimpleCard';

function Column({
  columnIndex,
  title,
  columnId,
  cards,
}) {
  return (
    <Draggable draggableId={String(columnId)} index={columnIndex}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='column'
        >
          <Space direction="vertical" size={16}>
            <Card
              title={title}
              extra={
                <>
                  <Tooltip title="Delete this card">
                    <Button
                      shape="circle"
                      icon={<PlusOutlined />}
                      // onClick={showModal}
                    />
                  </Tooltip>
                  <Popconfirm
                    title="Delete the list"
                    description="Are you sure to delete this list?"
                    okText="Yes"
                    cancelText="No"
                  >
                    <Tooltip title="Delete this card">
                      <Button
                        shape="circle"
                        icon={<DeleteOutlined />}
                        style={{ marginLeft: 10 }}
                      />
                    </Tooltip>
                  </Popconfirm>
                </>
              }
            >
              <Droppable droppableId={String(columnId)} type="CARD">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                    {...provided.droppableProps}
                    className='column_content'
                  >
                    {cards.map((card, cardIndex) => {
                      return (
                        <SimpleCard 
                          key={card.id}
                          cardIndex={cardIndex}
                          card={card}
                        />
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Card>
          </Space>
        </div>
      )}
    </Draggable>
  )
}

export default Column