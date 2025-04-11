import { Link } from 'react-router';
import { Button } from '~/components/ui/button';

export default function AboutRoute() {
    return (
        <>
            <p>{'Hello about route'}</p>
            <Button asChild>
                <Link to="/">Home</Link>
            </Button>
        </>
    );
}
