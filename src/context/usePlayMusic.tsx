import { createContext, useState, useEffect } from "react";


import { Howl } from "howler";
import NoirMusic from "../assets/Audios/noir.wav";


type TPlayerContext = {
  play: Howl | null;
  setPlay: React.Dispatch<React.SetStateAction<Howl | null>>;
  stopMusic: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePlayerMusic = createContext<TPlayerContext | undefined>(
  {} as TPlayerContext
);

export const AppPlayerGameDemon = ({children}: {children: React.ReactNode}) => {
  const [play, setPlay] = useState<Howl | null>(null);

  useEffect(() => {
    const music = new Howl({
      src: [`${NoirMusic}`],
      volume: 1,
      loop: true,
      autoplay: true,
    });

    setPlay(music);
    return () => {
      music.unload();
    };
  }, []);

  function stopMusic() {
    if (play) {
      play.stop();
    }
  }

  const initializeContext: TPlayerContext = {
    play,
    setPlay,
    stopMusic,
  };

  return (
    <usePlayerMusic.Provider value={initializeContext}>
      {children}
    </usePlayerMusic.Provider>
  );
};
