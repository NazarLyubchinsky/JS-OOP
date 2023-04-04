export class CssClass {
	constructor(CssClassName) {
		this.CssClassName = CssClassName;
		this.styles = {};
	}

	setStyle(property, value) {
		this.styles[property] = value;
	}

	removeStyle(property) {
		delete this.styles[property];
	}

	getCss() {
		let css = `.${this.CssClassName} {\n`;
		for (const [property, value] of Object.entries(this.styles)) {
			css += `  ${property}: ${value};\n`;
		}
		css += `}`;
		return css;
	}
}
