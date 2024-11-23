import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  DeleteOutlined,
  UserOutlined,
  AntDesignOutlined,
  FileTextOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Card, Button, Tooltip, Avatar } from "antd";
import { useAppContext } from "../../context/TrelloContext";

function SimpleCard({ cardIndex, card, columnId }) {
  const { deleteCard } = useAppContext();

  return (
    <>
      <Draggable draggableId={String(card.id)} index={cardIndex}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="card"
            key={card.id}
          >
            <Card
              cover={
                <img
                  src="https://fastly.picsum.photos/id/606/265/160.jpg?hmac=3iXNaDG3Y3_i2_havA3RA8XriUeHSyLEWmhXCsqcgqA"
                  className="card__image"
                />
              }
              actions={[
                <Tooltip title="View" key="like">
                  <Button
                    icon={<FileTextOutlined />}
                    style={{ border: "none" }}
                  />
                </Tooltip>,
                <Tooltip title="Edit" key="share">
                  <Button icon={<EditOutlined />} style={{ border: "none" }} />
                </Tooltip>,
                <Tooltip title="Delete" key="save">
                  <Button
                    icon={<DeleteOutlined />}
                    style={{ border: "none" }}
                    onClick={() => deleteCard(card.id, columnId)}
                  />
                </Tooltip>,
              ]}
              className="cardItem"
            >
              <Card.Meta
                title={card.title}
                description={
                  <Avatar.Group
                    size="large"
                    max={{
                      count: 2,
                      style: {
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                        cursor: "pointer",
                      },
                      popover: { trigger: "click" },
                    }}
                  >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{ backgroundColor: "#1677ff" }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                }
              />
            </Card>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default SimpleCard;
