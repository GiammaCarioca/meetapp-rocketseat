import styled from 'styled-components';

export const Search = styled.div`
	display: flex;
	width: 100%;
	max-width: 910px;
	height: 40px;
	border-radius: 5px;
	margin-bottom: 30px;
	background-color: #2f2d38;

	form {
		display: flex;
		align-items: center;
		margin-left: 10px;
	}

	i,
	input {
		color: #8e8e93;
	}

	input {
		margin: 25px 10px;
		background: transparent;
		border-style: none;
		font-size: 20px;

		:focus {
			outline: 5px auto #e5556e;
		}
	}
`;
