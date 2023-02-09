//Layout
import { HeaderOnly } from '~/layouts';
import config from '~/config';

//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
// import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import React, { lazy } from 'react';

const Profile = lazy(() => import('~/pages/Profile'));

//Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.live,
        component: Live,
    },
];

const privaterRoutes = [];

export { privaterRoutes, publicRoutes };
