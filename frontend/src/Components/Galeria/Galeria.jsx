import l1 from '../../assets/l1.png';
import l2 from '../../assets/l2.png';
import l3 from '../../assets/l3.png';
import l4 from '../../assets/l4.jpg';
import l5 from '../../assets/l5.jpg';
import l6 from '../../assets/l6.jpg';
import l7 from '../../assets/l7.jpg';
import l8 from '../../assets/l8.jpg';
import l9 from '../../assets/l9.jpg';
import "./galeria.css";

export default function Galeria() {

    document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.filter_button button');
        const filterableCards = document.querySelectorAll('.filterable_cards .card');
    
        const filterCards = e => {
            document.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
    
            filterableCards.forEach(card => {
                card.classList.add("hide");
                if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "todos"){
                    card.classList.remove("hide");
                    console.log("Funciona muito..!");
                }
            });
        };
    
        // Adicione os ouvintes de eventos aos botões de filtro
        filterButtons.forEach(button => {
            button.addEventListener('click', filterCards);
        });
    });
    

    return (
        <div className="container galeria" id="categoria">
            <div className="filter_button">
                <button className='btn active' data-name="todos" title="todos">Todos</button>
                <button className='btn' data-name="eng" title="eng">Engenharia informática</button>
                <button className='btn' data-name="ri" title="ri">Relações Internacionais</button>
                <button className='btn' data-name="ec" title="ec">Economia</button>
                <button className='btn' data-name="di" title="di">Direito</button>
            </div>

            {/* Images Cards */}
            <div className="filterable_cards">
                <div className="card" data-name="eng">
                    <img src={l2} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn" title="mais"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
                <div className="card" data-name="eng">
                    <img src={l4} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
                <div className="card" data-name="eng">
                    <img src={l4} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
                <div className="card" data-name="eng">
                    <img src={l1} alt="" />
                    <div className="card_body">
                        <h5>The Golden M</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
                <div className="card" data-name="ri">
                    <img src={l5} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
                <div className="card" data-name="ri">
                    <img src={l2} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
                <div className="card" data-name="ri">
                    <img src={l3} alt="" />
                    <div className="card_body">
                        <h5>The last Winter</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
                <div className="card" data-name="ec">
                    <img src={l6} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
                <div className="card" data-name="ec">
                    <img src={l7} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div><div className="card" data-name="di">
                    <img src={l8} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div><div className="card" data-name="di">
                    <img src={l9} alt="" />
                    <div className="card_body">
                        <h5>Black Woman</h5>
                        <p className="card_text">Lorem ipsum dolor sit amet, consectetur a
                        dipisicing elit. Quod magni error omnis reiciendis sapiente nostrum 
                        et accusamus tenetur fugit? Sit nobis ullam neque! Ullam possimus 
                        repellat nostrum aut quaerat? Laudantium!</p>
                        <button className="btn"><a href="/sds">Ver mais</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
