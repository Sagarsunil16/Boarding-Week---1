import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
      console.log("Timer mounted!");
    // ✅ Start timer
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // ✅ Cleanup function (runs on unmount)
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleared!");
    };
  }, []); // empty dependency means run once on mount

  return (
    <div>
      <h2>Timer: {count}</h2>
    </div>
  );
};

export default Timer;
