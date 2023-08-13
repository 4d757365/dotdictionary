export interface Phonetics {
    audio: string;
    text: string;
    sourceUrl: string;
    license: {
        name: string;
        url: string;
    };
}

export interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }

export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export interface License {
    name: string;
    url: string;
}

export interface WordData {
    word: string;
    phonetic?: string;
    phonetics: Phonetics[];
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
}

  