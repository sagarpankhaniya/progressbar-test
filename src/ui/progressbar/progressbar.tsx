import clsx from "clsx";

interface ProgressbarProps {
  progress: number;
}

function Progressbar({ progress }: ProgressbarProps) {
  return <div className="progressbar">
    <div
      className={clsx(
        { "bg-gray": progress === 0, "bg-blue": progress !== 0 },
        "progressbar-thumb"
      )}
      style={{
        width: progress !== 0 ? `${progress}%` : "100%",
      }}
    >
      {`${progress}`}%{" "}
    </div>
  </div>;
}


export default Progressbar