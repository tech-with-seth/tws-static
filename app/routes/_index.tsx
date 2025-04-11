import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { Switch } from '~/components/ui/switch';

export default function HomeRoute() {
    return (
        <>
            <p>{'Hello home route'}</p>
            <Button asChild>
                <Link to="about">About</Link>
            </Button>
            <div className="flex gap-4 p-4">
                <Switch />
                <Switch />
                <Switch />
                <Switch />
            </div>
        </>
    );
}
