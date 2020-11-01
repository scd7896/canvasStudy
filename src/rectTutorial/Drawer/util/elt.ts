function elt(name: string, attributes: any, ...args: any) {
	const node = document.createElement(name);
	if (attributes) {
		for (const attr in attributes) {
			if (attributes.hasOwnProperty(attr)) {
				node.setAttribute(attr, attributes[attr]);
			}
		}
	}
	for (let i = 0; i < args.length; i++) {
		let child = args[i];

		if (typeof child === "string") {
			child = document.createTextNode(child);
		}
		node.appendChild(child);
	}
	return node;
}

export default elt;
