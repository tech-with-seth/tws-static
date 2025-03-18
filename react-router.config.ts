import type { Config } from '@react-router/dev/config';
import { flatRoutes } from '@react-router/fs-routes';

export default {
    ssr: false,
    async prerender() {
        const routes = await flatRoutes();
        return routes.map((route) => (route.path ? `/${route.path}` : '/'));
    }
} satisfies Config;
