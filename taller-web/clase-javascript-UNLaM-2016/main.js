Reveal.initialize({
	history: true,
	dependencies: [
		{ src: 'vendor/reveal.js-master/plugin/markdown/marked.js' },
		{ src: 'vendor/reveal.js-master/plugin/markdown/markdown.js' },
		{ src: 'vendor/reveal.js-master/plugin/notes/notes.js', async: true },
		{ src: 'vendor/reveal.js-master/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	]
});