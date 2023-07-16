//layout
import { HeaderOnly } from '~/components/Layout';

import HomePage from '~/pages/Home';
import Following from '~/pages/Following';
//public routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
