import { useState, FC } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Post from "./Post";

type AppProps = {
  title: string;
};

const App: FC<AppProps> = ({ title }) => {
  return (
    <>
      <head>{title}</head>
      <Post />
    </>
  );
};

export default App;
