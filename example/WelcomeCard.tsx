import { JSX, Builder, loadImage, FontFactory, Font } from "canvacord";

/** @jsx JSX.createElement */
/** @jsxFrag JSX.Fragment */

export default class WelcomeCard extends Builder {
	constructor(width = 930, height = 280) {
		super(width, height);
		this.bootstrap({
			displayName: "",
			type: "welcome",
			avatar: "",
			message: "",
		});

		if (!FontFactory.size) Font.loadDefault();
	}

	setDisplayName(value: string) {
		this.options.set("displayName", value);
		return this;
	}

	setType(value: "welcome" | "goodbye") {
		this.options.set("type", value);
		return this;
	}

	setAvatar(value: string) {
		this.options.set("avatar", value);
		return this;
	}

	setMessage(value: string) {
		this.options.set("message", value);
		return this;
	}

	async render() {
		const { type, displayName, avatar, message } = this.options.getOptions();

		const image = await loadImage(avatar);

		return (
			<img className='h-full w-full bg-[#23272A] rounded-xl flex items-center'>
				<div className='flex items-center px-10'>
					<img
						src={image.toDataURL()}
						className='w-[96] h-[96] rounded-full'
					/>

					<div className='flex flex-col ml-8'>
						<h1 className='text-white text-5xl font-bold'>
							{type === "welcome" ? "Welcome" : "Goodbye"}, <span className='text-blue-400'>{displayName}</span>
						</h1>

						<p className='text-gray-300 text-3xl mt-2'>{message}</p>
					</div>
				</div>
			</img>
		);
	}
}
