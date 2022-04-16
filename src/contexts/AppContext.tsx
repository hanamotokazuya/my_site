import React, { createContext } from "react";

const AppContext = createContext(
  {} as { page: Page; setPage: React.Dispatch<React.SetStateAction<Page>> }
);

export default AppContext;
