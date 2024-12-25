import { useState, useEffect } from "react";
import { fetchArticlesWithTopic } from "./articles-api";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./Hello";
import Product from "./Product";
import BookList from "./Book";
import UserMenu from "./UserMenu";
import CustomButton from "./CustomButton";
import CountButton from "./CountButton";
import HideButton from "./HideButton";
import ClickCounter from "./ClickCounter";
import LoginForm from "./LoginForm";
import FeedbackForm from "./FeedbackForm";
import Articles from "./Articles";
import SearchForm from "./SearchForm";
import Error from "./Error";
import Loader from "./Loader";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("saved-count");

    if (savedCount !== null) {
      return Number(savedCount);
    }

    return 0;
  });

  const [clicks, setClicks] = useState(0);

  // useEffect(() => console.log('hello'), [])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log(`Interval - ${Date.now()}`);
  //   }, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("Clicks updated: ", clicks);
  }, [clicks]);

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("First updated: ", first);
  }, [first]);

  useEffect(() => {
    console.log("Second updated: ", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated: ", first + second);
  }, [first, second]);

  useEffect(() => {
    console.log(`Count: ${count}`);
    localStorage.setItem("saved-count", count);
  }, [count]);

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       setLoading(true);

  //       const data = await fetchArticlesWithTopic("react");

  //       setArticles(data);
  //       // const response = await axios.get(
  //       //   "https://hn.algolia.com/api/v1/search?query=react"
  //       // );

  //       // console.log(response);

  //       // setArticles(response.data.hits);
  //     } catch (error) {
  //       console.error(error);
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchArticles();
  // }, []);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   console.log(evt);
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;
    console.log(form.elements);

    // Посилання на DOM-елементи
    console.log(login, password);

    // Значення полів
    console.log(login.value, password.value);

    // Скидаємо значення полів після відправки
    form.reset();
  };

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setLoading(true);
      setError(false);

      const data = await fetchArticlesWithTopic(topic);

      setArticles(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Hello />
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserMenu name="John"></UserMenu>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <CountButton />
      <HideButton />
      {/* <ClickCounter />
      <ClickCounter /> */}

      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />

      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>

      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>

      <LoginForm onLogin={handleLogin}></LoginForm>

      <FeedbackForm></FeedbackForm>

      <div>
        <h1>Latest articles</h1>

        <SearchForm onSearch={handleSearch}></SearchForm>
        {loading && <Loader />}
        {error && <Error />}

        {articles.length > 0 && <Articles articles={articles} />}
      </div>
    </>
  );
}

export default App;
