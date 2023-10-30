import Box from "./Box/Box";
import CountTries from "./CountTries/CountTries.tsx";
import Button from "./Button/Button.tsx";
import './App.css';

function App() {
  return (
      <div>
        <Box hasItem={false} clicked={false} />
        <CountTries />
        <Button />
      </div>
  );
}

export default App;
