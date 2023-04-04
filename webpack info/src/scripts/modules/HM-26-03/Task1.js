export class Circle {
	constructor(radius) {
		this._radius = radius;
	}

	get radius() {
		return this._radius;
	}

	set radius(value) {
		if (value <= 0) {
			throw new Error('Радіус має бути додатним числом');
		}
		this._radius = value;
	}

	get diameter() {
		return this.radius * 2;
	}

	get area() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	get length() {
		return 2 * Math.PI * this.radius;
	}
}




