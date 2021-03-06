const regexps = {
	"bold": [
		/(?<!\\)(\*{2})(?!\*)(.+?)(?<!\\|\*)\*{2}/mg,
		/(?<!\\)(_{2})(?!_)(.+?)(?<!\\|_)_{2}/mg
	],
	"italic": [
		/(?<!\\)(\*{1})(?!\*)(.+?)(?<!\\|\*)\*{1}/mg,
		/(?<!\\)(_{1})(?!_)(.+?)(?<!\\|_)_{1}/mg
	],
	"code": /(?<!\\)(`{1})(?!`)(.+?)(?<!\\|`)`{1}/mg,
	"image": /(?<!\\)!\[(.*?)\s*\]\(\s*(.+?)(?!\\)\)/mg,
	"link": /(?<!\\)\[(.*?)\s*\]\(\s*(.+?)(?!\\)\)/mg,
	"quotes": /^(\>)\s?([^\n]*)$/mg,
	"h1": /^(#{1})\s+(?!\s)(.+)$/mg,
	"h2": /^(#{2})\s+(?!\s)(.+)$/mg,
	"h3": /^(#{3})\s+(?!\s)(.+)$/mg,
	"h4": /^(#{4})\s+(?!\s)(.+)$/mg,
	"h5": /^(#{5})\s+(?!\s)(.+)$/mg,
	"h6": /^(#{6})\s+(?!\s)(.+)$/mg,
	"code_blockquotes": /```([^\n`]*)[^\n\S]*\n((.*?\n)+?)```[^\n\S]*(?!\w)/g,
};

module.exports = regexps;