import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 910px;
	margin: 0 auto 40px auto;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	max-width: 320px;

	label {
		margin-top: 40px;
		font-weight: bold;
		color: #ffffff;
	}

	input {
		width: 320px;
		background: transparent;
		border-style: none;
		margin-top: 10px;
		font-size: 20px;
		color: #ffffff;
		opacity: 0.6;

		:focus {
			outline: 5px auto #e5556e;
		}
	}

	.upload-image {
		display: flex;
		align-items: center;
		margin-top: 10px;
		width: 315px;
		height: 85px;
		border: dashed 1px rgba(255, 255, 255, 0.8);
	}

	i {
		color: #ffffff;
		opacity: 0.6;
	}
`;
