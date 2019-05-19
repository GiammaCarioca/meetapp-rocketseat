import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;

	label {
		font-weight: bold;
		color: #ffffff;
	}

	input[type='text'] {
		flex: 1;
		width: 320px;
		background: transparent;
		border-style: none;
		margin: 10px 0 30px 0;
		font-size: 20px;
		color: #ffffff;
		opacity: 0.6;

		&.input-active {
			opacity: 1;
		}

		:focus {
			outline: 5px auto #e5556e;
		}
	}
`;
