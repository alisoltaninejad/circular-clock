import React, { useState, useEffect } from "react";
import CircularProgress from "./CircularProgress";
import "../index.css";
const TimerPage: React.FC = () => {
  const [time, setTime] = useState(new Date());

  // استفاده ازش برای تایمر هنگام mount  کامپوننت
  useEffect(() => {
    // آپدیت کردن وضعیت بر اساس ساعت واقعی سیستم در هر ثانیه
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // برای حذف تایمر عنگام unmount
    //جهت مدیریت منابع و هدر رفتن حافظه تایمر باید یک طول عمر داشته باشد تا تایمر های متعدد ساخته نشوند
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-items-stretch ">
      <h1 className="text-7xl pt-3 pl-4 text-amber-600 tracking-widest  drop-shadow-[0_0_4px_#ee6612]">
        circular-clock
      </h1>
      <hr className="divider-neon " />
      <h5 className=" text-lg pl-4 text-emerald-400 tracking-widest">
        A stunning real-time neon clock with animated spinning border. Built
        with <span className="text-red-400  glass text-lg">React</span> ,
        <span className="text-red-400 glass text-lg">TypeScript </span> &
        <span className="text-red-400 glass text-lg">Tailwind CSS</span> ;
      </h5>
      <hr className="divider-neon " />

      <h1 className="text-slate-400 text-sm tracking-[0.5em] uppercase ">
        System <span className="text-white font-bold">Real-time Clock</span>
      </h1>

      <div className=" flex flex-row flex-wrap justify-center items-center mt-12 gap-8 md:gap-16">
        <CircularProgress
          value={hours}
          max={24}
          label="Hours"
          color="#8b5cf6"
        />
        <span className="text-6xl font-bold">:</span>
        <CircularProgress
          value={minutes}
          max={60}
          label="Minutes"
          color="#3b82f6"
        />
        <span className="text-6xl font-bold">:</span>
        <CircularProgress
          value={seconds}
          max={60}
          label="Seconds"
          color="#10b981"
        />
      </div>
    </div>
  );
};

export default TimerPage;
