const replacers = require("./lib/replacers.js");

// 解析顺序
const sequence = [
	"bold",
	"italic",
	"code",
	"image",
	"link",
	"quotes",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"code_blockquotes"
]

// AST解析器
function parseAST(markdown) {
	sequence.forEach(name => markdown = replacers[name](markdown));
	return markdown
}
// module.exports = parseAST;

let markdown = `
# Hello Yesifang

## Hello China

### Hello Beautiful

你可以访问这个官网站：[yesifang.com](https://yesifang.com)，里面有许多干货。
*斜体字体*，**加粗字体**，***又斜体又加粗字体***。

\`\`\`javascript

funciton sayHello() {
	console.log("Hello World"); // 这是代码块内容
}
\`\`\`

> 
> Hello World
> 这是引用块内容
> HHHHH
> 

`;

require("fs").writeFileSync(__dirname + "index.html", parseAST(markdown), "utf8");