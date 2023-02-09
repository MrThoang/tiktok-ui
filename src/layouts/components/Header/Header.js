import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import {
    InboxIcon,
    MessageIcon,
    QRcodeIcon,
    UserIcon,
    FacebookIcon,
    GoogleIcon,
    TwitterIcon,
    LINEIcon,
    KakaoTalkIcon,
    AppleIcon,
    InstagramIcon,
    CancelIcon,
} from '~/components/Icons';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/image';
import Search from '../Search';
import config from '~/config';
import Modal from '~/components/Modal';
import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = false;
    const [modalIsOpen, setIsOpen] = useState(false);

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@duyen',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get cions',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button simple>
                                <FontAwesomeIcon icon={faPlus} /> Up load
                            </Button>
                            <Tippy content="Messages" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button simple>
                                <FontAwesomeIcon icon={faPlus} /> Up load
                            </Button>
                            <Button primary onClick={openModal}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e5d7d87607b2023a00e85979bf871b80~c5_100x100.jpeg?x-expires=1660813200&x-signature=XhF1bVE7%2FqgQCuNINgpKkGNe5YU%3D"
                                className={cx('user-avatar')}
                                alt="Bui Thi My Duyen"
                                // fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e5d7d87607b2023a00e85979bf871b80~c5_100x100.jpeg?x-expires=1660813200&x-signature=XhF1bVE7%2FqgQCuNINgpKkGNe5YU%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
            <Modal isOpen={modalIsOpen}>
                <div className={cx('login-modal')}>
                    <div className={cx('button-cancel')}>
                        <button onClick={closeModal}>
                            <CancelIcon />
                        </button>
                    </div>
                    <div className={cx('login-container')}>
                        <p className={cx('login-title')}>Log in to TikTok</p>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <QRcodeIcon />
                                </div>
                                <p>Use QR code</p>
                            </div>
                        </a>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <UserIcon />
                                </div>
                                <p>Use phone / email / username</p>
                            </div>
                        </a>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <FacebookIcon />
                                </div>
                                <p>Continue with Facebook</p>
                            </div>
                        </a>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <GoogleIcon />
                                </div>
                                <p>Continue with Google</p>
                            </div>
                        </a>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <TwitterIcon />
                                </div>
                                <p>Continue with Twitter</p>
                            </div>
                        </a>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <LINEIcon />
                                </div>
                                <p>Continue with LINE</p>
                            </div>
                        </a>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <KakaoTalkIcon />
                                </div>
                                <p>Continue with KakaoTalk</p>
                            </div>
                        </a>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <AppleIcon />
                                </div>
                                <p>Continue with Apple</p>
                            </div>
                        </a>
                        <a href="#" className={cx('login-item-box')}>
                            <div className={cx('login-item')}>
                                <div className={cx('login-item-icon')}>
                                    <InstagramIcon />
                                </div>
                                <p>Continue with Instagram</p>
                            </div>
                        </a>
                    </div>
                    <div className={cx('create-account')}>
                        <div> Don’t have an account? </div>
                        <a href="#">
                            <span className={cx('create-account-button')}>Sign up</span>
                        </a>
                    </div>
                </div>
            </Modal>
        </header>
    );
}

export default Header;
