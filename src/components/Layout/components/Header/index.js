import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/SearchAccountItem';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a
                        data-e2e="tiktok-logo"
                        style={{ position: 'relative' }}
                        href="/"
                        className={cx('link-logo')}
                        aria-label="Go to TikTok For You feed"
                    >
                        <img src={images.logo} alt="Logo Tiktok" />
                        <strong>Tiktok</strong>
                    </a>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <ul className={cx('search-result-list')}>
                                    <div className={cx('search-title')}>Accounts</div>
                                    <li className={cx('search-result-item')}>
                                        <AccountItem />
                                    </li>
                                    <li className={cx('search-result-item')}>
                                        <AccountItem />
                                    </li>
                                    <li className={cx('search-result-item')}>
                                        <AccountItem />
                                    </li>
                                </ul>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <form className={cx('search-input')}>
                            <input
                                className={cx('input-element')}
                                placeholder="Search accounts and videos"
                                spellCheck={false}
                            />
                            <div className={cx('clear-input-btn')}>
                                <svg
                                    width="16"
                                    data-e2e=""
                                    height="16"
                                    viewBox="0 0 48 48"
                                    fill="rgba(22, 24, 35, .34)"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ margin: '0 12px' }}
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"
                                    ></path>
                                </svg>
                            </div>
                            <span className={cx('span-spliter')}></span>

                            <button type="button" className={cx('search-btn')}>
                                <div className={cx('search-icon-container')}>
                                    <svg
                                        width="24"
                                        data-e2e=""
                                        height="24"
                                        viewBox="0 0 48 48"
                                        fill="rgba(22, 24, 35, .34)"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                            <div className={cx('input-border')}></div>
                        </form>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button upload to="/upload">
                        <div className={cx('btn-upload')}>
                            <svg
                                className={cx('upload-icon-plus')}
                                width="1em"
                                data-e2e=""
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
                                ></path>
                            </svg>
                            <span className={cx('upload-text')}>Upload</span>
                        </div>
                    </Button>
                    <Button primary>Login</Button>
                    <Button getapp>Get app</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
