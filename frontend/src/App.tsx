import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/list")
      .then((res) => res.json())
      .then((data) => console.log("Response from backend:", data))
      .catch((err) => console.log("Error:", err));
  }, []);
  return (
    <>
      <div>Hello, Eneba</div>
      <div>Check console!</div>
    </>
  );
}

export default App;
