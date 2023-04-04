class CssStyle {
	constructor(name, styles) {
		this.name = name;
		this.styles = styles;
	}

	getCode() {
		let styleCode = `.${this.name} {`;
		for (let [key, value] of Object.entries(this.styles)) {
			styleCode += `  ${key}: ${value};`;
		}
		styleCode += `}`;
		return styleCode;
	}
}

class HtmlElement {
	constructor(tags, attrs = {}, children = []) {
		this.tags = tags;
		this.attrs = attrs;
		this.children = children;
	}

	getCode() {
		let elementCode = `<${this.tags}`;
		for (let [key, value] of Object.entries(this.attrs)) {
			elementCode += ` ${key}="${value}"`;
		}
		elementCode += '>';
		for (let child of this.children) {
			if (typeof child === 'string') {
				elementCode += child;
			} else {
				elementCode += child.getCode();
			}
			elementCode += '';
		}
		elementCode += `</${this.tags}>`;
		return elementCode;
	}
}

class HtmlBlock {
	constructor(rootElement, cssClasses = []) {
		this.rootElement = rootElement;
		this.cssClasses = cssClasses;
	}

	getCode() {
		let htmlCode = '<style>';
		for (let cssClass of this.cssClasses) {
			htmlCode += cssClass.getCode();
		}
		htmlCode += '</style>';
		htmlCode += this.rootElement.getCode();
		return htmlCode;
	}

	addToPage() {
		document.write(this.getCode());
	}
}


const cssClasses = [
	new CssStyle('wrap', { display: 'flex' }),
	new CssStyle('block', { width: '300px', margin: '10px' }),
	new CssStyle('img', { width: '100%' }),
	new CssStyle('text', { 'text-align': 'justify' }),

];

const rootElement = new HtmlElement('div', { id: 'wrapper', class: 'wrap' }, [
	new HtmlElement('div', { class: 'block' }, [
		new HtmlElement('h3', {}, ['lorem lorem lorem lorem']),
		new HtmlElement('img', { class: 'img', src: 'Lipsum.jpg', alt: 'Lorem Ipsum' }, []),
		new HtmlElement(
			'p',
			{ class: 'text' },
			[
				'"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
				"industry's standard dummy text ever since the , when an unknown printer took a galley of type and",
				'scrambled it to make a type specimen book. ',
				new HtmlElement('a', { href: 'https://www.lipsum.com/', target: '_blank' }, 'More...'),
			],
		),
	]),
	new HtmlElement('div', { class: 'block' }, [
		new HtmlElement('h3', {}, ['lorem lorem lorem lorem']),
		new HtmlElement('img', { class: 'img', src: 'Lipsum.jpg', alt: 'Lorem Ipsum' }, []),
		new HtmlElement(
			'p',
			{ class: 'text' },
			[
				'"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
				"industry's standard dummy text ever since the , when an unknown printer took a galley of type and",
				'scrambled it to make a type specimen book. ',
				new HtmlElement('a', { href: 'https://www.lipsum.com/', target: '_blank' }, 'More...'),
			],
		),
	]),
]);

const htmlBlock = new HtmlBlock(rootElement, cssClasses);
htmlBlock.addToPage();

const container = document.createElement('div');
container.innerHTML = htmlBlock.getCode();
document.body.appendChild(container);