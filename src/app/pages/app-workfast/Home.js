import styled from "styled-components";

const Imagen = styled.img`
	width: 100%;
	margin: auto;
	user-select: none;
`;
const Home = () => {
	return (
		<Imagen
			src="https://hotmart.com/javax.faces.resource/images/share_image.png.xhtml"
			alt="hotmart-analytics"
		/>
	);
};

export default Home;
