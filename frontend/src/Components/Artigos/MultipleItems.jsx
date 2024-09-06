import Slider from "react-slick";
import "./multi.css"
import { Link } from "react-router-dom";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (
      <Slider {...settings}  className="slider">
        {[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027].map((item, index) => {
            return (
                <div key={index} className="index">
                    <h1>{item}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis tempora, harum veritatis debitis maxime!</p>
                    <Link className='btn btn-border' to={item} ><p>Ler mais</p></Link>
                </div>
            )
        })}
        
      </Slider>
  );
}

export default MultipleItems;
