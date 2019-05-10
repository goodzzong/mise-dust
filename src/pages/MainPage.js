import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import MainWrapper from '../components/main/MainWrapper';
import SearchBar from '../components/main/SearchBar';
import AddressInfo from '../components/main/AddressInfo';
import MiseDustInfo from '../components/main/MiseDustInfo';

const MainPage = () => {
	return (
		<div>
			<PageTemplate>
				<MainWrapper>
					<SearchBar />
					<AddressInfo />
					<MiseDustInfo />
				</MainWrapper>
			</PageTemplate>
		</div>
	);
};

export default MainPage;