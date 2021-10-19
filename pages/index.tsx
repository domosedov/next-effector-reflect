import { useReducer } from "react";
import type { NextPage } from "next";
import { TestVanilla } from "../components/vanilla";
import { TestReflected } from "../components/reflected";

const Home: NextPage = () => {
  const [showA, toggleA] = useReducer((v) => !v, false);
  const [showB, toggleB] = useReducer((v) => !v, false);

  return (
    <div>
      <h1>Effector Reflect</h1>
      <button onClick={toggleA}>Show vanilla</button>
      <button onClick={toggleB}>Show reflected</button>
      {showA && <TestVanilla />}
      {showB && <TestReflected />}
    </div>
  );
};

export default Home;
