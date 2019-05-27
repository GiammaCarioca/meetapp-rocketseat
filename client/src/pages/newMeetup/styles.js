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

	label,
	span {
		margin-top: 40px;
		font-weight: bold;
		color: #ffffff;
	}

	input[type='text'] {
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

	textarea {
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
`;

export const File = styled.div`
	margin-top: 10px;
	border: dashed 1px rgba(255, 255, 255, 0.8);

	label {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 315px;
		height: 85px;
		margin-top: 0;
		cursor: pointer;
	}

	[type='file'] {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		overflow: hidden;
		padding: 0;
		position: absolute !important;
		white-space: nowrap;
		width: 1px;
	}

	i {
		color: #ffffff;
		opacity: 0.6;
		cursor: pointer;
	}
`;
