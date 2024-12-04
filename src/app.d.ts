// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '$env/dynamic/private' {
	export const OPENAI_API_KEY: string;
}

declare module '$env/static/public' {
	export const PUBLIC_ENABLE_AI: string;
}

export {};