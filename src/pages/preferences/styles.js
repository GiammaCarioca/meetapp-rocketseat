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

export const Fieldset = styled.fieldset`
	margin-top: 30px;
	padding-left: 10px;
	border: none;
	font-weight: bold;
	color: #ffffff;

	legend {
		margin-left: -10px;
		margin-bottom: 10px;
	}

	div.checkbox-wrapper {
		margin-top: 10px;
	}

	div.checkbox-wrapper input[type='checkbox'] {
		opacity: 0;
	}

	div.checkbox-wrapper label {
		position: relative;
		margin-left: 10px;
		font-size: 18px;
	}

	div.checkbox-wrapper label::before {
		content: '';
		display: inline-block;
		height: 18px;
		width: 18px;
		border-radius: 5px;
		background-color: #524c56;
	}

	div.checkbox-wrapper label::after {
		content: '';
		display: inline-block;
		height: 18px;
		width: 18px;
		border-radius: 5px;
		background-color: #e5556e;
	}

	div.checkbox-wrapper label::before,
	div.checkbox-wrapper label::after {
		position: absolute;
		margin-top: 0px;
	}

	div.checkbox-wrapper label::before {
		left: -28px;
	}
	div.checkbox-wrapper label::after {
		left: -28px;
	}

	/*unchecked*/
	div.checkbox-wrapper input[type='checkbox'] + label::after {
		content: none;
	}
	/*checked*/
	div.checkbox-wrapper input[type='checkbox']:checked + label::after {
		content: '';
	}

	/*adding focus styles on the outer-box of the fake checkbox*/
	div.checkbox-wrapper input[type='checkbox']:focus + label::before {
		outline: rgb(229, 85, 110) auto 5px;
	}
`;
