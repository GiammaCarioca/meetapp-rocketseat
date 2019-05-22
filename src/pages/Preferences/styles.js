import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
`;

export const Logo = styled.h1`
	img {
		margin: 0;
		width: 35px;
		height: 35px;
	}
`;

export const Wrapper = styled.div`
	margin: auto;
	display: flex;
	flex-direction: column;
	max-width: 315px;
	padding-top: 50px;

	span {
		font-family: Helvetica-Bold;
		font-size: 24px;
		color: #ffffff;
		text-align: left;
		margin-bottom: 14px;
	}

	p {
		opacity: 0.8;
		font-family: Helvetica;
		font-size: 16px;
		color: #ffffff;
		line-height: 28px;
		text-align: left;
	}
`;
