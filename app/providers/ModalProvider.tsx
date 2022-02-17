import * as React from "react";

export type ModelContextValue = {
  modalIsOpen: boolean;
  updateModalStatus: () => void;
};

const ModalContext = React.createContext<ModelContextValue | undefined>(
  undefined
);

export const useModalContext = (): ModelContextValue => {
  const contextValue = React.useContext(ModalContext);

  if (!contextValue) {
    throw new Error(
      "You are trying to use useModalContext without rendering a ModalContext.Provider somewhere above this component in the component tree. Render a ModalContext.Provider somewhere above this component in the component tree to resolve this issue."
    );
  }

  return contextValue;
};

export const ModalContextProvider: React.FC = (props) => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  const updateModalStatus = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        updateModalStatus
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
