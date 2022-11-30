import { Outlet,Link} from "react-router-dom";

export default function Root() {
    return (
        <>
            <header className='header'>
                <Link className="logo" to="/">home</Link>
                <nav>
                    <Link to="/new">new</Link>
                    <a href="https://github.com/shranik19" target="_blank">github</a>
                    <Link to="/about">about</Link>
                </nav>
            </header>

            <div className="container">
            <Outlet  />

            </div>




        </>
    );
}