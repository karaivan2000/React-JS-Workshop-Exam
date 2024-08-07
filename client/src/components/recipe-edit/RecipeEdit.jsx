export default function RecipeEdit() {
    return(
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
                            <h2>Basics</h2>
                            <p>All fields are required.</p>
                            <div className="f-row">
                                <div className="full">
                                    <input type="text" placeholder="Recipe title" />
                                </div>
                            </div>
                            <div className="f-row">
                                <div className="third">
                                    <input type="text" placeholder="Preparation time" />
                                </div>
                                <div className="third">
                                    <input type="text" placeholder="Cooking time" />
                                </div>
                                <div className="third">
                                    <input type="text" placeholder="Difficulty" />
                                </div>
                            </div>
                            <div className="f-row">
                                <div className="third">
                                    <input type="text" placeholder="Serves how many people?" />
                                </div>
                                <div className="third">
                                <label htmlFor="category">Category:</label>
                                <input
                                  type="text"
                                  id="category"
                                  name="category"
                                  placeholder="Enter recipe category..."
                                />
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
                                <div className="small">
                                    <input type="text" placeholder="Quantity" />
                                </div>
                                <button className="remove">Remove</button>
                            </div>
                            <div className="f-row full">
                                <button className="add">Add an ingredient</button>
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
                                <button className="remove">-</button>
                            </div>
                            <div className="f-row full">
                                <button className="add">Add a step</button>
                            </div>
                        </section>
                        <section>
                            <h2>Photo</h2>
                            <div className="f-row full">
                                <input type="file" />
                            </div>
                        </section>
                        <section>
                            <h2>
                                Status{" "}
                                <span>
                                    (would you like to further edit this recipe or are you ready to
                                    publish it?)
                                </span>
                            </h2>
                            <div className="f-row full">
                                <input type="radio" id="r1" name="radio" />
                                <label htmlFor="r1">I am still working on it</label>
                            </div>
                            <div className="f-row full">
                                <input type="radio" id="r2" name="radio" />
                                <label htmlFor="r2">I am ready to publish this recipe</label>
                            </div>
                        </section>
                        <div className="f-row full">
                            <input
                                type="submit"
                                className="button"
                                id="editRecipe"
                                defaultValue="Edit this recipe"
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