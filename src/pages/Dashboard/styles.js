import styled from 'styled-components';

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	margin-left: 20px;
	margin-right: 20px;

	.wrapper-section {
		display: flex;
		flex-direction: column;
		max-width: 910px;
		width: 100%;
		margin-bottom: 30px;

		h3 {
			margin-bottom: 20px;
			font-weight: bold;
			color: #ffffff;
		}

		.group-cards {
			display: flex;
			justify-content: space-between;
		}
	}
`;
