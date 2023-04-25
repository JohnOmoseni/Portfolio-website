import { useEffect, useState } from "react";

function RotateWords() {
  const [loopNo, setLoopNo] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currText, setCurrText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 4000;
  const [isTimeout, setIsTimeout] = useState(true);

  const wordsToRotate = [
    "Frontend Developer",
    "UI/UX Designer",
    "NextJS Enthusiast",
    "Man-United Fan",
  ];

  useEffect(() => {
    // ojaaay's masterpiece
    let ticker;
    if (isTimeout) {
      ticker = setTimeout(() => {
        tick();
      }, 12000);
      setIsTimeout(false);
      return () => clearTimeout(ticker);
    } else {
      ticker = setInterval(tick, delta);
      return () => clearInterval(ticker);
    }
  }, [currText]);

  const tick = () => {
    let index = loopNo % wordsToRotate.length;
    let fullWord = wordsToRotate[index];
    let updatedText = isDeleting
      ? fullWord.substring(0, currText.length - 1)
      : fullWord.substring(0, currText.length + 1);

    setCurrText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 2);
    }
    if (!isDeleting && updatedText === fullWord) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(400);
      setLoopNo(prev => prev + 1);
    }
  };
  return <div className="changing-words">{currText}</div>;
}

export default RotateWords;
