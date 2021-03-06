(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{436:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"postcss-value-parser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss-value-parser"}},[t._v("#")]),t._v(" postcss-value-parser")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://travis-ci.org/TrySound/postcss-value-parser",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/TrySound/postcss-value-parser.svg",alt:"Travis CI"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Transforms CSS declaration values and at-rule parameters into a tree of nodes, and provides a simple traversal API.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" valueParser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postcss-value-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cssBackgroundValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url(foo.png) no-repeat 40px 73%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parsedValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueParser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cssBackgroundValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parsedValue exposes an API described below,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.g. parsedValue.walk(..), parsedValue.toString(), etc.")]),t._v("\n")])])]),a("p",[t._v("For example, parsing the value "),a("code",[t._v("rgba(233, 45, 66, .5)")]),t._v(" will return the following:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'233'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'45'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'66'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.5'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If you wanted to convert each "),a("code",[t._v("rgba()")]),t._v(" value in "),a("code",[t._v("sourceCSS")]),t._v(" to a hex value, you could do so like this:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" valueParser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postcss-value-parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueParser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sourceCSS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// walk() will visit all the of the nodes in the tree,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// invoking the callback for each.")]),t._v("\nparsed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("walk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Since we only want to transform rgba() values,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we can ignore anything else.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We can make an array of the rgba() arguments to feed to a")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// convertToHex() function")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [233, 45, 66, .5]")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now we will transform the existing rgba() function node")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// into a word node with the hex value")]),t._v("\n  node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("convertToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nparsed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #E92D42")]),t._v("\n")])])]),a("h2",{attrs:{id:"nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[t._v("#")]),t._v(" Nodes")]),t._v(" "),a("p",[t._v("Each node is an object with these common properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("type")]),t._v(": The type of node ("),a("code",[t._v("word")]),t._v(", "),a("code",[t._v("string")]),t._v(", "),a("code",[t._v("div")]),t._v(", "),a("code",[t._v("space")]),t._v(", "),a("code",[t._v("comment")]),t._v(", or "),a("code",[t._v("function")]),t._v(").\nEach type is documented below.")]),t._v(" "),a("li",[a("strong",[t._v("value")]),t._v(": Each node has a "),a("code",[t._v("value")]),t._v(" property; but what exactly "),a("code",[t._v("value")]),t._v(" means\nis specific to the node type. Details are documented for each type below.")]),t._v(" "),a("li",[a("strong",[t._v("sourceIndex")]),t._v(": The starting index of the node within the original source\nstring. For example, given the source string "),a("code",[t._v("10px 20px")]),t._v(", the "),a("code",[t._v("word")]),t._v(" node\nwhose value is "),a("code",[t._v("20px")]),t._v(" will have a "),a("code",[t._v("sourceIndex")]),t._v(" of "),a("code",[t._v("5")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"word"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#word"}},[t._v("#")]),t._v(" word")]),t._v(" "),a("p",[t._v("The catch-all node type that includes keywords (e.g. "),a("code",[t._v("no-repeat")]),t._v("),\nquantities (e.g. "),a("code",[t._v("20px")]),t._v(", "),a("code",[t._v("75%")]),t._v(", "),a("code",[t._v("1.5")]),t._v("), and hex colors (e.g. "),a("code",[t._v("#e6e6e6")]),t._v(").")]),t._v(" "),a("p",[t._v("Node-specific properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("value")]),t._v(': The "word" itself.')])]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" string")]),t._v(" "),a("p",[t._v("A quoted string value, e.g. "),a("code",[t._v('"something"')]),t._v(" in "),a("code",[t._v('content: "something";')]),t._v(".")]),t._v(" "),a("p",[t._v("Node-specific properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("value")]),t._v(": The text content of the string.")]),t._v(" "),a("li",[a("strong",[t._v("quote")]),t._v(": The quotation mark surrounding the string, either "),a("code",[t._v('"')]),t._v(" or "),a("code",[t._v("'")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("unclosed")]),t._v(": "),a("code",[t._v("true")]),t._v(" if the string was not closed properly. e.g. "),a("code",[t._v('"unclosed string')]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"div"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#div"}},[t._v("#")]),t._v(" div")]),t._v(" "),a("p",[t._v("A divider, for example")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(",")]),t._v(" in "),a("code",[t._v("animation-duration: 1s, 2s, 3s")])]),t._v(" "),a("li",[a("code",[t._v("/")]),t._v(" in "),a("code",[t._v("border-radius: 10px / 23px")])]),t._v(" "),a("li",[a("code",[t._v(":")]),t._v(" in "),a("code",[t._v("(min-width: 700px)")])])]),t._v(" "),a("p",[t._v("Node-specific properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("value")]),t._v(": The divider character. Either "),a("code",[t._v(",")]),t._v(", "),a("code",[t._v("/")]),t._v(", or "),a("code",[t._v(":")]),t._v(" (see examples above).")]),t._v(" "),a("li",[a("strong",[t._v("before")]),t._v(": Whitespace before the divider.")]),t._v(" "),a("li",[a("strong",[t._v("after")]),t._v(": Whitespace after the divider.")])]),t._v(" "),a("h3",{attrs:{id:"space"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#space"}},[t._v("#")]),t._v(" space")]),t._v(" "),a("p",[t._v("Whitespace used as a separator, e.g. "),a("code"),t._v(" occurring twice in "),a("code",[t._v("border: 1px solid black;")]),t._v(".")]),t._v(" "),a("p",[t._v("Node-specific properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("value")]),t._v(": The whitespace itself.")])]),t._v(" "),a("h3",{attrs:{id:"comment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comment"}},[t._v("#")]),t._v(" comment")]),t._v(" "),a("p",[t._v("A CSS comment starts with "),a("code",[t._v("/*")]),t._v(" and ends with "),a("code",[t._v("*/")])]),t._v(" "),a("p",[t._v("Node-specific properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("value")]),t._v(": The comment value without "),a("code",[t._v("/*")]),t._v(" and "),a("code",[t._v("*/")])]),t._v(" "),a("li",[a("strong",[t._v("unclosed")]),t._v(": "),a("code",[t._v("true")]),t._v(" if the comment was not closed properly. e.g. "),a("code",[t._v("/* comment without an end")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" function")]),t._v(" "),a("p",[t._v("A CSS function, e.g. "),a("code",[t._v("rgb(0,0,0)")]),t._v(" or "),a("code",[t._v("url(foo.bar)")]),t._v(".")]),t._v(" "),a("p",[t._v("Function nodes have nodes nested within them: the function arguments.")]),t._v(" "),a("p",[t._v("Additional properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("value")]),t._v(": The name of the function, e.g. "),a("code",[t._v("rgb")]),t._v(" in "),a("code",[t._v("rgb(0,0,0)")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("before")]),t._v(": Whitespace after the opening parenthesis and before the first argument,\ne.g. "),a("code"),t._v(" in "),a("code",[t._v("rgb( 0,0,0)")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("after")]),t._v(": Whitespace before the closing parenthesis and after the last argument,\ne.g. "),a("code"),t._v(" in "),a("code",[t._v("rgb(0,0,0 )")]),t._v(".")]),t._v(" "),a("li",[a("strong",[t._v("nodes")]),t._v(": More nodes representing the arguments to the function.")]),t._v(" "),a("li",[a("strong",[t._v("unclosed")]),t._v(": "),a("code",[t._v("true")]),t._v(" if the parentheses was not closed properly. e.g. "),a("code",[t._v("( unclosed-function")]),t._v(".")])]),t._v(" "),a("p",[t._v("Media features surrounded by parentheses are considered functions with an\nempty value. For example, "),a("code",[t._v("(min-width: 700px)")]),t._v(" parses to these nodes:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    nodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'min-width'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'700px'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[a("code",[t._v("url()")]),t._v(" functions can be parsed a little bit differently depending on\nwhether the first character in the argument is a quotation mark.")]),t._v(" "),a("p",[a("code",[t._v("url( /gfx/img/bg.jpg )")]),t._v(" parses to:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'word'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/gfx/img/bg.jpg'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v('url( "/gfx/img/bg.jpg" )')]),t._v(", on the other hand, parses to:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" after"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/gfx/img/bg.jpg'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"unicode-range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicode-range"}},[t._v("#")]),t._v(" unicode-range")]),t._v(" "),a("p",[t._v("The unicode-range CSS descriptor sets the specific range of characters to be\nused from a font defined by @font-face and made available\nfor use on the current page ("),a("code",[t._v("unicode-range: U+0025-00FF")]),t._v(").")]),t._v(" "),a("p",[t._v("Node-specific properties:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("value")]),t._v(': The "unicode-range" itself.')])]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var valueParser = require('postcss-value-parser');\n")])])]),a("h3",{attrs:{id:"valueparser-unit-quantity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valueparser-unit-quantity"}},[t._v("#")]),t._v(" valueParser.unit(quantity)")]),t._v(" "),a("p",[t._v("Parses "),a("code",[t._v("quantity")]),t._v(", distinguishing the number from the unit. Returns an object like the following:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Given 2rem")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rem'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("If the "),a("code",[t._v("quantity")]),t._v(" argument cannot be parsed as a number, returns "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("p",[a("em",[t._v("This function does not parse complete values")]),t._v(": you cannot pass it "),a("code",[t._v("1px solid black")]),t._v(" and expect "),a("code",[t._v("px")]),t._v(" as\nthe unit. Instead, you should pass it single quantities only. Parse "),a("code",[t._v("1px solid black")]),t._v(", then pass it\nthe stringified "),a("code",[t._v("1px")]),t._v(" node (a "),a("code",[t._v("word")]),t._v(" node) to parse the number and unit.")]),t._v(" "),a("h3",{attrs:{id:"valueparser-stringify-nodes-custom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valueparser-stringify-nodes-custom"}},[t._v("#")]),t._v(" valueParser.stringify(nodes[, custom])")]),t._v(" "),a("p",[t._v("Stringifies a node or array of nodes.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("custom")]),t._v(" function is called for each "),a("code",[t._v("node")]),t._v("; return a string to override the default behaviour.")]),t._v(" "),a("h3",{attrs:{id:"valueparser-walk-nodes-callback-bubble"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#valueparser-walk-nodes-callback-bubble"}},[t._v("#")]),t._v(" valueParser.walk(nodes, callback[, bubble])")]),t._v(" "),a("p",[t._v("Walks each provided node, recursively walking all descendent nodes within functions.")]),t._v(" "),a("p",[t._v("Returning "),a("code",[t._v("false")]),t._v(" in the "),a("code",[t._v("callback")]),t._v(" will prevent traversal of descendent nodes (within functions).\nYou can use this feature to for shallow iteration, walking over only the "),a("em",[t._v("immediate")]),t._v(" children.\n"),a("em",[t._v("Note: This only applies if "),a("code",[t._v("bubble")]),t._v(" is "),a("code",[t._v("false")]),t._v(" (which is the default).")])]),t._v(" "),a("p",[t._v("By default, the tree is walked from the outermost node inwards.\nTo reverse the direction, pass "),a("code",[t._v("true")]),t._v(" for the "),a("code",[t._v("bubble")]),t._v(" argument.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("callback")]),t._v(" is invoked with three arguments: "),a("code",[t._v("callback(node, index, nodes)")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("node")]),t._v(": The current node.")]),t._v(" "),a("li",[a("code",[t._v("index")]),t._v(": The index of the current node.")]),t._v(" "),a("li",[a("code",[t._v("nodes")]),t._v(": The complete nodes array passed to "),a("code",[t._v("walk()")]),t._v(".")])]),t._v(" "),a("p",[t._v("Returns the "),a("code",[t._v("valueParser")]),t._v(" instance.")]),t._v(" "),a("h3",{attrs:{id:"var-parsed-valueparser-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-parsed-valueparser-value"}},[t._v("#")]),t._v(" var parsed = valueParser(value)")]),t._v(" "),a("p",[t._v("Returns the parsed node tree.")]),t._v(" "),a("h3",{attrs:{id:"parsed-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsed-nodes"}},[t._v("#")]),t._v(" parsed.nodes")]),t._v(" "),a("p",[t._v("The array of nodes.")]),t._v(" "),a("h3",{attrs:{id:"parsed-tostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsed-tostring"}},[t._v("#")]),t._v(" parsed.toString()")]),t._v(" "),a("p",[t._v("Stringifies the node tree.")]),t._v(" "),a("h3",{attrs:{id:"parsed-walk-callback-bubble"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsed-walk-callback-bubble"}},[t._v("#")]),t._v(" parsed.walk(callback[, bubble])")]),t._v(" "),a("p",[t._v("Walks each node inside "),a("code",[t._v("parsed.nodes")]),t._v(". See the documentation for "),a("code",[t._v("valueParser.walk()")]),t._v(" above.")]),t._v(" "),a("h1",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("MIT © "),a("a",{attrs:{href:"mailto:trysound@yandex.ru"}},[t._v("Bogdan Chadkin")])])])}),[],!1,null,null,null);s.default=n.exports}}]);