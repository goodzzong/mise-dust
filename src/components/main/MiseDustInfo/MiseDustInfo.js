import React from 'react';
import styles from './MiseDustInfo.scss';
import classNames from 'classnames/bind';
import smile from '../../../images/SmileReRe.png'
const cx = classNames.bind(styles);

const MiseDustInfo = () => {
	return (
		<div className={cx('mise-dust-info')}>
			<div className="mise-dust">
				<img src={smile} alt="" />
				<div className={cx('date')}>
					2019-05-10 12:30 AM
				</div>

				<div className={cx('mise-data')}>
					<div className={cx('mise-item')}>28㎍/㎥(1h)</div>
					<div className={cx('mise-item')}>30㎍/㎥(24h)</div>
				</div>
			</div>
		</div>
	);
};

export default MiseDustInfo;