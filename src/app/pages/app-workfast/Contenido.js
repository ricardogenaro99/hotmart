import { useEffect } from "react";
import ListOfLists from "../../components/contenido/ListOfLists";
import { useAuth } from "../../contexts/authContext";
import { ContainerGapDefault } from "../../shared/templates";

const listOfLists = [
	{
		title: "Concina",
		lists: [
			{
				src: "https://www.youtube.com/embed/p_5NQlrtVY0",
			},
			{
				src: "https://www.youtube.com/embed/buJVfumoqTA",
			},
			{
				src: "https://www.youtube.com/embed/r420JvYq9CU",
			},
			{
				src: "https://www.youtube.com/embed/1Z4NpsDCRtI",
			},
		],
	},
	{
		title: "Mejora tu habilidad profesional",
		lists: [
			{
				src: "https://www.youtube.com/embed/videoseries?list=PLLPkqUAMHNwnowUPOo8clEtz_icAgM9aw",
			},
			{
				src: "https://www.youtube.com/embed/videoseries?list=PLE44opjBi_0nI2-jKykyTMjopkPpBBQwT",
			},
			{
				src: "https://www.youtube.com/embed/videoseries?list=PLwl8A8OYjiPh4vKcfebIIuTGEX8CviXyT",
			},
			{
				src: "https://www.youtube.com/embed/videoseries?list=PLvxlBA9PTQxjn2r_cHuxphEvw6pfH2tqq",
			},
			{
				src: "https://www.youtube.com/embed/videoseries?list=PL-pMjtey1HE--B-hH6pgpcNUhki6nM8B5",
			},
			{
				src: "https://www.youtube.com/embed/videoseries?list=PLkoPQy8tAwnCnMQNionII0GnlCwFwKeBf",
			},
		],
	},
];
const Contenido = () => {
	const { setLoading } = useAuth();

	useEffect(() => {
		setLoading(true);
		const idTime = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(idTime);
	}, [setLoading]);

	return (
		<ContainerGapDefault>
			{listOfLists.map((lists, i) => (
				<ListOfLists key={i} title={lists.title} lists={lists.lists} />
			))}
		</ContainerGapDefault>
	);
};

export default Contenido;
