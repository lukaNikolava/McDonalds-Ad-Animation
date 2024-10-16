function adjustBannerSize() {
    const banner = document.querySelector('.banner');
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    if (viewportHeight < 1000 && viewportWidth < 500) {
        banner.style.width = `${viewportWidth}px`;
        banner.style.height = `${viewportHeight}px`;
    } else if (viewportHeight < 1000) {
        banner.style.height = `${viewportHeight}px`;
        banner.style.width = `${viewportHeight / 2}px`;
    } else if (viewportWidth < 500) {
        banner.style.width = `${viewportWidth}px`;
        banner.style.height = `${viewportWidth * 2}px`;
    } else {
        banner.style.width = '500px';
        banner.style.height = '1000px';
    }
}

window.addEventListener('load', adjustBannerSize);
window.addEventListener('resize', adjustBannerSize);
