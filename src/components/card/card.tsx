import { FC } from "react";
import "./card.styles.css";
export const Card: FC<{ brand: string; key: string }> = ({ brand }) => {
  return (
    <div className="card" key={brand}>
      <i className={`fa-brands fa-${brand}`}></i>
    </div>
  );
};
