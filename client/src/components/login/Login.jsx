export default function Login() {
    return (
        <section className="content center full-width">
            <div className="modal container">
                <h3>Login</h3>
                <div className="f-row">
                    <input type="text" placeholder="Your username" />
                </div>
                <div className="f-row">
                    <input type="password" placeholder="Your password" />
                </div>
                <div className="f-row">
                    <input type="checkbox" />
                    <label>Remember me next time</label>
                </div>
                <div className="f-row bwrap">
                    <input type="submit" defaultValue="login" />
                </div>
                <p>
                    <a href="#">Forgotten password?</a>
                </p>
                <p>
                    Dont have an account yet? <a href="register.html">Sign up.</a>
                </p>
            </div>
        </section>

    );
}