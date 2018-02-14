abstract class Result {
	public message: () => string
	public pass: boolean

	constructor(msg: string, res: boolean) {
		this.message = () => msg
		this.pass = res
	}
}

export class Success extends Result {
	constructor(msg?: string) {
		super(msg || "", true)
	}
}

export class Failed extends Result {
	constructor(msg: string) {
		super(msg, false)
	}
}