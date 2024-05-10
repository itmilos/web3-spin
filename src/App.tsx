import "./App.css";
import { useWeb3React } from "@web3-react/core";
import Card from "./components/Card";
import { SpinWheel, ISpinWheelProps } from 'spin-wheel-game';
import { useState, useEffect } from 'react';

function App() {
  const { connector, hooks } = useWeb3React();

  const segments = [
    { segmentText: 'Option 1', segColor: 'red' },
    { segmentText: 'Option 2', segColor: 'blue' },
    { segmentText: 'Option 3', segColor: 'green' },
  ];

  const [winnerSegment, setWinnerSegment] = useState<string | null>(null);

  useEffect(() => {
    const fetchWinnerSegment = async () => {
      // const response = await fetch('https://api.example.com/winner');
      // const data = await response.json();
      // setWinnerSegment(data.winnerSegment);
      setWinnerSegment(2);
    };
    fetchWinnerSegment();
  }, []);

  const handleSpinFinish = (result: string) => {
    console.log(`Spun to: ${result}`);
    // Handle the result as needed
  };

  const spinWheelProps: ISpinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: 'black',
    contrastColor: 'white',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 290,
    upDuration: 100,
    downDuration: 600,
    fontFamily: 'Arial',
    arrowLocation: 'top',
    showTextOnSpin: true,
    isSpinSound: true,
    winnerSegment: winnerSegment,
  };

  return (
    <>
      <div className="App">
        <div className="card">
          <Card connector={connector} hooks={hooks} name='phantom' />
        </div>
        <SpinWheel {...spinWheelProps} />
      </div>
    </>
  );
}

export default App;