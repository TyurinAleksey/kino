import { Movie } from "./Movie"

function Movies (props){

    const {movies = []} = props;

    return <div className="list">
        {movies.length ? (
            movies.map ((movie) => 
            <Movie {...movie}/>)
        ):(
            <h2>Ничего не найдено</h2>
    )}
    </div>

}

export {Movies}