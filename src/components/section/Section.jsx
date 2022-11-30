import "./section.css";
import GingerSmall from "../../assets/images/smallImages/gingerSmall.png";
import NootrisSamll from "../../assets/images/smallImages/nootrisSmall.png";
import Corona from "../../assets/images/smallImages/corona.png";
export default function Section() {
  return (
    <div className="section_container">
      <div className="section_top_text_container">
        <p>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</p>
        <p>СО СКИДКОЙ -15% ПЕРВЫМ!</p>
      </div>
      <div className="section_price_text">
        <p>750₽</p>
        <p>690₽</p>
      </div>
      <div className="secction_image">
        <img src={GingerSmall} alt="ginger" className="gingerSmall" />
        <img src={NootrisSamll} alt="nootris" className="nootrisRotated" />
        <img src={Corona} alt="corona" className="corona" />
      </div>
      <div className="section_bottom_text_container">
        <div className="bottom_left_text">
          <p>Содержит</p>
          <p>имбирь</p>
        </div>
        <div className="bottom_center_text">
          <p>+ Бесплатная доставка</p>
          <p>Специальная цена</p>
        </div>
        <div className="bottom_right_text">
          <p>Нейтрализует</p>
          <p>вирусы</p>
        </div>
      </div>
      <div className="order_button_container">
        <form action="">
          <button className="order_button">Оформить заказ!</button>
        </form>
      </div>
    </div>
  );
}
