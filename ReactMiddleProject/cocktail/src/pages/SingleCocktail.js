import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const responce = await fetch(`${url}${id}`);
        const data = await responce.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glasses,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredient = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            glasses,
            category,
            instruction,
            ingredient,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  const { name, image, info, category, glasses, instruction, ingredient } =
    cocktail;
  return (
    <section>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>

      <h2 className="section-title">{name}</h2>

      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glasses}
          </p>
          <p>
            <span className="drink-data">instruction:</span>
            {instruction}
          </p>
          <p>
            <span className="drink-data">ingredient:</span>
            {ingredient.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
