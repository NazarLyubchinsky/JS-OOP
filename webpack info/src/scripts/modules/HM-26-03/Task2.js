class HtmlElement {
	constructor(tagName, isSelfClosing = false, textContent = '') {
		this.tagName = tagName;
		this.isSelfClosing = isSelfClosing;
		this.textContent = textContent;
		this.attributes = [];
		this.styles = [];
		this.children = [];
	}

	setAttribute(name, value) {
		this.attributes.push({ name, value });
	}

	setStyle(name, value) {
		this.styles.push({ name, value });
	}

	addChild(child) {
		this.children.push(child);
	}

	addChildToBeginning(child) {
		this.children.unshift(child);
	}

	getHtml() {
		let html = `<${this.tagName}`;


		this.attributes.forEach(({ name, value }) => {
			html += ` ${name}="${value}"`;
		});


		if (this.styles.length > 0) {
			html += ' style="';
			this.styles.forEach(({ name, value }) => {
				html += `${name}:${value};`;
			});
			html += '"';
		}

		if (this.isSelfClosing) {
			html += ' />';
		} else {
			html += `>${this.textContent}`;

			this.children.forEach((child) => {
				html += child.getHtml();
			});

			html += `</${this.tagName}>`;
		}

		return html;
	}
}

let wrapper = new HtmlElement('div', false);
wrapper.setAttribute('id', 'wrapper');
wrapper.setStyle('display', 'flex');

let content = new HtmlElement('div', false);
content.setStyle('width', '300px');
content.setStyle('margin', '10px');

let title = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
content.addChild(title);

let image = new HtmlElement('img', true);
image.setAttribute('src', 'lipsum.jpg');
image.setAttribute('alt', 'Lorem Ipsum');
image.setStyle('width', '100%');
content.addChild(image);

let text = new HtmlElement('p', false, '"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."');
text.setStyle('text-align', 'justify');
content.addChild(text);

let link = new HtmlElement('a', false, 'More...');
link.setAttribute('href', 'https://www.lipsum.com/');
link.setAttribute('target', '_blank');
text.addChild(link);

wrapper.addChild(content);

let content2 = content;
wrapper.addChild(content2);

let wrapperElement = document.createElement('div');
wrapperElement.innerHTML = wrapper.getHtml();

document.body.appendChild(wrapperElement);