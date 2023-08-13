"use client";
import Link from "next/link";
import { Input } from "./ui/input";
import { LucideSearch } from "lucide-react";
import { InputContext } from "@/context/InputContext";
import { useContext, useState } from "react";
const Navbar = () => {
  const [value, setValue] = useState("");
  const { input, setInput } = useContext(InputContext);

  // when pressed enter, set the input to value and clear the input
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setInput(value);
      setValue("");
    }
  };

  // whenever input contains a value, set the value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col justify-between items-center p-6 md:flex-row">
      <div>
        <h1 className=" md:text-4xl font-bold text-5xl">
          <Link href="/">dotdictionary</Link>
        </h1>
      </div>
      <div className="flex gap-x-6 items-center w-full md:w-2/5 justify-center mt-5 md:mt-0">
        <Input
          placeholder="Search Dictionary"
          className="text-lg"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={value}
        />
        <LucideSearch className="pointer-events-none w-4 h-4 absolute right-10 text-neutral-600/60" />
      </div>
    </div>
  );
};

export default Navbar;
