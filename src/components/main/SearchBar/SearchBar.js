import React from 'react';
import styles from './SearchBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SearchBar = () => {
	return (
			<div>
				<div className={cx('search-info')}>
					<div className={cx('search-contents')}>
						미세먼지 현황이 궁금한 지역의 주소를 입력해주세요.	
					</div>
				</div>
				<div className={cx('search-bar')}>
					<input type="text" placeholder="Search..."/>
				</div>
			</div>
	);
};

export default SearchBar;