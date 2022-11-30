import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/vectors/Logo.png";
import Cart from "../../assets/vectors/cart.png";
import Circle from "../../assets/vectors/circle.png";
import "./layout.css";
export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/payment">Оплата и доставка</Link>
          </li>
          <li>
            <Link to="/reclamation">Возврат</Link>
          </li>
          <li>
            <Link to="/research">Исследования</Link>
          </li>
          <li>
            <Link to="/personalarea">Личный кабинет</Link>
          </li>
          <li>
            <a href="tel:88(800)600-09-90">8 8 (800) 600-09-90</a>
          </li>
          <li className="cart_li">
            <img src={Cart} alt="cart" className="cart" />
            <div className="circle_container">
              <img src={Circle} alt="circle" className="circle" />
              <div className="circle_text">1</div>
            </div>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
