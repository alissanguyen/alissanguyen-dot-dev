import * as React from "react";

export type ModalContextValue = {
  modalIsOpen: boolean;
  updateModalStatus: (newValue: boolean) => void;
};

const ModalContext = React.createContext<ModalContextValue | undefined>(
  undefined
);

export const useModalContext = (): ModalContextValue => {
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

  const updateModalStatus = (newValue: boolean) => {
    setModalIsOpen(newValue);
  };

  React.useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("fixed");
      document.body.classList.add("overflow-y-hidden");
      document.body.style.height = "100vh";
    } else {
      document.body.classList.remove("fixed");
      document.body.classList.remove("overflow-y-hidden");
      document.body.style.removeProperty("height");
    }
  }, [modalIsOpen]);

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
