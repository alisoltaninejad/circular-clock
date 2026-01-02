import CircularProgress from "./components/CircularProgress";
function App() {
  return (
    <>
      <h1 className="text-7xl pl-4 text-amber-600 tracking-widest  drop-shadow-[0_0_4px_#ee6612]">
        circular-clock
      </h1>
      <hr className="divider-neon " />
      <h5 className=" text-lg pl-4 text-emerald-400 tracking-widest">
        A stunning real-time neon clock with animated spinning border. Built
        with <span className="text-red-400  glass text-lg">React</span> ,
        <span className="text-red-400 glass text-lg">TypeScript </span> &
        <span className="text-red-400 glass text-lg">Tailwind CSS</span> ;
      </h5>
      <hr className="divider-neon" />

     <div className="h-72 flex flex-row flex-wrap justify-center items-center gap-8 md:gap-16">
      <CircularProgress value={16} max={24} label="Hours" color="#8b5cf6" />:
      <CircularProgress value={45} max={60} label="Minutes" color="#3b82f6" />:
       <CircularProgress value={20} max={60} label="Seconds" color="#10b981" />
     </div>
    </>
  );
}

export default App;
