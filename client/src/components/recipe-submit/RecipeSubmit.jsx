export default function RecipeSubmit() {
    return (
        <div className="wrap clearfix">
            {/*breadcrumbs*/}
            <div className="wrap clearfix">
            {/*breadcrumbs*/}
            <nav className="breadcrumbs">

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
                                        <label htmlFor="rec-title">Recipe title:</label>
                                        <input type="text" name="title" placeholder="Recipe title" />
                                    </div>
                                </div>


                                <div className="f-row">
                                    <div className="third">
                                        <label htmlFor="game-img">Image:</label>
                                        <input type="text" placeholder="Upload a photo..." />
                                    </div>
                                    <div className="third">
                                        <label htmlFor="cooking-time">Cooking time:</label>
                                        <input type="text" name="cooking" placeholder="Cooking time" />
                                    </div>
                                    <div className="third">
                                        <label htmlFor="category">Category:</label>
                                        <input type="text" name="category" placeholder="Enter recipe category..." />
                                    </div>


                                </div>
                                <div className="f-row">
                                    <div className="third">
                                        <label htmlFor="category">Serves how many people:</label>
                                        <input type="text" name="people" placeholder="Serves how many people?" />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h2>Description</h2>
                                <div className="f-row">
                                    <div className="full">
                                        <textarea name="description" placeholder="Description" defaultValue={""} />
                                    </div>
                                </div>

                            </section>
                            <section>
                                <h2>Ingredients</h2>
                                <div className="f-row ingredient">
                                    <div className="large">
                                        <input type="text" name="ingredient" placeholder="Ingredient" />
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
                                        <input type="text" name="instructions" placeholder="Instructions" />
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

        </div>

    );
}
