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
                        <div className="actions">
                            <div>
                                <div className="difficulty">
                                    <i className="ico i-medium" />
                                    <a href="#">medium</a>
                                </div>
                                <div className="likes">
                                    <i className="fa fa-heart" />
                                    <a href="#">10</a>
                                </div>
                                <div className="comments">
                                    <i className="fa fa-comment" />
                                    <a href="recipe.html#comments">27</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*item*/}
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
                                Spicy Morroccan prawns with cherry tomatoes
                            </a>
                        </h2>
                        <div className="actions">
                            <div>
                                <div className="difficulty">
                                    <i className="ico i-hard" />
                                    <a href="#">hard</a>
                                </div>
                                <div className="likes">
                                    <i className="fa fa-heart" />
                                    <a href="#">10</a>
                                </div>
                                <div className="comments">
                                    <i className="fa fa-comment" />
                                    <a href="recipe.html#comments">27</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*item*/}
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
                            <a href="recipe.html">Super easy blueberry cheesecake</a>
                        </h2>
                        <div className="actions">
                            <div>
                                <div className="difficulty">
                                    <i className="ico i-easy" />
                                    <a href="#">easy</a>
                                </div>
                                <div className="likes">
                                    <i className="fa fa-heart" />
                                    <a href="#">10</a>
                                </div>
                                <div className="comments">
                                    <i className="fa fa-comment" />
                                    <a href="recipe.html#comments">27</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*item*/}
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
                                Refreshing banana split with a twist for adults
                            </a>
                        </h2>
                        <div className="actions">
                            <div>
                                <div className="difficulty">
                                    <i className="ico i-hard" />
                                    <a href="#">hard</a>
                                </div>
                                <div className="likes">
                                    <i className="fa fa-heart" />
                                    <a href="#">10</a>
                                </div>
                                <div className="comments">
                                    <i className="fa fa-comment" />
                                    <a href="recipe.html#comments">27</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*item*/}
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
                                Sushi mania: this is the best sushi you have ever tasted
                            </a>
                        </h2>
                        <div className="actions">
                            <div>
                                <div className="difficulty">
                                    <i className="ico i-easy" />
                                    <a href="#">easy</a>
                                </div>
                                <div className="likes">
                                    <i className="fa fa-heart" />
                                    <a href="#">10</a>
                                </div>
                                <div className="comments">
                                    <i className="fa fa-comment" />
                                    <a href="recipe.html#comments">27</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*item*/}
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
                                Princess puffs - an old classic at its best
                            </a>
                        </h2>
                        <div className="actions">
                            <div>
                                <div className="difficulty">
                                    <i className="ico i-hard" />
                                    <a href="#">hard</a>
                                </div>
                                <div className="likes">
                                    <i className="fa fa-heart" />
                                    <a href="#">10</a>
                                </div>
                                <div className="comments">
                                    <i className="fa fa-comment" />
                                    <a href="recipe.html#comments">27</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*item*/}
                <div className="quicklinks">
                    <a href="#" className="button">
                        More recipes
                    </a>
                    <a href="javascript:void(0)" className="button scroll-to-top">
                        Back to top
                    </a>
                </div>
            </div>
            {/*//entries*/}
        </div>
    );
}