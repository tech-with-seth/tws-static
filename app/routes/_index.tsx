import { Link } from 'react-router';

export default function HomeRoute() {
    return (
        <>
            <p>{'Hello home route'}</p>
            <p>
                <Link to="about">About</Link>
            </p>
        </>
    );
}
