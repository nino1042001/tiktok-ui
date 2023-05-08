import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <a className={cx('personal-link')} href="/">
                <div className={cx('avatar')}>
                    <img
                        className={cx('avatar-img')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1683705600&x-signature=ChomDxQMFsLs1Kyrtf5f8skqn5E%3D"
                        alt="Ảnh cá nhân"
                    />
                </div>
                <div className={cx('infor')}>
                    <div className={cx('username')}>
                        <span className={cx('user-title')}>Nguyen Van A</span>
                        <div className={cx('icon-blue-primary')}>
                            <svg
                                className={cx('icon-blue-primary-svg')}
                                width="14"
                                data-e2e=""
                                height="14"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <p className={cx('user-desc')}>nguyenvana</p>
                </div>
            </a>
        </div>
    );
}

export default AccountItem;
