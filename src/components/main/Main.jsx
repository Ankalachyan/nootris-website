import "./main.css";
import Ginger from "../../assets/images/ginger.png";
import Nootris from "../../assets/images/nootris.png";
import Lemon from "../../assets/images/Lemon.png";
export default function Main() {
  return (
    <div className="main_container">
      <div className="main_text_holder">
        <p className="big_text">АКТИВИРУЙ ИММУНИТЕТ!</p>
        <p>
          Всего пять секунд в день помогут укрепить иммунитет и повысить
          защитные силы организма
        </p>
        <p>NOOTRIS ПОМОГАЕТ</p>
        <p>Вашему организму во время пандемии и сезонных простуд</p>
      </div>

      <div className="main_image_holder">
        <img src={Ginger} alt="ginger" className="ginger_image" />
        <img src={Nootris} alt="ginger" className="nootris_image" />
        <img src={Lemon} alt="ginger" className="lemon_image" />
      </div>
    </div>
  );
}
