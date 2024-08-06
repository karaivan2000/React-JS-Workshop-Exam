export default function Home() {
    return (
        <main className="main" role="main">
            {/*intro*/}
            <div className="intro">
                <figure className="bg">
                    <img src="images/intro.jpg" alt="" />
                </figure>
                {/*wrap*/}
                <div className="wrap clearfix">
                    {/*row*/}
                    <div className="row">
                        <article className="three-fourth text">
                            <h1>Welcome to SocialChef!</h1>
                            <p>
                                SocialChef is the ultimate <strong>cooking social community</strong>
                                , where recipes come to life. Wanna know what you will gain by
                                joining us? Lorem ipsum dolor sit amet, this is some teaser text.
                            </p>
                            <p>
                                You will win awesome prizes, make new friends and share delicious
                                recipes.{" "}
                            </p>
                            <a href="register.html" className="button white more medium">
                                Join our community <i className="fa fa-chevron-right" />
                            </a>
                            <p>
                                Already a member? Click <a href="login.html">here</a> to login.
                            </p>
                        </article>
                        {/*search recipes widget*/}
                        <div className="one-fourth">
                            <div className="widget container">
                                <div className="textwrap">
                                    <h3>Search for recipes</h3>
                                    <p>
                                        All you need to do is enter an igredient, a dish or a keyword.{" "}
                                    </p>
                                    <p>You can also select a specific category from the dropdown.</p>
                                    <p>There’s sure to be something tempting for you to try.</p>
                                    <p>Enjoy!</p>
                                </div>
                                <form action="find_recipe.html">
                                    <div className="f-row">
                                        <input type="text" placeholder="Enter your search term" />
                                    </div>
                                    <div className="f-row">
                                        <select>
                                            <option>or select a category</option>
                                            <option>Apetizers</option>
                                            <option>Cocktails</option>
                                            <option>Deserts</option>
                                            <option>Main courses</option>
                                            <option>Snacks</option>
                                            <option>Soups</option>
                                        </select>
                                    </div>
                                    <div className="f-row bwrap">
                                        <input type="submit" defaultValue="Start cooking!" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*//search recipes widget*/}
                    </div>
                    {/*//row*/}
                </div>
                {/*//wrap*/}
            </div>
            {/*//intro*/}
            {/*wrap*/}
            <div className="wrap clearfix">
                {/*row*/}
                <div className="row">
                    {/*content*/}
                    <section className="content full-width">
                        <div className="icons dynamic-numbers">
                            <header className="s-title">
                                <h2 className="ribbon large">SocialChef in numbers</h2>
                            </header>
                            {/*row*/}
                            <div className="row">
                                {/*item*/}
                                <div className="one-sixth">
                                    <div className="container">
                                        <i className="icon icon-themeenergy_chef-hat" />
                                        <span className="title dynamic-number" data-dnumber={1730}>
                                            0
                                        </span>
                                        <span className="subtitle">members</span>
                                    </div>
                                </div>
                                {/*//item*/}
                                {/*item*/}
                                <div className="one-sixth">
                                    <div className="container">
                                        <i className="icon icon-themeenergy_pan" />
                                        <span className="title dynamic-number" data-dnumber={1250}>
                                            0
                                        </span>
                                        <span className="subtitle">recipes</span>
                                    </div>
                                </div>
                                {/*//item*/}
                                {/*item*/}
                                <div className="one-sixth">
                                    <div className="container">
                                        <i className="icon icon-themeenergy_image" />
                                        <span className="title dynamic-number" data-dnumber={5300}>
                                            0
                                        </span>
                                        <span className="subtitle">photos</span>
                                    </div>
                                </div>
                                {/*//item*/}
                                {/*item*/}
                                <div className="one-sixth">
                                    <div className="container">
                                        <i className="icon icon-themeenergy_pencil" />
                                        <span className="title dynamic-number" data-dnumber={2300}>
                                            0
                                        </span>
                                        <span className="subtitle">forum posts</span>
                                    </div>
                                </div>
                                {/*//item*/}
                                {/*item*/}
                                <div className="one-sixth">
                                    <div className="container">
                                        <i className="icon icon-themeenergy_chat-bubbles" />
                                        <span className="title dynamic-number" data-dnumber={7400}>
                                            0
                                        </span>
                                        <span className="subtitle">comments</span>
                                    </div>
                                </div>
                                {/*//item*/}
                                {/*item*/}
                                <div className="one-sixth">
                                    <div className="container">
                                        <i className="icon icon-themeenergy_stars" />
                                        <span className="title dynamic-number" data-dnumber={1700}>
                                            0
                                        </span>
                                        <span className="subtitle">articles</span>
                                    </div>
                                </div>
                                {/*//item*/}
                                <div className="cta">
                                    <a href="login.html" className="button big">
                                        Join us!
                                    </a>
                                </div>
                            </div>
                            {/*//row*/}
                        </div>
                    </section>
                    {/*//content*/}
                    {/*content*/}
                    <section className="content three-fourth">
                        {/*cwrap*/}
                        <div className="cwrap">
                            {/*entries*/}
                            <div className="entries row">
                                {/*featured recipe*/}
                                <div className="featured two-third">
                                    <header className="s-title">
                                        <h2 className="ribbon">Recipe of the Day</h2>
                                    </header>
                                    <article className="entry">
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
                                                <a href="recipe.html">Honey Cake</a>
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                                magna aliquam erat volutpat.{" "}
                                            </p>
                                            <div className="actions">
                                                <div>
                                                    <a href="#" className="button">
                                                        See the full recipe
                                                    </a>
                                                    <div className="more">
                                                        <a href="recipes2.html">See past recipes of the day</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/*//featured recipe*/}
                                {/*featured member*/}
                                <div className="featured one-third">
                                    <header className="s-title">
                                        <h2 className="ribbon star">Featured member</h2>
                                    </header>
                                    <article className="entry">
                                        <figure>
                                            <img src="images/avatar.jpg" alt="" />
                                            <figcaption>
                                                <a href="my_profile.html">
                                                    <i className="icon icon-themeenergy_eye2" />{" "}
                                                    <span>View member</span>
                                                </a>
                                            </figcaption>
                                        </figure>
                                        <div className="container">
                                            <h2>
                                                <a href="my_profile.html">Kimberly C.</a>
                                            </h2>
                                            <blockquote>
                                                <i className="fa fa-quote-left" />
                                                Traditional dishes and fine bakery products accompanied by
                                                beautiful photographs to bend around and attract the tryout!
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            </blockquote>
                                            <div className="actions">
                                                <div>
                                                    <a href="#" className="button">
                                                        Check out her recipes
                                                    </a>
                                                    <div className="more">
                                                        <a href="#">See past featured members</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/*//featured member*/}
                            </div>
                            {/*//entries*/}
                        </div>
                        {/*//cwrap*/}
                        {/*cwrap*/}
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
                        {/*//cwrap*/}
                        {/*cwrap*/}
                        <div className="cwrap">
                            <header className="s-title">
                                <h2 className="ribbon bright">Latest articles</h2>
                            </header>
                            {/*entries*/}
                            <div className="entries row">
                                {/*item*/}
                                <div className="entry one-third">
                                    <figure>
                                        <img src="images/img.jpg" alt="" />
                                        <figcaption>
                                            <a href="blog_single.html">
                                                <i className="icon icon-themeenergy_eye2" />{" "}
                                                <span>View post</span>
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <div className="container">
                                        <h2>
                                            <a href="blog_single.html">Barbeque party</a>
                                        </h2>
                                        <div className="actions">
                                            <div>
                                                <div className="date">
                                                    <i className="fa fa-calendar" />
                                                    <a href="#">22 Dec 2014</a>
                                                </div>
                                                <div className="comments">
                                                    <i className="fa fa-comment" />
                                                    <a href="blog_single.html#comments">27</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="excerpt">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet .
                                                . .{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*item*/}
                                {/*item*/}
                                <div className="entry one-third">
                                    <figure>
                                        <img src="images/img.jpg" alt="" />
                                        <figcaption>
                                            <a href="blog_single.html">
                                                <i className="icon icon-themeenergy_eye2" />{" "}
                                                <span>View post</span>
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <div className="container">
                                        <h2>
                                            <a href="blog_single.html">How to make sushi</a>
                                        </h2>
                                        <div className="actions">
                                            <div>
                                                <div className="date">
                                                    <i className="fa fa-calendar" />
                                                    <a href="#">22 Dec 2014</a>
                                                </div>
                                                <div className="comments">
                                                    <i className="fa fa-comment" />
                                                    <a href="blog_single.html#comments">27</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="excerpt">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet .
                                                . .{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*item*/}
                                {/*item*/}
                                <div className="entry one-third">
                                    <figure>
                                        <img src="images/img.jpg" alt="" />
                                        <figcaption>
                                            <a href="blog_single.html">
                                                <i className="icon icon-themeenergy_eye2" />{" "}
                                                <span>View post</span>
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <div className="container">
                                        <h2>
                                            <a href="blog_single.html">Make your own bread</a>
                                        </h2>
                                        <div className="actions">
                                            <div>
                                                <div className="date">
                                                    <i className="fa fa-calendar" />
                                                    <a href="#">22 Dec 2014</a>
                                                </div>
                                                <div className="comments">
                                                    <i className="fa fa-comment" />
                                                    <a href="blog_single.html#comments">27</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="excerpt">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet .
                                                . .{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/*item*/}
                                <div className="quicklinks">
                                    <a href="#" className="button">
                                        More posts
                                    </a>
                                    <a href="javascript:void(0)" className="button scroll-to-top">
                                        Back to top
                                    </a>
                                </div>
                            </div>
                            {/*//entries*/}
                        </div>
                        {/*//cwrap*/}
                    </section>
                    {/*//content*/}
                    {/*right sidebar*/}
                    <aside className="sidebar one-fourth">
                        <div className="widget">
                            <h3>Recipe Categories</h3>
                            <ul className="boxed">
                                <li className="light">
                                    <a href="recipes.html" title="Appetizers">
                                        <i className="icon icon-themeenergy_pasta" />{" "}
                                        <span>Apetizers</span>
                                    </a>
                                </li>
                                <li className="medium">
                                    <a href="recipes.html" title="Cocktails">
                                        <i className="icon icon-themeenergy_margarita2" />{" "}
                                        <span>Cocktails</span>
                                    </a>
                                </li>
                                <li className="dark">
                                    <a href="recipes.html" title="Deserts">
                                        <i className="icon icon-themeenergy_cupcake" />{" "}
                                        <span>Deserts</span>
                                    </a>
                                </li>
                                <li className="medium">
                                    <a href="recipes.html" title="Cocktails">
                                        <i className="icon icon-themeenergy_eggs" /> <span>Eggs</span>
                                    </a>
                                </li>
                                <li className="dark">
                                    <a href="recipes.html" title="Equipment">
                                        <i className="icon icon-themeenergy_blender" />{" "}
                                        <span>Equipment</span>
                                    </a>
                                </li>
                                <li className="light">
                                    <a href="recipes.html" title="Events">
                                        <i className="icon icon-themeenergy_turkey" />{" "}
                                        <span>Events</span>
                                    </a>
                                </li>
                                <li className="dark">
                                    <a href="recipes.html" title="Fish">
                                        <i className="icon icon-themeenergy_fish2" /> <span>Fish</span>
                                    </a>
                                </li>
                                <li className="light">
                                    <a href="recipes.html" title="Ftness">
                                        <i className="icon icon-themeenergy_biceps" />{" "}
                                        <span>Fitness</span>
                                    </a>
                                </li>
                                <li className="medium">
                                    <a href="recipes.html" title="Healthy">
                                        <i className="icon icon-themeenergy_apple2" />{" "}
                                        <span>Healthy</span>
                                    </a>
                                </li>
                                <li className="light">
                                    <a href="recipes.html" title="Asian">
                                        <i className="icon icon-themeenergy_sushi" /> <span>Asian</span>
                                    </a>
                                </li>
                                <li className="medium">
                                    <a href="recipes.html" title="Mexican">
                                        <i className="icon icon-themeenergy_peper" />{" "}
                                        <span>Mexican</span>
                                    </a>
                                </li>
                                <li className="dark">
                                    <a href="recipes.html" title="Pizza">
                                        <i className="icon  icon-themeenergy_pizza-slice" />{" "}
                                        <span>Pizza</span>
                                    </a>
                                </li>
                                <li className="medium">
                                    <a href="recipes.html" title="Kids">
                                        <i className="icon icon-themeenergy_happy" /> <span>Kids</span>
                                    </a>
                                </li>
                                <li className="dark">
                                    <a href="recipes.html" title="Meat">
                                        <i className="icon icon-themeenergy_meat" /> <span>Meat</span>
                                    </a>
                                </li>
                                <li className="light">
                                    <a href="recipes.html" title="Snacks">
                                        <i className="icon icon-themeenergy_fried-potatoes" />{" "}
                                        <span>Snacks</span>
                                    </a>
                                </li>
                                <li className="dark">
                                    <a href="recipes.html" title="Salads">
                                        <i className="icon icon-themeenergy_eggplant" />{" "}
                                        <span>Salads</span>
                                    </a>
                                </li>
                                <li className="light">
                                    <a href="recipes.html" title="Storage">
                                        <i className="icon icon-themeenergy_soup2" /> <span>Soups</span>
                                    </a>
                                </li>
                                <li className="medium">
                                    <a href="recipes.html" title="Vegetarian">
                                        <i className="icon icon-themeenergy_plant-symbol" />{" "}
                                        <span>Vegetarian</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <h3>Tips and tricks</h3>
                            <ul className="articles_latest">
                                <li>
                                    <a href="blog_single.html">
                                        <img src="images/img.jpg" alt="" />
                                        <h6>How to decorate cookies</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="blog_single.html">
                                        <img src="images/img.jpg" alt="" />
                                        <h6>Make your own bread</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="blog_single.html">
                                        <img src="images/img.jpg" alt="" />
                                        <h6>How to make sushi</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="blog_single.html">
                                        <img src="images/img.jpg" alt="" />
                                        <h6>Barbeque party</h6>
                                    </a>
                                </li>
                                <li>
                                    <a href="blog_single.html">
                                        <img src="images/img.jpg" alt="" />
                                        <h6>How to make a cheesecake</h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="widget members">
                            <h3>Our members</h3>
                            <div id="members-list-options" className="item-options">
                                <a href="#">Newest</a>
                                <a className="selected" href="#">
                                    Active
                                </a>
                                <a href="#">Popular</a>
                            </div>
                            <ul className="boxed">
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Kimberly C.</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Alex J.</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Denise M.</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Jason H.</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Jennifer W.</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Anabelle Q.</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Thomas M.</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Michelle S.</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <a href="my_profile.html">
                                            <img src="images/avatar.jpg" alt="" />
                                            <span>Bryan A.</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <h3>Advertisment</h3>
                            <a href="#">
                                <img src="images/advertisment.jpg" alt="" />
                            </a>
                        </div>
                    </aside>
                </div>
                {/*//right sidebar*/}
            </div>
            {/*//wrap*/}
        </main>

    );
}