import projectFeatureImg from "@/assets/img/project/project-feature-img.jpg";
import galleryImg1 from "@/assets/img/project/gallery-img-1.jpg";
import galleryImg2 from "@/assets/img/project/gallery-img-2.jpg";
import galleryImg3 from "@/assets/img/project/gallery-img-3.jpg";

export default function ProjectDetailsSection() {
    return (
        <div className="project-details-wrap section-padding">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-7 col-lg-7 order-2 order-lg-1">
                        <div className="project-details-inner">
                            <div className="project-feature-img">
                                <img src={projectFeatureImg.src} alt=""/>
                            </div>
                            <div className="project-details-content mt-30 mb-20">
                                <h3>Modern Furniture</h3>
                                <p>Aenean interdum purus vitae purus laoreet, eu egestas augue dictum. Nunc tincidunt
                                    felis ullamcorper dolor euismod porttitor at tincidunt arcu. Ut molestie cursus
                                    sapien, a auctor quam viverra ac. Sed non blandit mi. Proin pharetra dui in molestie
                                    sollicitudin. Vivamus ornare lorem in tempus facilisis. Quisque tristique erat
                                    interdum augue sodales fringilla.</p>
                            </div>
                            <div className="project-image-gallery">
                                <div className="row">
                                    <div className="col-6">
                                        <img src={galleryImg1.src} alt=""/>
                                    </div>
                                    <div className="col-6">
                                        <img src={galleryImg2.src} alt=""/>
                                    </div>
                                    <div className="col-12 mt-30">
                                        <img src={galleryImg3.src} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-30"> Phasellus euismod, dolor at efficitur condimentum, neque nulla viverra
                                lectus, varius bibendum quam sapien dignissim mi. Maecenas rhoncus leo turpis, sit amet
                                aliquet lectus viverra sed. Aliquam sodales commodo imperdiet. Morbi tincidunt ante
                                interdum urna commodo tempor vitae id orci. Suspendisse id orci ut erat convallis
                                iaculis luctus vel diam. Donec felis eros, consectetur sed ornare quis, ultrices a
                                libero. Vestibulum consectetur purus id libero euismod maximus.</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-1 order-lg-2">
                        <div className="project-details-info">
                            <h3>House Furniture</h3>
                            <p>Dicta sunt explicabo enim ipsam</p>
                            <div className="row single-details-item gy-3 mt-30">
                                <div className="col-4">
                                    <h5>Client</h5>
                                </div>
                                <div className="col-6">
                                    <span>Michael Carrick</span>
                                </div>
                                <div className="col-4">
                                    <h5>Year</h5>
                                </div>
                                <div className="col-6">
                                    <span>July, 2024</span>
                                </div>
                                <div className="col-4">
                                    <h5>Carpenter</h5>
                                </div>
                                <div className="col-6">
                                    <span>Paul Scholes</span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}