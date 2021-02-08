const Slider = ({ min, max, value, unit, handleChange }) => {
  return (
    <div className="slider-container">
      <div className="slider-values">
        <h3>Min: {min}</h3>
        <h3>
          Current: {value}
          <span> {unit}</span>
        </h3>
        <h3>Max: {max}</h3>
      </div>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
