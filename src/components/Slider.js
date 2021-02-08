const Slider = ({
  min,
  max,
  value,
  unit,
  disabled,
  handleChange,
  handleSave,
}) => {
  return (
    <div className="slider-container">
      {disabled !== true && (
        <div className="slider-values">
          <h3>Min: {min}</h3>
          <h3>
            Current: {value}
            <span> {unit}</span>
          </h3>
          <h3>Max: {max}</h3>
        </div>
      )}
      <input
        type="range"
        className="slider"
        disabled={disabled}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save image -- coming soon!</button>
    </div>
  );
};

export default Slider;
