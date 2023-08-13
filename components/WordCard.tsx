import { WordData } from "@/types";
import { Volume2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface WordCardProps {
  data: [word: WordData];
}

const WordCard: React.FC<WordCardProps> = ({ data }) => {
  let count = 0;
  const [url, setUrl] = useState("");
  // find the matching us-audio url
  const matchingPhonetic = data[0].phonetics.find((phonetic) =>
    phonetic.audio?.includes(`en/${data[0].word}-us.mp3`)
  );
  //set the us-audio url
  useEffect(() => {
    if (matchingPhonetic) {
      setUrl(matchingPhonetic.audio);
    }
  }, []);
  const audio = new Audio(url);
  return (
    <div className="md:w-[600px] p-10 mt-5 border m-6 rounded-2xl shadow-md flex flex-col gap-3">
      <div>
        <div className="flex items-center justify-center gap-3">
          <h1 className="font-bold text-4xl  capitalize">{data[0].word}</h1>
          {matchingPhonetic && (
            <div>
              <Volume2Icon
                className="cursor-pointer hover:text-neutral-400 transition duration-500 ease-in-out"
                size={30}
                onClick={() => {
                  audio.play();
                }}
              />
            </div>
          )}
        </div>

        {data.map((data) => {
          return (
            <div className="flex flex-col gap-2 mt-2">
              {data.meanings.map((meanings) => (
                <div className="">
                  <h1 className="text-2xl italic text-blue-500/90 relative text-left">
                    {meanings.partOfSpeech}
                  </h1>

                  {meanings.definitions.map((definition) => {
                    count += 1;
                    return (
                      <>
                        <div className="flex pb-5 pt-0 relative mb-4">
                          <div className="text-center pr-4 mt-1 font-bold">
                            {count}
                            <div className="absolute w-[3px] bg-blue-600/60 rounded-full left-[1.5px] h-[calc(100%-7px)]" />
                          </div>
                          <div className="flex-grow">
                            <div className="text-lg">
                              <span className="font-bold">: </span>
                              {definition.definition}
                            </div>
                            {definition.example && (
                              <div className="text-lg italic flex p-1">
                                <div className="absolute w-1 h-12 bg-neutral-500/30 rounded-full mr-2 left-[1.5rem]" />
                                <div className="flex-grow">
                                  <p className="text-base text-neutral-800/70 ml-2">
                                    {definition.example}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordCard;
