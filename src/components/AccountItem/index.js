import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Account.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/3422e8cdf9778378d2fd2e065d34a3d0~c5_300x300.webp?x-expires=1676898000&x-signature=Dy39J7wqUkO00gUfKRsqDDcZx0c%3D"
                alt="Trường"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Mỹ Linh</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('username')}>linhcute</span>
            </div>
        </div>
    );
}

export default AccountItem;
