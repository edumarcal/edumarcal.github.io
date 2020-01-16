import React from "react";
interface IProps {
  maxNumberOfDots: number;
  numberOfActiveDots: number;
}

const DotsProgress: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="dots-progress">
      {[...Array(props.maxNumberOfDots)].map((_, i) => (
        <div
          className={`dots-progress-dot ${
            props.numberOfActiveDots > i ? "dots-progress-dot-active" : ""
          }`}
          key={i}
        />
      ))}
    </div>
  );
};

export default DotsProgress;
