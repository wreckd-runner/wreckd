async function loadPage(page) {
    try {
        const response = await fetch(`content/${page}.md`);
        if (!response.ok) throw new Error("Not found");

        const markdown = await response.text();
        document.getElementById('content').innerHTML = marked.parse(markdown);
        window.scrollTo(0, 0);
    } catch (err) {
        document.getElementById('content').innerHTML = "<p>Page not found.</p>";
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        history.pushState(null, null, `#${page}`);
        loadPage(page);
    });
});

window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    loadPage(hash);
});
