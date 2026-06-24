import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";

interface pokInter {
    name: string,
    image: string,
    type: string
}

function PokemonCard({ name, image, type }: pokInter) {

    const { addFavorite } = useFavorites();

    return (

        <div className="card m-2">

            <img
                src={image}
                className="card-img-top"
                alt={name}
            />

            <div className="card-body">

                <Link
                    to={`/pokemon/${name}`}
                    style={{
                        textDecoration: "none",
                        color: "black"
                    }}
                >
                    <h3>{name}</h3>
                </Link>

                <p>
                    Tipo: {type}
                </p>

                <button
                    className="btn btn-danger"
                    onClick={() =>
                        addFavorite({
                            name,
                            image,
                            type
                        })
                    }
                >
                    ❤️
                </button>

            </div>

        </div>

    )

}

export default PokemonCard;