// Add scripts here

/** Style-sheet **/
import styled from 'styled-components'

/*
	These are default styles you can over-ride them according to need of your project.
*/

// Footer
const FooterWapper = styled.footer`
	width: 100%;
	height: 100px;
	border-top: 1px solid #eaeaea;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Footer = () => {
	return (
		<>
			<FooterWapper>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Copyright Techtroy 2021
				</a>
			</FooterWapper>
		</>
	)
}

export default Footer
