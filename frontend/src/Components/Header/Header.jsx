import axios from 'axios';
import { useEffect, useState } from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Header.css';

export default function Header() {
    const [slide, setSlide] = useState([]);

    const mostrar = () => {
        axios.get('http://localhost:8080/listar-livros')
            .then(res => {
                // Pegar os últimos 4 registros
                const ultimosQuatro = res.data.slice(-4);
                setSlide(ultimosQuatro);
                console.log("Slide: ", ultimosQuatro)
            })
            .catch(err => {
                console.error("Erro ao buscar dados:", err);
            });
    }

    useEffect(() => {
        mostrar();
    }, []);

    return (
        <header>
            <div className="header-container">
                <Swiper 
                    modules={[Navigation, Pagination, Autoplay]} 
                    className="mySwiper" 
                    autoplay={{ delay: 5000 }} 
                    loop={true} 
                    direction='horizontal'
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        prevEl: '.button-prev-slide',
                        nextEl: '.button-next-slide', 
                        clickable: true
                    }}
                >
                    {slide.map((livro, index) => (
                        <SwiperSlide key={index}>
                            <div className="header-wrapper container">
                                <div className="header-left">
                                    <h2>{livro.titulo}</h2>
                                    <p dangerouslySetInnerHTML={{ __html: livro.descricao }}></p>
                                    <Link className='btn btn-border' to={`http://localhost:8080/files/${livro.livro}`}><p>Ler mais</p></Link>
                                </div>
                                <div className="header-right">
                                    <img src={`http://localhost:8080/files/${livro.foto}`} alt={livro.titulo} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    
                    <div className="slider-button">
                        <div className="button-prev-slide slidebutton">
                            <GoArrowLeft />
                        </div>
                        <div className="button-next-slide slidebutton">
                            <GoArrowRight className='icon-button'/>
                        </div>
                    </div>
                    
                    <div className="container">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </header>
    );
}
