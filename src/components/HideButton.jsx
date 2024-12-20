import { useState } from "react";

const HideButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleToggle}>{isOpen ? "Show" : "Hide"}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};

export default HideButton;
