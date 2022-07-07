import styled from "styled-components";
import { SectionTitle } from "../../shared/templates";
import { device } from "../../shared/utils/Breakpoints";

const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-template-rows: 1fr;
	grid-auto-rows: 1fr;
	gap: 25px;

	* {
		width: 100%;
		height: 235px;
	}

	@media ${device.mobileL} {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
`;

const ContainerRelativeAbsolute = styled.div`
	position: relative;
	cursor: pointer;
	iframe,
	&::after,
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	&::after,
	&::before {
		content: "";
		background-color: #0006;
	}
`;
const ListOfLists = ({ title, lists }) => {
	const handleClick = () => {
		const res = window.confirm("¿Desea comprar este contenido?");
		if (res) {
			const targetURL =
				"https://www.paypal.com/paypalme/ricardogenaro?locale.x=es_XC";
			const newURL = document.createElement("a");
			newURL.target = "_blank";
			newURL.rel = "noopener noreferrer";
			newURL.href = targetURL;
			newURL.click();
		}
	};

	return (
		<SectionTitle title={title}>
			<Container>
				{lists.map((list, i) => (
					<ContainerRelativeAbsolute key={i} onClick={handleClick}>
						<iframe
							src={list.src}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</ContainerRelativeAbsolute>
				))}
			</Container>
		</SectionTitle>
	);
};

export default ListOfLists;
