/// <reference path="../src/index.d.ts" />

import { shallow, ShallowWrapper } from 'enzyme'

import { ExtendMap } from "../src/index";
import * as React from 'react'

expect.extend(ExtendMap)

describe("example test wrapper", () => {
	it("example test", () => {
		const html: ShallowWrapper = shallow(<div className="hello" />)

		expect(html).toBeElement(<div className="world"></div>)
	})
})