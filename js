<script>
function showSection(id) {
    // hide all sections
    document.querySelectorAll('.section')
        .forEach(s => s.classList.remove('active'));

    // clear nav highlight
    document.querySelectorAll('nav a')
        .forEach(a => a.classList.remove('active'));

    // show target section
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');

        // highlight nav item if it exists
        const navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (navLink) navLink.classList.add('active');

        window.scrollTo(0, 0);
        history.pushState(null, null, '#' + id);
    }
}

function showTrip(id) {
    document.querySelectorAll('.sub-page')
        .forEach(t => t.classList.remove('active'));

    const trip = document.getElementById(id);
    if (trip) trip.classList.add('active');
}

function showMembershipSubPage(id) {
    document.querySelectorAll('#membership .sub-page')
        .forEach(t => t.classList.remove('active'));

    const page = document.getElementById(id);
    if (page) page.classList.add('active');
}
// load section from URL hash
window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});
</script>
