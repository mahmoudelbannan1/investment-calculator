import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isValidResult = userInput.duration >= 1;
  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput} />
      {!isValidResult && <p>Please Enter Duration More Than Zero !</p>}
      {isValidResult && <Result input={userInput} />}
    </>
  );
}

export default App;
