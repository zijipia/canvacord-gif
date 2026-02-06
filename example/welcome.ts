import fs from "fs";
import path from "path";
import { GifRenderer } from "../src";
import WelcomeCard from "./WelcomeCard";

(async () => {
	const renderer = new GifRenderer({
		workers: 4,
		background: path.join(__dirname, "bg.gif"),
		delay: 120,
	});

	console.time("render");

	const buffer = await renderer.render({
		template: path.join(__dirname, "WelcomeCard"),
		props: {
			avatar: "https://cdn.discordapp.com/avatars/1005716197259612193/a_a5edfffd377c12de479af9139b26eb5d.gif?size=1024",
			displayName: "Ziji",
			type: "welcome",
			message: "to canvacord-gif-renderer!",
		},
		width: 930,
		height: 280,
	});

	console.timeEnd("render");

	fs.writeFileSync("welcome.gif", buffer);
	console.log("✅ Rendered: welcome.gif");

	await renderer.close();
})();
