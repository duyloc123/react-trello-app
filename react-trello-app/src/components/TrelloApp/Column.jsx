import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  Card,
  Space,
  Button,
  Tooltip,
  Popconfirm,
  Input,
} from "antd";

// components
import SimpleCard from "./SimpleCard";

// Context
import { useAppContext } from "../../context/TrelloContext";

function Column({ columnIndex, title, columnId, cards }) {
  const { handleAddCard, deleteList } = useAppContext();
  return (
    <Draggable draggableId={String(columnId)} index={columnIndex}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="column"
        >
          <Space direction="vertical" size={16}>
            <Card
              title={title}
              extra={
                <>
                  <Tooltip title="Add a card">
                    <Button
                      shape="circle"
                      icon={<PlusOutlined />}
                      onClick={() => handleAddCard(columnId)}
                    />
                  </Tooltip>
                  <Popconfirm
                    title="Delete the list"
                    description="Are you sure to delete this list?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => deleteList(columnId)}
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
              {/* Modal */}
              {/* <Modal
                title="Basic Modal"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                  <Button key="cancel" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </Button>,
                ]}
              >
                <Form
                  form={form}
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    value={form.username}
                    rules={[
                      {
                        required: true,
                        message: "Please input your title!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input your description!",
                      },
                    ]}
                  >
                    <TextArea rows={4} />
                  </Form.Item>

                  <Form.Item
                    name="member"
                    label="Member"
                    rules={[
                      {
                        required: true,
                        message: "Please input your member",
                        type: "array",
                      },
                    ]}
                  >
                    <Select mode="multiple">
                      <Option value="Tony Nguyen">Tony Nguyen</Option>
                      <Option value="Duy Loc">Duy Loc</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Status" name="status">
                    <Select
                      options={[
                        {
                          label: "New",
                          value: "new",
                        },
                        {
                          label: "In procress",
                          value: "in procress",
                        },
                        {
                          label: "Done",
                          value: "done",
                        },
                      ]}
                    />
                  </Form.Item>
                </Form>
              </Modal> */}
              <Droppable droppableId={String(columnId)} type="CARD">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                    {...provided.droppableProps}
                    className="column_content"
                  >
                    {cards.map((card, cardIndex) => {
                      return (
                        <SimpleCard
                          key={card.id}
                          cardIndex={cardIndex}
                          card={card}
                        />
                      );
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
  );
}

export default Column;
