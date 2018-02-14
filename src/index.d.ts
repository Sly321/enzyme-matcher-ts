/// <reference types="jest" />

declare module jest {
	export interface Matchers<R> {
		toBeElement(expected: JSX.Element): Matchers<R>
	}
}
