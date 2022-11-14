import React from 'react'
import styled from '@emotion/styled'

const ButtonStyled = styled.button`
	background: ${({ background }) => background ? background : '#004477'} ;
	width: 100%;
	height: ${({ height }) => height ? height : '50px'};
	max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '200px'};
	border-radius: 5px;
	color: #fff;
	cursor: pointer;
	font: 1.4rem "Tahoma";
	font-weight: 400;
	margin: 0;
	text-align: center;
	text-transform: uppercase;
	border:none;
	transition: all 0.2s ease-in-out;
	white-space: nowrap;
	&:hover {
		background: #000;
	}
`

export const Button = ({ children = 'Lorem Ipsum', background, linked }) => (
	linked
		?
		<a href={linked}><ButtonStyled background={background}>{children}</ButtonStyled></a>
		:
		<ButtonStyled background={background}>{children}</ButtonStyled>
)


