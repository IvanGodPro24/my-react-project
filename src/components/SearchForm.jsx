const SearchForm = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const topic = e.target.elements.topic.value;

    if (topic.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    onSearch(topic);

    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
