import pic1 from "../assets/restauranfood.jpg";
import pic2 from "../assets/restaurant chef B.jpg"
import food1 from "../assets/lemon dessert.jpg"
import food2 from "../assets/greek salad.jpg"
import food3 from "../assets/bruchetta.svg"
import React from "react";
import logo from "../assets/john.jpg";
import { Link } from "react-router-dom";
import putin from "../assets/putin.jpg"
import xi from "../assets/xi.jpg"
import biden from "../assets/biden.jpg"
import tu from "../assets/tu.jpg"
import deliver from "../assets/fast-delivery.png"
function Header({ className }) {
  return (
    <header className="header-Container">
      <section className="hero-section">
        <div className="Row">
          <div className="hero-section-left">
            <h1 className="H1">Little Lemon</h1>
            <h3 className="H3">Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="btn"><Link to="/reserve-table">Reserve a Table</Link></button>
          </div>
          <div className="hero-section-right">
            <img src={pic1} alt="asd" height={400} width={300}></img>
          </div>
        </div>
      </section>
      {/* highlight */}
      <section className="highlights-Container">
        <div className="highlights-header Row">
          <h2>This weeks Specials! </h2>
          <button className="btn">Online Menu</button>
        </div>

        <div className="Row">
          {/* card 1 */}
          <div className="highlights-card">
            <img src={food1} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Lemon dessert</p>
                <p className="highlight-card-header-price">$6.50</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <img src={deliver} alt="deliver"  class="deliver"></img>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="highlights-card">
            <img src={food2} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Greek salad</p>
                <p className="highlight-card-header-price">$12.99</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <img src={deliver} alt="deliver"  class="deliver"></img>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="highlights-card">
            <img src={food3} alt="asd" height={400} width={300}></img>
            <div className="highlight-card-discription">
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Bruchetta</p>
                <p className="highlight-card-header-price">$10.85</p>
              </div>
              <div className="highlight-card-text">
                <p>
                  The famous greek salad of crispy letture.pepers, olives and
                  ourgarnished with crunchy garlic and rosemay oroutons.
                </p>
              </div>
              <div className="highlight-card-header Row">
                <p className="highlight-card-header-menu">Order delivery</p>
                <img src={deliver} alt="deliver"  class="deliver"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="review-Container">
        <h2>What are customer say!</h2>
        <div className="Row">
        <div className="review-card">
            <div className="Row star">
              <meter
                class="average-rating"
                min="0"
                max="5"
                value="4.3"
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
            </div>
            <div className="review-user">
              <div className="Row">
                <img src={biden} className="review-avatar" alt="user"></img>
                <p>uncle biden</p>
              </div>
            </div>
            <div className="review-description">
              <p>
                The famous greek salad of crispy letture.pepers, olives and
                ourgarnished with crunchy garlic and rosemay oroutons.
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="Row star">
              <meter
                class="average-rating"
                min="0"
                max="5"
                value="4.3"
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
            </div>
            <div className="review-user">
              <div className="Row">
                <img src={putin} className="review-avatar" alt="user"></img>
                <p>uncle putin</p>
              </div>
            </div>
            <div className="review-description">
              <p>
                The famous greek salad of crispy letture.pepers, olives and
                ourgarnished with crunchy garlic and rosemay oroutons.
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="Row star">
              <meter
                class="average-rating"
                min="0"
                max="5"
                value="4.3"
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
            </div>
            <div className="review-user">
              <div className="Row">
                <img src={xi} className="review-avatar" alt="user"></img>
                <p>uncle xi</p>
              </div>
            </div>
            <div className="review-description">
              <p>
                The famous greek salad of crispy letture.pepers, olives and
                ourgarnished with crunchy garlic and rosemay oroutons.
              </p>
            </div>
          </div>
          <div className="review-card">
            <div className="Row star">
              <meter
                class="average-rating"
                min="0"
                max="5"
                value="4.3"
                title="4.3 out of 5 stars"
              >
                4.3 out of 5
              </meter>
            </div>
            <div className="review-user">
              <div className="Row">
                <img src={tu} className="review-avatar" alt="user"></img>
                <p>uncle tu</p>
              </div>
            </div>
            <div className="review-description">
              <p>
                The famous greek salad of crispy letture.pepers, olives and
                ourgarnished with crunchy garlic and rosemay oroutons.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="Row">
          <div className="about-section-left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            
          </div>
          <div className="about-section-right">
            <img className="about-pic-1" src={pic1} alt="asd" height={400} width={300}></img>
            <img  className="about-pic-2" src={pic2} alt="asd" height={400} width={300}></img>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
