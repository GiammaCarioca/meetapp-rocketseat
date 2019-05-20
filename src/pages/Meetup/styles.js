import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 910px;
	margin: 40px auto;

	img {
		width: 100%;
		height: 360px;
	}

	article {
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 315px;
		margin: 30px auto 0 auto;
	}

	h3 {
		font-weight: bold;
		font-size: 24px;
		color: #ffffff;
		opacity: 0.8;
	}

	small {
		color: #999999;
		margin-bottom: 20px;
	}

	.description {
		margin-bottom: 30px;
		line-height: 28px;
		color: #ffffff;
		opacity: 0.6;
	}

	address {
		opacity: 0.8;
		font-size: 14px;
		color: #ffffff;
		line-height: 24px;
	}
`;
