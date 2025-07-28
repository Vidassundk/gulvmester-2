export default function headerSticky() {
    const handleScroll = () => {
        const scroll = window.scrollY;
        const header = document.getElementById('header-sticky');

        if (header) {
            if (scroll < 400) {
                header.classList.remove('header-sticky');
            } else {
                header.classList.add('header-sticky');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}