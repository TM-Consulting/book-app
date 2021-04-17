import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import { addBooks } from "./actions/bookActions";
import { useDispatch } from "react-redux";

const App=()=> {
  const books1 = [
    {
      id: 1,
      title: "ANtikhristos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia, totam laboriosam tempore corporis asperiores perspiciatis iure, possimus corrupti rem cumque repellat eius. Inventore saepe minima expedita, facere nobis et.",
    },
    {
      id: 2,
      title: "BZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia, totam laboriosam tempore corporis asperiores perspiciatis iure, possimus corrupti rem cumque repellat eius. Inventore saepe minima expedita, facere nobis et.",
    },
    {
      id: 3,
      title: "AHMED_MOVICH",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officia, totam laboriosam tempore corporis asperiores perspiciatis iure, possimus corrupti rem cumque repellat eius. Inventore saepe minima expedita, facere nobis et.",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBooks(books1));
  }, []);
  return <Home />;
}

export default App;
