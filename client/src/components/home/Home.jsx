export default function Home() {
    return (
        <main className="main" role="main">

            <div className="intro">
                <figure className="bg">
                    <img src="images/intro.jpg" alt="" />
                </figure>

                <div className="wrap clearfix">

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
                    </div>

                </div>

            </div>

            <div className="wrap clearfix">

                <div className="row">

                    <section className="content three-fourth">

                        <div className="cwrap">
                            <header className="s-title">
                                <h2 className="ribbon bright">Latest recipes</h2>
                            </header>
                            {/*entries*/}
                            <div className="entries row">



                                {/* Display paragraph: If there is no games  */}
                                
                                <h1 id="no-recipes">No recipes yet</h1>
                                
                                

                            </div>
                            {/*//entries*/}
                        </div>
                    </section>
                </div>

            </div>
            {/*//wrap*/}
        </main>

    );
}