const { public_class } = require("../env");

const templates = {
	"bold": `<em classs="${public_class} blod">{{content}}</em>`,
	"italic": `<i class="${public_class} italic">{{content}}</i>`,
	"code": `<span class="${public_class} code">{{content}}</span>`,
	"image": `<img class="${public_class} image" src="{{url}}" alt="{{alt}}"/>`,
	"link": `<a class="${public_class} link" href="{{url}}">{{content}}</a>`,
	"quotes": `<p class="${public_class} quotes">{{content}}</p>`,
	"h1": `<h1 class="${public_class} h1">{{content}}</h1>`,
	"h2": `<h2 class="${public_class} h2">{{content}}</h2>`,
	"h3": `<h3 class="${public_class} h3">{{content}}</h3>`,
	"h4": `<h4 class="${public_class} h4">{{content}}</h4>`,
	"h5": `<h5 class="${public_class} h5">{{content}}</h5>`,
	"h6": `<h6 class="${public_class} h6">{{content}}</h6>`,
	"code_blockquotes": `<textarea class="${public_class} code_blockquotes" data-lang="{{lang}}">{{content}}</textarea>`
};

module.exports = templates;