import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RangeYear = () => {
  const [rangeValues, setRangeValues] = useState([1900, 2024]);

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };
  return (
    <div className="row-span-full">
      <Slider
        className="col-span-6"
        range
        min={1900}
        max={2024}
        defaultValue={[1900, 2024]}
        value={rangeValues}
        onChange={handleRangeChange}
      />

      <div className="row-span-full">
        <p>
          <strong>Year Release:</strong> {rangeValues[0]} - {rangeValues[1]}
        </p>
      </div>
    </div>
  );
};

export default RangeYear;
