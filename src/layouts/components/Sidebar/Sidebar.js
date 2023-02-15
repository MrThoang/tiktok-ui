import { useState, useEffect } from 'react';
import className from 'classnames/bind';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import * as userService from '~/services/userService';
import Discover from '~/components/Discover';

const cx = className.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [perPage, setPerPage] = useState(PER_PAGE);

    const onSeeAll = () => {
        setPerPage(20);
    };

    const onSeeLess = () => {
        setPerPage(5);
    };

    useEffect(() => {
        userService
            .getSuggested({ page: INIT_PAGE, perPage: perPage })
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((error) => console.log(error));
    }, [perPage]);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts
                label="Suggested accounts"
                data={suggestedUsers}
                onSeeAll={onSeeAll}
                onSeeLess={onSeeLess}
            />
            {/* <SuggestedAccounts label="Following accounts" /> */}
            <Discover label="Discover" />
        </aside>
    );
}

export default Sidebar;
