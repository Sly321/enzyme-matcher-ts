import ToBeElement from "./ToBeElement/ToBeElement"

interface ExpectExtendMap {
	[key: string]: (this: jest.MatcherUtils, received: any, ...actual: any[]) => { message(): string, pass: boolean };
}

export const ExtendMap: ExpectExtendMap = {
	toBeElement: ToBeElement
}