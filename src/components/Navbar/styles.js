import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	justify-content: space-between;
	background-color: #e5556e;

	div.nav-links {
		display: flex;
		align-items: center;
	}

	img {
		width: 24px;
		height: 24px;
		margin: 25px 0 25px 30px;
	}

	div.profile {
		margin: 25px 30px 25px 0px;
	}

	i {
		width: 24px;
		height: 24px;
	}

	a {
		color: #ffffff;
		font-weight: bold;
		margin: 25px 0 25px 30px;
		text-decoration: none;

		:focus {
			outline: 5px auto #ffffff;
		}
	}
`;
