const Hello = () => {
  const printHello = () => {
    console.log('Hello');
  }

  return (
    <div>
      <h1 onClick={printHello}>Hello</h1>
    </div>
  );
};

export default Hello;
