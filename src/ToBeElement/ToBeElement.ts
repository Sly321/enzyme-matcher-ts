import { Failed, Success } from '../Results/Results'
import { ShallowWrapper } from 'enzyme';

function ToBeElement(this: jest.MatcherUtils, given: ShallowWrapper, wanted: JSX.Element) {
	const result = given.equals(wanted)

	if (!result) {
		const expected = this.utils.printExpected(wanted)
		const received = this.utils.printReceived(given.debug())

		return new Failed(`Received\n${received}\nbut expected\n${expected}`)
	}

	return new Success()
}

export default ToBeElement