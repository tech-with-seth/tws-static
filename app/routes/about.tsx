import { Link } from 'react-router';

export default function AboutRoute() {
    return (
        <>
            <p>{'Hello about route'}</p>
            <p>
                <Link to="/">Home</Link>
            </p>
        </>
    );
}
