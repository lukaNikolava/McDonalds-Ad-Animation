function adjustBannerSize() {
    const banner = document.querySelector('.banner');
    const height = window.innerHeight;
    const width = window.innerWidth;

    
    banner.style.width = '500px';
    banner.style.height = '1000px';

    
    if (height < 1000) {
        banner.style.height = `${height}px`;
        banner.style.width = `${height / 2}px`;
    } 
    
    
    if (width < 500) {
        banner.style.width = `${width}px`;
        banner.style.height = `${width * 2}px`;
    }
}


window.addEventListener('load', adjustBannerSize);
window.addEventListener('resize', adjustBannerSize);