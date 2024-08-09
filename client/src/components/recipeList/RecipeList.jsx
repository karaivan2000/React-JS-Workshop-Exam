import { useEffect, useState } from "react";
import * as recipesApi from "../../api/recipes-api";

export default function RecipeList() {
    const [recipes, setRecipes] = useState;

    useEffect(() => {
        recipesApi.getAll()
            .then(result => setRecipes(result));
    }, []);

    return (
        <div className="cwrap">
            <header className="s-title">
                <h2 className="ribbon bright">Latest recipes</h2>
            </header>
            {/*entries*/}
            <div className="entries row">
                {/*item*/}
                <div className="entry one-third">
                    <figure>
                        <img src="images/img.jpg" alt="" />
                        <figcaption>
                            <a href="recipe.html">
                                <i className="icon icon-themeenergy_eye2" />{" "}
                                <span>View recipe</span>
                            </a>
                        </figcaption>
                    </figure>
                    <div className="container">
                        <h2>
                            <a href="recipe.html">
                                Thai fried rice with fruit and vegetables
                            </a>
                        </h2>
                    </div>
                </div>
                {/*item*/}
            </div>
            {/*//entries*/}
        </div>
    );
}