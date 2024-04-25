import search_icon from "../components/assets/search.png";
import "../components/PokeApi.css";

const PokeApi = () => {

  const search = async () => {
    const element = document.querySelector("input[type='text']");
    if (element.value === "") {
      alert("Please enter a Pokemon name");
      return;
    }

    let url = `https://pokeapi.co/api/v2/pokemon/${element.value.toLowerCase()}`;

    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      let data = await response.json();
      
      const name = document.querySelector(".name span:last-child");
      const experience = document.querySelector(".experience span:last-child");
      const image = document.querySelector(".image img");

      const capitalized = element.value.charAt(0).toUpperCase() + element.value.slice(1);
      name.textContent = capitalized;
      experience.textContent = data.base_experience;
      image.src = data.sprites.front_default;

    } catch (error) {
      alert("Pokemon not found");
    }
  }


  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="Pokemon" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="search" />
        </div>
      </div>
      <div className="data">
        <div className="image">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
        </div>
        <div className="name">
          <span>Name: </span>
          <span>Ditto</span>
        </div>
        <div className="experience">
          <span>Base Experience: </span>
          <span>101</span>
        </div>
      </div>
    </div>
  )
}

export default PokeApi;