import Title from "./Title";
import { tours } from "../data/linksData";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='Featured' subTitle='tours' />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p> {tour.text} </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {tour.destination}
                  </p>
                  <p> {tour.days} </p>
                  <p> {tour.cost} </p>
                </div>
              </div>
          </article>
          )
        })}
      </div>
    </section>
  );
};


export default Tours