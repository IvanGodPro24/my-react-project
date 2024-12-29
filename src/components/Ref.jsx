import { useEffect, useRef } from "react";

const Ref = () => {
  const valueRef = useRef(0);

  useEffect(() => {
    // Виконається лише один раз під час монтування.
    // Наступні оновлення значення рефа не
    // викличуть оновлення компонента
    console.log(valueRef.current);
  });

  const handleClick = () => {
    valueRef.current += 1;
    console.log(valueRef);
  };

  return <button onClick={handleClick}>Click to update ref value</button>;
};

export default Ref;
