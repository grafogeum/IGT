import React from 'react'
import styled from '@emotion/styled'
import { Button } from './Button'

const CardStyled = styled.div`
	background: ${({ background }) => background ? background : '#e3e3e3'} ;
	width: 100%;
	max-height: ${({ height }) => height ? height : '350px'};
	max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '500px'};
	border: 1px solid #000;
	border-radius: 5px;
	color: #000;
	cursor: pointer;
	font: 1.4rem "Tahoma";
	font-weight: 400;
	margin: 0 auto;
	padding: 0 1rem;
	padding-bottom: 3rem;
	text-align: center;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;
`

const CardParagraphStyled = styled.p`
	padding: 0.2rem;
	font: 1rem "Tahoma";
	margin:0;
`

const CardHeaderStyled = styled.h2`
	padding: 1rem;
	font: 1.4rem "Tahoma";
	margin:0;
`

const CardImageStyle = {
	width: "100%",
	height: "100%",
}

export const Card = ({ title = 'lorem ipsum', content = 'lorem content', image = '', linked, withBtn, children }) => (
	<CardStyled>
		<CardHeaderStyled>{title}</CardHeaderStyled>
		<CardParagraphStyled>{content}</CardParagraphStyled>
		{image && <img style={CardImageStyle} src={image} alt={title}
			onError={({ currentTarget }) => {
				currentTarget.onerror = null;
				currentTarget.src = image[0];
			}}
		/>
		}
		{(linked || withBtn) && <Button linked={linked} />}
		{children}
	</CardStyled>
)

