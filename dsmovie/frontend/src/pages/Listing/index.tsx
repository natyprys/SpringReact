//import MovieStar from "components/MovieStars";
//import MovieScore from "components/MovieScore";
import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard/indes";

function Listing() {
    return (
        <>
            < Pagination />

            <div>
                <div className="container">
                    <div className="row">
                        {/* col-sm-6 para cada card ocupar metade.. ai vou adapatando para cada padrão de tela */}
                        <div className="col-sm-6 col-gg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-gg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-gg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-gg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-gg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-gg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-gg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                        <div className="col-sm-6 col-gg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                    </div>
                </div>    

            </div>
        </>
    );
}

            export default Listing;