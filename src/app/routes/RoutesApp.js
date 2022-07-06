import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Configuracion, Home, Perfil, Preparate } from "../pages";

const Container = styled.main`
	padding: 60px var(--padding-global-x);
`;

const RoutesApp = () => {
	return (
		<Container>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="perfil" element={<Perfil />} />
					<Route path="contenido" element={<Preparate />} />
					<Route path="configuracion" element={<Configuracion />} />
				</Route>
				<Route path="*" element={<h1>Error 404</h1>} />
			</Routes>
		</Container>
	);
};

export default RoutesApp;
