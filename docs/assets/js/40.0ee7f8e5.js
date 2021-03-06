(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{407:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"big-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#big-js"}},[e._v("#")]),e._v(" big.js")]),e._v(" "),s("p",[s("strong",[e._v("A small, fast JavaScript library for arbitrary-precision decimal arithmetic.")])]),e._v(" "),s("p",[e._v("The little sister to "),s("a",{attrs:{href:"https://github.com/MikeMcl/bignumber.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bignumber.js"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://github.com/MikeMcl/decimal.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("decimal.js"),s("OutboundLink")],1),e._v(". See "),s("a",{attrs:{href:"https://github.com/MikeMcl/big.js/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(" for some notes on the difference between them.")]),e._v(" "),s("h2",{attrs:{id:"features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),s("ul",[s("li",[e._v("Faster, smaller and easier-to-use than JavaScript versions of Java's BigDecimal")]),e._v(" "),s("li",[e._v("Only 5.9 KB minified and 2.7 KB gzipped")]),e._v(" "),s("li",[e._v("Simple API")]),e._v(" "),s("li",[e._v("Replicates the "),s("code",[e._v("toExponential")]),e._v(", "),s("code",[e._v("toFixed")]),e._v(" and "),s("code",[e._v("toPrecision")]),e._v(" methods of JavaScript's Number type")]),e._v(" "),s("li",[e._v("Includes a "),s("code",[e._v("sqrt")]),e._v(" method")]),e._v(" "),s("li",[e._v("Stores values in an accessible decimal floating point format")]),e._v(" "),s("li",[e._v("No dependencies")]),e._v(" "),s("li",[e._v("Comprehensive "),s("a",{attrs:{href:"http://mikemcl.github.io/big.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),s("OutboundLink")],1),e._v(" and test set")])]),e._v(" "),s("h2",{attrs:{id:"set-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[e._v("#")]),e._v(" Set up")]),e._v(" "),s("p",[e._v("The library is the single JavaScript file "),s("em",[e._v("big.js")]),e._v(" (or "),s("em",[e._v("big.min.js")]),e._v(", which is "),s("em",[e._v("big.js")]),e._v(" minified).")]),e._v(" "),s("p",[e._v("Browser:")]),e._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("script")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")]),e._v("path/to/big.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),s("p",[s("a",{attrs:{href:"http://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" big.js\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Big "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'big.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("ES6 module:")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Big "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'big.mjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[e._v("#")]),e._v(" Use")]),e._v(" "),s("p",[s("em",[e._v("In all examples below, "),s("code",[e._v("var")]),e._v(", semicolons and "),s("code",[e._v("toString")]),e._v(" calls are not shown. If a commented-out value is in quotes it means "),s("code",[e._v("toString")]),e._v(" has been called on the preceding expression.")])]),e._v(" "),s("p",[e._v("The library exports a single function, "),s("code",[e._v("Big")]),e._v(", the constructor of Big number instances.\nIt accepts a value of type number, string or Big number object.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("x = new Big(123.4567)\ny = Big('123456.7e-3')             // 'new' is optional\nz = new Big(x)\nx.eq(y) && x.eq(z) && y.eq(z)      // true\n")])])]),s("p",[e._v("A Big number is immutable in the sense that it is not changed by its methods.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('0.3 - 0.1                          // 0.19999999999999998\nx = new Big(0.3)\nx.minus(0.1)                       // "0.2"\nx                                  // "0.3"\n')])])]),s("p",[e._v("The methods that return a Big number can be chained.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("x.div(y).plus(z).times(9).minus('1.234567801234567e+8').plus(976.54321).div('2598.11772')\nx.sqrt().div(y).pow(3).gt(y.mod(z))    // true\n")])])]),s("p",[e._v("Like JavaScript's Number type, there are "),s("code",[e._v("toExponential")]),e._v(", "),s("code",[e._v("toFixed")]),e._v(" and "),s("code",[e._v("toPrecision")]),e._v(" methods.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('x = new Big(255.5)\nx.toExponential(5)                 // "2.55500e+2"\nx.toFixed(5)                       // "255.50000"\nx.toPrecision(5)                   // "255.50"\n')])])]),s("p",[e._v("The arithmetic methods always return the exact result except "),s("code",[e._v("div")]),e._v(", "),s("code",[e._v("sqrt")]),e._v(" and "),s("code",[e._v("pow")]),e._v("\n(with negative exponent), as these methods involve division.")]),e._v(" "),s("p",[e._v("The maximum number of decimal places and the rounding mode used to round the results of these methods is determined by the value of the "),s("code",[e._v("DP")]),e._v(" and "),s("code",[e._v("RM")]),e._v(" properties of the "),s("code",[e._v("Big")]),e._v(" number constructor.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('Big.DP = 10\nBig.RM = 1\n\nx = new Big(2);\ny = new Big(3);\nz = x.div(y)                       // "0.6666666667"\nz.sqrt()                           // "0.8164965809"\nz.pow(-3)                          // "3.3749999995"\nz.times(z)                         // "0.44444444448888888889"\nz.times(z).round(10)               // "0.4444444445"\n')])])]),s("p",[e._v("Multiple Big number constructors can be created, each with an independent configuration.")]),e._v(" "),s("p",[e._v("The value of a Big number is stored in a decimal floating point format in terms of a coefficient, exponent and sign.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("x = new Big(-123.456);\nx.c                                // [1,2,3,4,5,6]    coefficient (i.e. significand)\nx.e                                // 2                exponent\nx.s                                // -1               sign\n")])])]),s("p",[e._v("For further information see the "),s("a",{attrs:{href:"http://mikemcl.github.io/big.js/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),s("OutboundLink")],1),e._v(" reference from the "),s("em",[e._v("doc")]),e._v(" folder.")]),e._v(" "),s("h2",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" Test")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("test")]),e._v(" directory contains the test scripts for each Big number method.")]),e._v(" "),s("p",[e._v("The tests can be run with Node.js or a browser.")]),e._v(" "),s("p",[e._v("To run all the tests")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ npm test\n")])])]),s("p",[e._v("To test a single method")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ node test/toFixed\n")])])]),s("p",[e._v("For the browser, see "),s("em",[e._v("single-test.html")]),e._v(" and "),s("em",[e._v("every-test.html")]),e._v(" in the "),s("em",[e._v("test/browser")]),e._v(" directory.")]),e._v(" "),s("p",[s("em",[e._v("big-vs-number.html")]),e._v(" is a simple application that enables some of the methods of big.js to be compared with those of JavaScript's Number type.")]),e._v(" "),s("h2",{attrs:{id:"performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("perf")]),e._v(" directory contains two legacy applications and a "),s("em",[e._v("lib")]),e._v(" directory containing the BigDecimal libraries used by both.")]),e._v(" "),s("p",[s("em",[e._v("big-vs-bigdecimal.html")]),e._v(" tests the performance of big.js against the JavaScript translations of two versions of BigDecimal, its use should be more or less self-explanatory.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/iriscouch/bigdecimal.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("GWT: java.math.BigDecimal"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/dtrebbien/BigDecimal.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICU4J: com.ibm.icu.math.BigDecimal"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("The BigDecimal in the npm registry is the GWT version. It has some bugs, see the Node.js script "),s("em",[e._v("perf/lib/bigdecimal_GWT/bugs.js")]),e._v(" for examples of flaws in its "),s("em",[e._v("remainder")]),e._v(", "),s("em",[e._v("divide")]),e._v(" and "),s("em",[e._v("compareTo")]),e._v(" methods.")]),e._v(" "),s("p",[s("em",[e._v("bigtime.js")]),e._v(" is a Node.js command-line application which tests the performance of big.js against the GWT version of\nBigDecimal from the npm registry.")]),e._v(" "),s("p",[e._v("For example, to compare the time taken by the big.js "),s("code",[e._v("plus")]),e._v(" method and the BigDecimal "),s("code",[e._v("add")]),e._v(" method")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ node bigtime plus 10000 40\n")])])]),s("p",[e._v("This will time 10000 calls to each, using operands of up to 40 random digits and will check that the results match.")]),e._v(" "),s("p",[e._v("For help")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ node bigtime -h\n")])])]),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" Build")]),e._v(" "),s("p",[e._v("If "),s("a",{attrs:{href:"https://github.com/mishoo/UglifyJS2",target:"_blank",rel:"noopener noreferrer"}},[e._v("uglify-js"),s("OutboundLink")],1),e._v(" is installed globally")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ npm install uglify-js -g\n")])])]),s("p",[e._v("then")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ npm run build\n")])])]),s("p",[e._v("will create "),s("em",[e._v("big.min.js")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[e._v("#")]),e._v(" TypeScript")]),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://github.com/borisyankov/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[e._v("DefinitelyTyped"),s("OutboundLink")],1),e._v(" project has a Typescript type definitions file for big.js.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("$ npm install @types/big.js\n")])])]),s("p",[e._v("Any questions about the TypeScript type definitions file should be addressed to the DefinitelyTyped project.")]),e._v(" "),s("h2",{attrs:{id:"feedback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#feedback"}},[e._v("#")]),e._v(" Feedback")]),e._v(" "),s("p",[e._v("Bugs/comments/questions?")]),e._v(" "),s("p",[e._v("Open an issue, or email "),s("a",{attrs:{href:"mailto:M8ch88l@gmail.com"}},[e._v("Michael")])]),e._v(" "),s("h2",{attrs:{id:"licence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#licence"}},[e._v("#")]),e._v(" Licence")]),e._v(" "),s("p",[s("a",{attrs:{href:"LICENCE"}},[e._v("MIT")])]),e._v(" "),s("h2",{attrs:{id:"contributors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[e._v("#")]),e._v(" Contributors")]),e._v(" "),s("p",[e._v("This project exists thanks to all the people who contribute. ["),s("RouterLink",{attrs:{to:"/Front/webpack/webpack-practice/node_modules/big.js/CONTRIBUTING.html"}},[e._v("Contribute")]),e._v("].\n"),s("a",{attrs:{href:"graphs/contributors"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/contributors.svg?width=890&button=false"}})])],1),e._v(" "),s("h2",{attrs:{id:"backers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backers"}},[e._v("#")]),e._v(" Backers")]),e._v(" "),s("p",[e._v("Thank you to all our backers! 🙏 ["),s("a",{attrs:{href:"https://opencollective.com/bigjs#backer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Become a backer"),s("OutboundLink")],1),e._v("]")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://opencollective.com/bigjs#backers",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/backers.svg?width=890"}})])]),e._v(" "),s("h2",{attrs:{id:"sponsors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sponsors"}},[e._v("#")]),e._v(" Sponsors")]),e._v(" "),s("p",[e._v("Support this project by becoming a sponsor. Your logo will show up here with a link to your website. ["),s("a",{attrs:{href:"https://opencollective.com/bigjs#sponsor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Become a sponsor"),s("OutboundLink")],1),e._v("]")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/0/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/0/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/1/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/1/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/2/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/2/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/3/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/3/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/4/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/4/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/5/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/5/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/6/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/6/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/7/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/7/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/8/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/8/avatar.svg"}})]),e._v(" "),s("a",{attrs:{href:"https://opencollective.com/bigjs/sponsor/9/website",target:"_blank"}},[s("img",{attrs:{src:"https://opencollective.com/bigjs/sponsor/9/avatar.svg"}})])])])}),[],!1,null,null,null);t.default=r.exports}}]);