import React, { useState } from "react";
import AppContext from "../contexts/AppContext";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [page, setPage] = useState<Page>("TOP");
  return (
    <AppContext.Provider value={{ page, setPage }}>
      <Header />
      <Main />
    </AppContext.Provider>
  );
}

export default App;
