import { useFavorites } from "../context/FavoriteContext";

function Navbar() {

    const { favorites } = useFavorites();

    const favoritePokemon =
        favorites.length > 0
            ? favorites[favorites.length - 1]
            : null;

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">

                <a className="navbar-brand" href="/">
                    🎮 PokéDex
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="menu"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <a
                                className="nav-link active"
                                href="/"
                            >
                                Inicio
                            </a>

                        </li>

                        <li className="nav-item">

                            <a
                                className="nav-link"
                                href="/favorites"
                            >
                                ❤️ Favoritos ({favorites.length})
                            </a>

                        </li>

                    </ul>

                    {
                        favoritePokemon && (

                            <div className="d-flex align-items-center ms-4 text-white">

                                <img
                                    src={favoritePokemon.image}
                                    alt={favoritePokemon.name}
                                    width="40"
                                    height="40"
                                    className="me-2"
                                />

                                <div>

                                    <div>
                                        <strong>{favoritePokemon.name}</strong>
                                    </div>

                                    <small>
                                        Tipo: {favoritePokemon.type}
                                    </small>

                                </div>

                            </div>

                        )
                    }

                </div>

            </div>

        </nav>

    )

}

export default Navbar;