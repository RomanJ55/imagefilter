import "./App.css";
import { useState, useRef } from "react";
import Slider from "./components/Slider";
import SidebarItem from "./components/SidebarItem";

const OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
  {
    name: "Opacity",
    property: "opacity",
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
];

const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|bmp))/i;

function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(OPTIONS);
  const [image, setImage] = useState(null);
  const selectedOption = options[selectedOptionIndex];
  const imageUrl = useRef(null);

  const handleSliderChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    if (imageRegex.test(imageUrl.current.value)) {
      setImage(imageUrl.current.value);
    } else {
      imageUrl.current.value =
        "Couldn't find an image. Please try another URL...";
    }
  };

  const handleSave = () => {
    //todo: implement this
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return {
      backgroundImage: `url(${image})`,
      filter: filters.join(" "),
    };
  };

  return (
    <div className="App">
      <div className="container">
        {image === null ? (
          <div className="start">
            <form className="image-form" onSubmit={handleImageChange}>
              <label htmlFor="imageUrl">Enter an Image path:</label>
              <input
                type="url"
                name="imageUrl"
                id="imageUrl"
                ref={imageUrl}
                autoComplete="off"
                placeholder="ex: https://www.image.com/image.png"
                onFocus={() => (imageUrl.current.value = "")}
              />
              <input type="submit" className="submit-button" />
            </form>
          </div>
        ) : (
          <div className="image" style={getImageStyle()}>
            <button
              className="back-button"
              onClick={() => window.location.reload()}
            >
              Go back to Home
            </button>
          </div>
        )}
        <div className="sidebar">
          {options.map((option, index) => {
            return (
              <SidebarItem
                key={index}
                name={option.name}
                disabled={image === null}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
              />
            );
          })}
        </div>
        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          unit={selectedOption.unit}
          disabled={image === null}
          handleChange={handleSliderChange}
          handleSave={handleSave}
        />
      </div>
    </div>
  );
}

export default App;
