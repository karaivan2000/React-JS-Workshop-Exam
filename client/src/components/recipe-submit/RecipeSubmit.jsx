export default function RecipeSubmit() {
    return (
        <div className="wrap clearfix">
            {/*breadcrumbs*/}
            <nav className="breadcrumbs">
                <ul>
                    <li>
                        <a href="index.html" title="Home">
                            Home
                        </a>
                    </li>
                    <li>Submit a recipe</li>
                </ul>
            </nav>
            {/*//breadcrumbs*/}
            {/*row*/}
            <div className="row">
                <header className="s-title">
                    <h1>Add a new recipe</h1>
                </header>
                {/*content*/}
                <section className="content full-width">
                    <div className="submit_recipe container">
                        <form>
                            <section>
                                <div className="f-row">
                                    <div className="full">
                                        <input type="text" placeholder="Recipe title" />
                                    </div>
                                </div>
                                <div className="image-wrap">
                                    <img src="./images/CoverFire.png" />
                                </div>

                                <div className="f-row">
                                    <div className="third">
                                        <input type="text" placeholder="Upload a photo..." />
                                    </div>
                                    <div className="third">
                                        <input type="text" placeholder="Cooking time" />
                                    </div>
                                    <div className="third">
                                        <input type="text" placeholder="Enter recipe category..." />
                                    </div>


                                </div>
                                <div className="f-row">
                                    <div className="third">
                                        <input type="text" placeholder="Serves how many people?" />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h2>Description</h2>
                                <div className="f-row">
                                    <div className="full">
                                        <textarea placeholder="Recipe title" defaultValue={""} />
                                    </div>
                                </div>
                                
                            </section>
                            <section>
                                <h2>Ingredients</h2>
                                <div className="f-row ingredient">
                                    <div className="large">
                                        <input type="text" placeholder="Ingredient" />
                                    </div>
                                </div>

                            </section>
                            <section>
                                <h2>
                                    Instructions{" "}
                                    <span>(enter instructions, each step at a time)</span>
                                </h2>
                                <div className="f-row instruction">
                                    <div className="full">
                                        <input type="text" placeholder="Instructions" />
                                    </div>
                                </div>
                            </section>

                            <div className="f-row full">
                                <input
                                    type="submit"
                                    className="button"
                                    id="submitRecipe"
                                    defaultValue="Publish this recipe"
                                />
                            </div>
                        </form>
                    </div>
                </section>
                {/*//content*/}
            </div>
            {/*//row*/}
        </div>

    );
}
