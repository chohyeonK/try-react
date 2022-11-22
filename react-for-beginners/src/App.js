import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'counter, keyword' changes");
  }, [counter, keyword]);

  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 5) {
  //     console.log("search for", keyword);
  //   }
  // }, [keyword]); // keyword가 변화 시 코드 실행함
  return (
    <div>
      <input
        type="text"
        placeholder="Search here.."
        onChange={onChange}
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
