import React from "react";
import {
  PlusOutlined,
  DeleteOutlined,
  UserOutlined,
  AntDesignOutlined,
  FileTextOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Card, Space, Button, Tooltip, Avatar, Flex, Popconfirm, Modal, Form, Input, Select,} from "antd";
import { trelloAppContext } from "../../context/TrelloContext";

const { TextArea } = Input;

function TrelloList() {
  const { isModalOpen, showModal, handleCancel, handleSubmit, form } = trelloAppContext();

  return (
    <>
      {/* List 1 */}
      <Space direction="vertical" size={16}>
        <Card
          title="List 1"
          extra={
            <>
              <Tooltip title="Delete this card">
                <Button
                  shape="circle"
                  icon={<PlusOutlined />}
                  onClick={showModal}
                />
              </Tooltip>
              <Modal
                title="Basic Modal"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                  <Button key="cancel" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button key="submit" type="primary" onClick={handleSubmit}>
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
              </Modal>

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
          style={{ width: 352 }}
        >
          {/* Items 1 */}
          <Flex gap="middle" align="start" vertical>
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
                  />
                </Tooltip>,
              ]}
              style={{
                minWidth: 300,
              }}
            >
              <Card.Meta
                title="Card 1"
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
          </Flex>

          {/* Items 2 */}
          <Flex gap="middle" align="start" vertical>
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
                  />
                </Tooltip>,
              ]}
              style={{
                minWidth: 300,
                marginTop: 10,
              }}
            >
              <Card.Meta
                title="Card 2"
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
          </Flex>

          {/* Items 3 */}
          <Flex gap="middle" align="start" vertical>
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
                  />
                </Tooltip>,
              ]}
              style={{
                minWidth: 300,
                marginTop: 10,
              }}
            >
              <Card.Meta
                title="Card 11"
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
          </Flex>

          {/* Items 4 */}
          <Flex gap="middle" align="start" vertical>
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
                  />
                </Tooltip>,
              ]}
              style={{
                minWidth: 300,
                marginTop: 10,
              }}
            >
              <Card.Meta
                title="Card 22"
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
          </Flex>
        </Card>
      </Space>

      {/* List 2 */}
      <Space direction="vertical" size={16}>
        <Card
          title="List 1"
          extra={
            <a href="#">
              <Tooltip title="Add a card">
                <Button shape="circle" icon={<PlusOutlined />} />
              </Tooltip>
              <Tooltip title="Delete this cart">
                <Button
                  shape="circle"
                  icon={<DeleteOutlined />}
                  style={{ marginLeft: 10 }}
                />
              </Tooltip>
            </a>
          }
          style={{ width: 352 }}
        >
          {/* Items 1 */}
          <Flex gap="middle" align="start" vertical>
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
                  />
                </Tooltip>,
              ]}
              style={{
                minWidth: 300,
              }}
            >
              <Card.Meta
                title="Card 1"
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
          </Flex>
        </Card>
      </Space>

      <Button icon={<PlusOutlined />}>Add another list</Button>
    </>
  );
}

export default TrelloList;
