const regexps = require("./regexps.js");
const templates = require("./templates.js");


function replacer(name, caps = ["symbol", "content"]) {
	return function (text) {
		let reg = regexps[name];
		let template = templates[name];
		if (reg instanceof Array) {
			reg = reg.find(reg => reg.test(text));
		}
		if (reg) {
			let result = text.replace(reg, function (all, ...args) {
				return caps.reduce((o, cap, j) => o.replace(new RegExp(`\{\{\s*${cap}\s*\}\}`, "g"), args[j].trim()), template);
			});
			return result;
		} else {
			return text;
		}
	}
}

const replacers = {
	"bold": replacer("bold"),
	"italic": replacer("italic"),
	"code": replacer("code"),
	"image": replacer("image", ["alt", "url"]),
	"link": replacer("link", ["content", "url"]),
	"quotes": replacer("quotes"),
	"h1": replacer("h1"),
	"h2": replacer("h2"),
	"h3": replacer("h3"),
	"h4": replacer("h4"),
	"h5": replacer("h5"),
	"h6": replacer("h6"),
	"code_blockquotes": replacer("code_blockquotes", ["lang", "content"])
}

module.exports = replacers;