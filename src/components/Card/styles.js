import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`text-decoration: none;`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 280px;
	border-radius: 5px;
	margin-right: 20px;
	background-color: #ffffff;

	&:last-child {
		margin-right: 0;
	}

	img {
		width: 100%;
		height: 110px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		background-color: green;
	}

	div.wrapper-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20px;
	}

	h2 {
		font-size: 16px;
		font-weight: bold;
		color: #222222;
	}

	small {
		color: #999999;
	}

	.wrapper-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		min-width: 40px;
		min-height: 40px;
		border-radius: 100%;
		background-color: #e5556e;
		color: #ffffff;
	}
`;
