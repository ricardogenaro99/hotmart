import { FaCog, FaVideo } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";
import styled from "styled-components";
import { device } from "../../utils/Breakpoints";
import NavLinkComponent from "./NavLinkComponent";

const Container = styled.aside`
	background: var(--color-purple);
	width: var(--max-width-aside);
	position: relative;
	z-index: 1000;
	top: 0;
	display: flex;
	justify-content: center;
	> div {
		position: fixed;
		height: 100%;
		width: 100%;
		max-width: var(--max-width-aside);
		box-shadow: rgb(0 0 0 / 15%) 4px var(--height-header) 8px 0px;
		> section {
			display: grid;
			padding: 15px;
			gap: 8px;

			.logo {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 30px 0;
			}
		}
	}

	.logo {
		img {
			width: 100%;
			object-fit: cover;
		}
	}

	* {
		color: var(--color-white);
	}

	@media ${device.tabletS} {
		width: var(--min-width-aside);
		> div {
			max-width: calc(var(--min-width-aside) - 6px);
			> section {
				padding: 10px 0;
			}
		}
	}
`;

const sizeIconTech = 25;

const Aside = () => {
	return (
		<Container>
			<div>
				<section>
					<div className="logo">
						<img
							src="https://www.blogylana.com/wp-content/uploads/2021/06/logo-hotmart.png"
							alt="Logo"
						/>
					</div>
					<NavLinkComponent
						name="Dashboard"
						icon={<SiSpeedtest size={sizeIconTech} />}
					/>
					<NavLinkComponent
						path="contenido"
						name="Contenido"
						icon={<FaVideo size={sizeIconTech} />}
					/>
					<NavLinkComponent
						path="configuracion"
						name="Configuracion"
						icon={<FaCog size={sizeIconTech} />}
					/>
				</section>
			</div>
		</Container>
	);
};

export default Aside;
