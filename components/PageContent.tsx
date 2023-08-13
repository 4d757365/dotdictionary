"use client";

import { InputContext } from "@/context/InputContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import WordCard from "./WordCard";
import Loading from "@/app/loading";
import { WordData } from "@/types";

// base URL for API call
axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const PageContent = () => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState(null);
  const { input } = useContext(InputContext);

  const fetchData = async (param: string) => {
    try {
      setIsLoading(true);
      const res = await axios(`/${param}`); //fetch the data

      setResponse(res.data);
      setError("");
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
      return;
    }
  };
  //whenever input contains value and enter is pressed, it will fetch the data again
  useEffect(() => {
    if (input.length) {
      fetchData(input);
    }
  }, [input]);

  // on the first render of the page, it will fetch the "careful" data
  useEffect(() => {
    fetchData("careful");
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div className="text-center text-2xl text-neutral-800/80 p-24">
        The word you&apos;ve entered isn&apos;t in the dictionary. Try again
        using the search bar above.
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      {response && (
        <>
          <WordCard data={response} />
        </>
      )}
    </div>
  );
};

export default PageContent;
