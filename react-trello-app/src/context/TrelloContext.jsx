import { Form } from "antd";
import React from "react";

const AppContext = React.createContext();

export const TrelloProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleSubmit = () => {
        form.submit();
    }

  return (
    <AppContext.Provider
      value={{
        // State
        isModalOpen,

        // action
        showModal,
        handleOk,
        handleCancel,
        handleSubmit,
        form
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const trelloAppContext = () => React.useContext(AppContext);
