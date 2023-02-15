import classNames from 'classnames/bind';
import { HashTagIcon, MusicNoteIcon } from '~/components/Icons';
import PropTypes from 'prop-types';

import styles from './Discover.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Discover({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <HashTagIcon /> <p className={cx('item')}>moimoimoi</p>
                </div>
            </Link>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <MusicNoteIcon /> <p className={cx('item')}>moimoimoi</p>
                </div>
            </Link>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <MusicNoteIcon /> <p className={cx('item')}>moimoimoimoimoimoi</p>
                </div>
            </Link>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <MusicNoteIcon /> <p className={cx('item')}>moimoimoi</p>
                </div>
            </Link>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <MusicNoteIcon /> <p className={cx('item')}>moimoimoi</p>
                </div>
            </Link>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <MusicNoteIcon /> <p className={cx('item')}>moimoimoimoimoimoimoimoimoi</p>
                </div>
            </Link>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <HashTagIcon /> <p className={cx('item')}>moimoimoi</p>
                </div>
            </Link>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <HashTagIcon /> <p className={cx('item')}>moimoimoi</p>
                </div>
            </Link>
            <Link to={'#'} className={cx('content-box')}>
                <div className={cx('content')}>
                    <HashTagIcon /> <p className={cx('item')}>moimoimoimoimoimoimoimoimoimoimoimoi</p>
                </div>
            </Link>
        </div>
    );
}

Discover.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Discover;
