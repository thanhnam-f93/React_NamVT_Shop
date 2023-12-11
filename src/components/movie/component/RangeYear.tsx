import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RangeYear = ({ dataSearch, setDataSearch }) => {
  const [rangeValues, setRangeValues] = useState([1900, 2024]);

  const handleRangeChange = (values) => {
    setRangeValues(values);
    setDataSearch({ ...dataSearch, year: values });
  };
  return (
    <div className="row-span-full">
      <label className="font-semibold pl-1">{"Release"}</label>
      <Slider
        className="col-span-5"
        range
        min={1900}
        max={2024}
        defaultValue={[1900, 2024]}
        value={rangeValues}
        onChange={handleRangeChange}
      />

      <div className="row-span-full">
        <p>
          Range Year: {rangeValues[0]} - {rangeValues[1]}
        </p>
      </div>
    </div>
    // :deep(.rc-slider-track rc-slider-track-1){
    //   badgeColors:"black";
    //   }
  );
};

export default RangeYear;
