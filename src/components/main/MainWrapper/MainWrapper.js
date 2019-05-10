import React from 'react';
import styles from './MainWrapper.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const mainWrapper = ({children}) => {
	return (
		<div className={cx('main-wrapper')}>
			{children}
		</div>
	);
};

export default mainWrapper;