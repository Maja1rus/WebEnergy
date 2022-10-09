export function caseLink(blocksLink) {
    blocksLink.forEach(block => {
        block.addEventListener('click', blockLinkHandler)
        function blockLinkHandler() {
            window.location.href = block.dataset.link;
        }
    });
}