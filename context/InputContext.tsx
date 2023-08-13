"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

export interface InputInterface {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export const defaultState: InputInterface = {
  input: "",
  setInput: () => {},
};

export const InputContext = createContext<InputInterface>(defaultState);

export default function InputProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState<string>("");
  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
}
