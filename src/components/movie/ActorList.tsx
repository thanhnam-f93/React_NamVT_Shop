// ActorList.js
import React from "react";

const ActorList = ({ actors }) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="flex overflow-x-auto">
        {actors.map((actor, index) => (
          <div key={index} className="flex-shrink-0 mx-1">
            <img
              src={actor.imageLandscape}
              alt={actor.name}
              className="w-20 h-20 object-cover rounded-full"
            />
            <p className="mt-3 text-xs font-bold text-left text-yellow-200">
              {actor.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorList;
