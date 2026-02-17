"use client";
import { createContext, useContext, useState } from "react";

const MdContentContext = createContext({ content: "", setContent: () => {} });

export function MdContentProvider({ children }) {
  const [content, setContent] = useState("");
  return (
    <MdContentContext.Provider value={{ content, setContent }}>
      {children}
    </MdContentContext.Provider>
  );
}

export function useMdContent() {
  return useContext(MdContentContext);
}