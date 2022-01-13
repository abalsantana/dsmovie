import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

function MovieCard() {
    const movie = {
        id: 1,
        image: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/02/01-avengers-2012.png",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/Form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    );
}

export default MovieCard;