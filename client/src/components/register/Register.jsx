export default function Register() {
    return (
        <section className="content center full-width">
            <div className="modal container">
                <h3>Register</h3>
                <div className="f-row">
                    <input type="email" placeholder="Your email" />
                </div>
                <div className="f-row">
                    <input type="password" placeholder="Your password" />
                </div>
                <div className="f-row">
                    <input type="password" placeholder="Retype password" />
                </div>
                <div className="f-row bwrap">
                    <input type="submit" defaultValue="register" />
                </div>
                <p>
                    Already have an account yet? <a href="/login">Log in.</a>
                </p>
            </div>
        </section>

    );
}