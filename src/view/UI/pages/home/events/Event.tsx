import { FC } from "react";
// import Slider from "react-slick";
// import css from "./styles.module.scss";

// //
// import sp1 from "../../../assets/testImg/sp1.jpeg";
// import sp2 from "../../../assets/testImg/sp5.jpeg";
// import sp3 from "../../../assets/testImg/sp3.jpeg";
// import sp4 from "../../../assets/testImg/sp4.jpeg";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
//LOGO

const items = Array(20)
  .fill(0)
  .map((_, ind) => ({ id: `item${ind}` }));

const Event: FC = () => {
  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 2.3,
  //   slidesToScroll: 2,
  // };
  return (
    // <div className={css.sliderWrap}>
    //   <h2>Интересные места</h2>
    //   <div>Башкортостан</div>
    //   <Slider {...settings}>
    //     <div className={css.test}>
    //       <img className={css.image} src={sp3} alt="" />
    //     </div>
    //     <div className={css.test}>
    //       <img className={css.image} src={sp4} alt="" />
    //     </div>
    //     <div className={css.test}>
    //       <img className={css.image} src={sp1} alt="" />
    //     </div>
    //     <div className={css.test}>
    //       <img className={css.image} src={sp2} alt="" />
    //     </div>
    //   </Slider>
    // </div>
    <div>
      <ScrollMenu>
        {items.map(({ id }) => (
          <div
            key={id}
            style={{
              display: "inline-block",
              width: "200px",
              margin: "0 10px",
              userSelect: "none",
            }}
          >
            <div style={{ padding: "20px", border: "1px solid #ccc" }}>
              {id}
            </div>
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default Event;
