import React from 'react';
import Strawberry from '../images/strawberry.jpg';
import Caramel from '../images/caramel.jpg';
import Raspberry from '../images/raspberry.jpg';
import Peachwalnut from '../images/peachwalnut.jpg';
import Coffee from '../images/coffee.jpg';
import Orange from '../images/orange.jpg';

/* Credit for images:
Photo by Razane Adra from Pexels: https://www.pexels.com/photo/chocolate-cake-with-icing-on-white-ceramic-plate-8817225/
Photo by hissetmehurriyeti  from Pexels: https://www.pexels.com/photo/orange-cake-on-a-cake-stand-9120382/
Photo by Nataliya Vaitkevich from Pexels: https://www.pexels.com/photo/selective-focus-photo-of-fruit-cake-5426097/
Photo by Eiliv Aceron from Pexels: https://www.pexels.com/photo/cake-with-walnuts-on-cake-stand-10311435/
Photo by Anna Tukhfatullina Food Photographer/Stylist from Pexels: https://www.pexels.com/photo/cake-on-white-tray-2684556/
Photo by Eiliv Aceron from Pexels: https://www.pexels.com/photo/strawberry-cake-on-cake-stand-10311446/ */

const Checkcake = (props) => {
  const { cakeOption, onCakeOptionChange, onCounterChange } = props
  return (
    <div className="container">
      <h3>Which cakes are your favourite? (please choose 2 or more)</h3>
      <form htmlFor="cake selection" className="cake-container">
        <label htmlFor="cake checkbox" className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Strawberry Cheesecake"
            checked={cakeOption.includes('Strawberry Cheesecake')}
            onChange={() => onCakeOptionChange('Strawberry Cheesecake')}
            required />
          <div className="cake-image">
            <img
              src={Strawberry}
              alt="Strawberry Cheesecake" />
          </div>
        </label>
        <label htmlFor="cake checkbox" className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Salted Caramel Cake"
            checked={cakeOption.includes('Salted Honey Cake')}
            onChange={() => onCakeOptionChange('Salted Honey Cake')}
            required />
          <div className="cake-image">
            <img
              src={Caramel}
              alt="Salted Honey Cake" />
          </div>
        </label>

        <label htmlFor="cake checkbox" className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Raspberry cake"
            checked={cakeOption.includes('Raspberry cake')}
            onChange={() => onCakeOptionChange('Raspberry cake')}
            required />
          <div className="cake-image">
            <img
              src={Raspberry}
              alt="Raspberry cake" />
          </div>
        </label>

        <label htmlFor="cake checkbox" className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Peach and Walnut Cake"
            checked={cakeOption.includes('Peach and Walnut Cake')}
            onChange={() => onCakeOptionChange('Peach and Walnut Cake')}
            required />
          <div className="cake-image">
            <img
              src={Peachwalnut}
              alt="Peach and Walnut Cake" />
          </div>
        </label>
        <label htmlFor="cake checkbox" className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Coffee Latte Cake"
            checked={cakeOption.includes('Coffee Latte Cake')}
            onChange={() => onCakeOptionChange('Coffee Latte Cake')}
            required />
          <div className="cake-image">
            <img
              src={Coffee}
              alt="Coffee Latte Cake" />
          </div>
        </label>
        <label htmlFor="cake checkbox" className="cake-checkbox">
          <input
            className="checkboxes"
            type="checkbox"
            value="Orange Cake"
            checked={cakeOption.includes('Orange Cake')}
            onChange={() => onCakeOptionChange('Orange Cake')}
            required />
          <div className="cake-image">
            <img
              src={Orange}
              alt="Orange Cake" />
          </div>
        </label>

      </form>
      <button
        type="button"
        onClick={onCounterChange}
        disabled={cakeOption === ''}>
        Next Question
      </button>
    </div>
  );
};

export default Checkcake;