import styled from 'styled-components';

export const Card = styled.div`
	width: 290px;
	background-color: #ffffff;
	border-radius: 5px;
	margin-right: 20px;

	&:last-child {
		margin-right: 0;
	}

	img {
		width: 100%;
		min-height: 110px;
		margin: 0;
		padding: 0;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}

	div.card-text {
		display: flex;
		text-align: left;
		justify-content: space-between;
		align-items: center;
		margin: 0 20px;
	}

	h2 {
		font-family: Helvetica-Bold;
		font-size: 16px;
		color: #222222;
		text-align: left;
	}

	small {
		font-family: Helvetica;
		font-size: 14px;
		color: #999999;
		text-align: left;
	}

	i {
		background-color: #e5556e;
		width: 24px;
		height: 24px;
		text-align: center;
		padding: 8px;
		margin: 0;
		border-radius: 100%;
	}
`;
