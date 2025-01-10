import React, { JSX } from "react";
interface Props {
  icon: JSX.Element;
  title: string;
  date: string;
  place: string;
  description: string;
  location: string;
}

const Card = ({ icon, title, date, place, description, location }: Props) => {
  return (
    <div className="flex items-start gap-3">
        {icon}
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{title}</p>
              <p className="font-medium">{place}</p>
              <p className="text-sm">{location}</p>
            </div>
          </div>
          <p className="text-zinc-600 text-sm font-semibold">{date}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
