checkNode = n => {
	if (n.nodeType === 1 && n.matches('.skip-credits'))
		skipIntro(n)
}

MutatedNodes = n => n.addedNodes.forEach(checkNode);

skipIntro = n => {
	n.firstChild.click();
	obs.disconnect();
}

const obs = new MutationObserver(m => m.map(MutatedNodes));

obs.observe(document.documentElement, { childList: true, subtree: true });
