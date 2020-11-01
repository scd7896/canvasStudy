class ColorInput {
	private static instance: ColorInput;
	public colorInput: HTMLInputElement;
	private constructor() {}
	public static get Instance() {
		return this.instance || (this.instance = new this());
	}
}

export default ColorInput.Instance;
