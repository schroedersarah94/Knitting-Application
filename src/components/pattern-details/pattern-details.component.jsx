import './pattern-details.styles.css';
import { useEffect } from 'react';
import patternImage from '../../assets/img/sweater.jpg';
import beanieLady from '../../assets/img/beanieLady.webp';
import blanketLady from '../../assets/img/blanketLady.webp';
import scarfLady from '../../assets/img/scarfLady.webp';

let slider;
let isDown = false;
let startX;
let scrollLeft;

function handleSliderMouseDown(event) {
  isDown = true;
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

function handleSliderMouseMove(event) {
  if (!isDown) return;

  event.preventDefault();
  const x = event.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
}

function handleSliderMouseUpOrLeave() {
  isDown = false;
}

function PatternDetails() {
  useEffect(() => {
    slider = document.querySelector('.pattern-image-slider');
  });
  return (
    <div data-testid="patternDetailsContainer" className="pattern-details-container">
      <h1 className="pattern-title">Pattern Title</h1>
      <h4 className="pattern-author">Pattern Author</h4>

      <div className="pattern-image-slider-container">
        <div
          className="pattern-image-slider"
          data-testid="image-slider"
          onMouseDown={handleSliderMouseDown}
          onMouseMove={handleSliderMouseMove}
          onMouseUp={handleSliderMouseUpOrLeave}
          onMouseLeave={handleSliderMouseUpOrLeave}
          role="none"
        >
          <img className="pattern-image" src={patternImage} alt="" />
          <img className="pattern-image" src={beanieLady} alt="" />
          <img className="pattern-image" src={blanketLady} alt="" />
          <img className="pattern-image" src={scarfLady} alt="" />
        </div>
      </div>

      <div>
        <h3>Pattern Info</h3>
        <p>Yarn Weight: Worsted</p>
        <p>Needles: US 5 / 3.5mm</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>
          Omg i just love patterns, so cute omg look at this crazy hard sock
          colorwork chart! SO overwhelming, we love it!
        </p>
      </div>
      <div>
        <p>more from the author section?</p>
      </div>
      <div className="pattern-button-container">
        <button className="pattern-button" type="button">OPEN PATTERN</button>
      </div>
    </div>
  );
}

export default PatternDetails;
