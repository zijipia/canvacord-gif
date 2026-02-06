export interface RenderPayload<T = any> {
	template: string;
	props: T;
	width: number;
	height: number;
}

export interface RendererOptions {
	workers?: number;
	background: string;
	delay?: number;
}
