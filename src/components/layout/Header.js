// Add scripts here

/** Style-sheet **/
import styled from 'styled-components'

/*
	These are default styles you can over-ride them according to need of your project.
*/

// Header
const HeaderWapper = styled.header`
	width: 100%;
	height: 100px;
	border-top: 1px solid #eaeaea;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Header = () => (
	<>
		<HeaderWapper>
			<h2 style={{ marginRight: '1rem' }}>Logo</h2>
			<h1>Menu</h1>
		</HeaderWapper>
	</>
)

export default Header
