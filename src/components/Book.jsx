const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(({id, name}) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};

export default BookList