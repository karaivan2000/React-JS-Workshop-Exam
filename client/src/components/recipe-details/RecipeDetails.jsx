
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

export default function RecipeDetails() {
    return (
        <section className="content three-fourth">
            {/*recipe*/}
            <div className="recipe">
                <div className="row">
                    {/*two-third*/}
                    <article className="two-third">
                        <div className="image">
                            <a href="#">
                                <img src="images/img.jpg" alt="" />
                            </a>
                        </div>
                        <div className="intro">
                            <p>
                                <strong>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                                    dolores et quas
                                </strong>
                            </p>{" "}
                            <p>
                                Molestias excepturi sint occaecati cupiditate non provident,
                                similique sunt in culpa qui officia deserunt mollitia animi, id est
                                laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                expedita distinctio. At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui
                                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
                                harum quidem rerum facilis est et expedita distinctio.
                            </p>
                        </div>
                        <div className="instructions">
                            <ol>
                                <li>
                                    Heat oven to 160C/140C fan/gas 3 and line a 12-hole muffin tin
                                    with cases. Gently melt the butter, chocolate, sugar and 100ml hot
                                    water together in a large saucepan, stirring occasionally, then
                                    set aside to cool a little while you weigh the other ingredients.
                                </li>
                                <li>
                                    Stir the eggs and vanilla into the chocolate mixture. Put the
                                    flour into a large mixing bowl, then stir in the chocolate mixture
                                    until smooth. Spoon into cases until just over three-quarters full
                                    (you may have a little mixture leftover), then set aside for 5
                                    mins before putting on a low shelf in the oven and baking for
                                    20-22 mins. Leave to cool.
                                </li>
                                <li>
                                    For the icing, melt the chocolate in a heatproof bowl over a pan
                                    of barely simmering water. Once melted, turn off the heat, stir in
                                    the double cream and sift in the icing sugar. When spreadable, top
                                    each cake with some and decorate with your favourite sprinkles and
                                    sweets.
                                </li>
                            </ol>
                        </div>
                    </article>
                    {/*//two-third*/}
                    {/*one-third*/}
                    <article className="one-third">
                        <dl className="basic">
                            <dt>Preparation time</dt>
                            <dd>15 mins</dd>
                            <dt>Cooking time</dt>
                            <dd>30 mins</dd>
                            <dt>Difficulty</dt>
                            <dd>easy</dd>
                            <dt>Serves</dt>
                            <dd>4 people</dd>
                        </dl>
                        <dl className="user">
                            <dt>Category</dt>
                            <dd>Deserts</dd>
                            <dt>Posted by</dt>
                            <dd>Jennifer W.</dd>
                        </dl>
                        <dl className="ingredients">
                            <dt>300g</dt>
                            <dd>Self-raising flour</dd>
                            <dt>200g</dt>
                            <dd>Butter</dd>
                            <dt>200g</dt>
                            <dd>Plain chocolate</dd>
                            <dt>2</dt>
                            <dd>Eggs</dd>
                            <dt>1 tbsp</dt>
                            <dd>Vanilla extract</dd>
                            <dt>200 g</dt>
                            <dd>Brown sugar</dd>
                            <dt>100 ml</dt>
                            <dd>Double cream</dd>
                            <dt>handful</dt>
                            <dd>Sprinkles</dd>
                        </dl>
                    </article>
                    <div className="f-row full">
                        <button className="add">Edit</button>
                    </div>
                    <div className="f-row full">
                        <button className="add">Remove</button>
                    </div>
                    <button className="remove">Edit</button> 
                    <button className="remove">Remove</button>
                    {/*//one-third*/}
                </div>
            </div>
            {/*//recipe*/}
            {/*comments*/}
            <div className="comments" id="comments">
                <h2>5 comments </h2>
                <ol className="comment-list">
                    {/*comment*/}
                    <li className="comment depth-1">
                        <div className="avatar">
                            <a href="my_profile.html">
                                <img src="images/avatar.jpg" alt="" />
                            </a>
                        </div>
                        <div className="comment-box">
                            <div className="comment-author meta">
                                <strong>Kimberly C.</strong> said 1 month ago{" "}
                                <a href="#" className="comment-reply-link">
                                    {" "}
                                    Reply
                                </a>
                            </div>
                            <div className="comment-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                    tation.
                                </p>
                            </div>
                        </div>
                    </li>
                    {/*//comment*/}
                    {/*comment*/}
                    <li className="comment depth-1">
                        <div className="avatar">
                            <a href="my_profile.html">
                                <img src="images/avatar.jpg" alt="" />
                            </a>
                        </div>
                        <div className="comment-box">
                            <div className="comment-author meta">
                                <strong>Alex J.</strong> said 1 month ago{" "}
                                <a href="#" className="comment-reply-link">
                                    {" "}
                                    Reply
                                </a>
                            </div>
                            <div className="comment-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                    tation.
                                </p>
                            </div>
                        </div>
                    </li>
                    {/*//comment*/}
                    {/*comment*/}
                    <li className="comment depth-2">
                        <div className="avatar">
                            <a href="my_profile.html">
                                <img src="images/avatar.jpg" alt="" />
                            </a>
                        </div>
                        <div className="comment-box">
                            <div className="comment-author meta">
                                <strong>Kimberly C.</strong> said 1 month ago{" "}
                                <a href="#" className="comment-reply-link">
                                    {" "}
                                    Reply
                                </a>
                            </div>
                            <div className="comment-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                    tation.
                                </p>
                            </div>
                        </div>
                    </li>
                    {/*//comment*/}
                    {/*comment*/}
                    <li className="comment depth-3">
                        <div className="avatar">
                            <a href="my_profile.html">
                                <img src="images/avatar.jpg" alt="" />
                            </a>
                        </div>
                        <div className="comment-box">
                            <div className="comment-author meta">
                                <strong>Alex J.</strong> said 1 month ago{" "}
                                <a href="#" className="comment-reply-link">
                                    {" "}
                                    Reply
                                </a>
                            </div>
                            <div className="comment-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                    tation.
                                </p>
                            </div>
                        </div>
                    </li>
                    {/*//comment*/}
                    {/*comment*/}
                    <li className="comment depth-1">
                        <div className="avatar">
                            <a href="my_profile.html">
                                <img src="images/avatar.jpg" alt="" />
                            </a>
                        </div>
                        <div className="comment-box">
                            <div className="comment-author meta">
                                <strong>Denise M.</strong> said 1 month ago{" "}
                                <a href="#" className="comment-reply-link">
                                    {" "}
                                    Reply
                                </a>
                            </div>
                            <div className="comment-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                    erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                    tation.
                                </p>
                            </div>
                        </div>
                    </li>
                    {/*//comment*/}
                </ol>
            </div>
            {/*//comments*/}
        </section>

    );
}

