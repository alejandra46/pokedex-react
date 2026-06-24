import { useParams } from "react-router-dom";

function PokemonDetail() {

    const { name } = useParams();

    const pokemons = {
        Pikachu: {
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            type: "Eléctrico",
            description:
                "Pikachu es un Pokémon de tipo eléctrico. Puede almacenar electricidad en sus mejillas y liberarla en forma de potentes descargas."
        },

        Charmander: {
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            type: "Fuego",
            description:
                "Charmander es un Pokémon de tipo fuego. La llama en la punta de su cola refleja su estado de salud y emociones."
        }
    };

    const pokemon = pokemons[name as keyof typeof pokemons];

    if (!pokemon) {
        return <h2>Pokémon no encontrado</h2>;
    }

    return (

        <div className="container mt-4 text-center">

            <h1>Detalle del Pokémon</h1>

            <img
                src={pokemon.image}
                alt={name}
                width="200"
            />

            <h2>{name}</h2>

            <h4>Tipo: {pokemon.type}</h4>

            <p className="mt-3">
                {pokemon.description}
            </p>

        </div>

    );
}

export default PokemonDetail;