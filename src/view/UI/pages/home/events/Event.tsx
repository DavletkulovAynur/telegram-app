import Slider from "react-slick";
import css from "./styles.module.scss";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className={css.wrap}>
          <div className={css.content}>1</div>
        </div>
        <div className={css.wrap}>
          <div className={css.content}>2</div>
        </div>
        <div className={css.wrap}>
          <div className={css.content}>3</div>
        </div>
        <div className={css.wrap}>
          <div className={css.content}>4</div>
        </div>
        <div className={css.wrap}>
          <div className={css.content}>5</div>
        </div>
        <div className={css.wrap}>
          <div className={css.content}>6</div>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
