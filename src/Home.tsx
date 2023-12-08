import { Title, Image } from "@mantine/core";
import "./index.css";
import React from "react";
function Home() {
	return (
		<div className='ml-0'>
			<Image radius='md' src='Perago.jpg' />
			<Title order={1}>Perago systems</Title>
			<Title order={2}>Employee management system</Title>
			<p>
				Perago Systems is a technology company that focuses on developing and
				implementing electronic government and B2B commerce solutions towards
				the provision of various online transactional services. Perago provides
				strong technical support and knowledge transfer to sustain the
				competitive advantages gained by customers from their ICT investments.
				Distinctio repellendus ipsa qui quidem eum quaerat tenetur temporibus
				asperiores nam quia, nisi tempore et, voluptatibus quasi itaque corrupti
				quo iusto assumenda sunt nesciunt vitae omnis similique est. Animi quis
				iusto esse deleniti harum minus placeat, suscipit maiores et explicabo
				quisquam, expedita sit omnis ratione repellendus? Odio quas provident
				voluptatibus a suscipit natus non maiores maxime ex.
			</p>
		</div>
	);
}

export default Home;
