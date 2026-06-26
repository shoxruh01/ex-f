import React, { useState } from "react";
import "./Hero.css";

import cream from "../assets/cream.png";
import pichen1 from "../assets/pichenni.png";
import pichen2 from "../assets/pichennii.png";
import cream2 from "../assets/cream2.png";
import { LuClock3 } from "react-icons/lu";
import { IoSparklesOutline } from "react-icons/io5";
import { PiFireSimpleLight } from "react-icons/pi";

const Hero = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Hero">
      <div className="Hero__left">
        <img src={cream} alt="" className="Hero__img" />

        <div className="Hero__info">
          <span className="Hero__badge">DESSERT</span>

          <h1 className="Hero__title">Chocolate Lava Cake</h1>

          <div className="Hero__text">
            <span>
              <LuClock3 /> 25 min
            </span>
            <span>
              <IoSparklesOutline /> Easy
            </span>
            <span>
              <PiFireSimpleLight /> 450 kcal
            </span>
          </div>

          <button className="Hero__btn">Add to Order</button>
        </div>
      </div>

      <div className="Hero__right">
        <div className="Hero__top">
          <h2>Popular Choices</h2>
          <span>View All</span>
        </div>

        <div className="Hero__card">
          <img src={pichen1} alt="" className="Hero__cardimg" />

          <div>
            <h3>Assorted Macarons</h3>
            <p>6 pieces selection</p>
          </div>

          <div className="Hero__counter">
            <button onClick={() => count > 0 && setCount(count - 1)}>-</button>

            <span>{count}</span>

            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>

        <div className="Hero__card">
          <img src={pichen2} alt="" className="Hero__cardimg" />

          <div>
            <h3>Warm Cookies</h3>
            <p>Classic dark chip</p>
          </div>

          <div className="Hero__counter">
            <button onClick={() => count > 0 && setCount(count - 1)}>-</button>

            <span>{count}</span>

            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
      </div>

      {/* yon bo'lim */}

      <div className="Hero2">
        <div className="tit">
          <h2>Recommended for you</h2>

          <p className="subtitle">Based on your recent pastry selections</p>

          <div className="tit__card">
            <img src={cream2} alt="qwerty" />

            <div className="tit__info">
              <h3>Wild Strawberry Tart</h3>
              <span className="narx">$8.50</span>
            </div>

            <button className="bttn">Quick Add</button>
          </div>
        </div>

        <hr />

        <div className="order">
          <div className="order__top">
            <h2>Current Order</h2>

            <span>2 items</span>
          </div>

          <div className="order__item">
            <p>Lava Cake</p>
            <strong>$12.00</strong>
          </div>

          <div className="order__item">
            <p>Latte</p>
            <strong>$5.75</strong>
          </div>

          <div className="total">
            <div className="total__top">
              <span>Total Amount</span>

              <h1 className="narxx">$17.75</h1>
            </div>

            <p className="text">Taxes and service fees included</p>
          </div>
        </div>
      </div>

      <div className="ob__container">
        <div className="card__calories">
          <div className="label">CALORIES</div>
          <div className="value">450 kcal</div>
        </div>

        <div className="card__sugar">
          <div className="label">SUGAR</div>
          <div className="value">28g</div>
        </div>

        <div className="card__fat">
          <div className="label">FAT</div>
          <div className="value">18g</div>
        </div>

        <div className="card__carbs">
          <div className="label">CARBS</div>
          <div className="value">52g</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
