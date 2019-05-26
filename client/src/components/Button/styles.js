import styled, { css } from 'styled-components';

export const Container = styled.button`
	width: 320px;
	height: 50px;
	border-style: none;
	border-radius: 50px;
	background-color: #e5556e;
	margin-top: 30px;
	font-family: Helvetica-Bold;
	font-size: 16px;
	color: #ffffff;
	text-transform: uppercase;
	text-align: center;

	:focus {
		outline: 5px auto #e5556e;
	}

	&:hover {
		background-color: #ffffff;
		color: #e5556e;
	}

	${props => props.secondary
		&& css`
			background-color: transparent;
			opacity: 0.6;
			margin-top: 0;
			font-family: Helvetica;
			text-transform: none;

			&:hover {
				background-color: transparent;
				color: #e5556e;
			}
		`};
`;
