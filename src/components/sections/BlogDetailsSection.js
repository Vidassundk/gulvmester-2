import quotesDark from "@/assets/img/straight-quotes-dark.png";
import detailsImg1 from "@/assets/img/blog/blog-details-img-1.jpg";
import detailsImg2 from "@/assets/img/blog/blog-details-img-2.jpg";
import PostCommentSection from "@/components/sections/PostCommentSection";
import Link from "next/link";
import RecentPost from "@/components/sections/RecentPost";

export default function BlogDetailsSection() {
    return (
        <div className="blog-details-page section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-12">
                        <div className="blog-content-wrap">
                            <p><span className="dropcap_style">T</span>here are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered humour, randomised words which don't
                                look even slightly believable. If you are going to passage of Lorem Ipsum, you need
                                embarrassing hidden in the middle of text. All the Lorem Ipsum Internet tend to repeat
                                predefined chunks as necessary, making this the first generator on the Internet. <br/>
                                <br/>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                quisquam est, qui dolorem ipsum quia amet, consectetur, adipisci velit, sed quia non
                                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam voluptatem. Ut
                                enim ad minima veniam, </p>
                            <div className="blog-quote-wrap">
                                <div className="quote-icon">
                                    <img src={quotesDark.src} alt=""/>
                                </div>
                                <div className="blog-quote-text">
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                                        quia conse quuntur doloresvolup tatem sequi nesciunt. Neque porro quisquam est,
                                        qui dolorem ipsum quia dolor sit amet, </p>
                                    <h6 className="blog-author">Jhone Marko / <span>CEO, Phoenix</span></h6>
                                </div>

                            </div>
                            <h3 className="mt-20 mb-30">Individual Approach to Every Project</h3>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                quisquam est, qui dolorem ipsum quia dolor sit consectetur, adipisci velit, sed quia non
                                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam voluptatem. Ut
                                enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                laboriosam, <br/><br/>

                                Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                                because it is pain, but because occasionally circumstances occur in which toil and pain
                                can procure him some great pleasure. To take a trivial example, which of us ever
                                undertakes laborious physical exercise, </p>
                            <div className="row gy-4 mt-30 mb-30">
                                <div className="col-md-6">
                                    <div className="blog-feature-img">
                                        <img src={detailsImg1.src} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="blog-feature-img">
                                        <img src={detailsImg2.src} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered humour, randomised words which don't look even slightly believable. If you are
                                going to passage of Lorem Ipsum, you need embarrassing hidden in the middle of text. All
                                the Lorem Ipsum Internet tend to repeat predefined chunks as necessary, making this the
                                first generator on the Internet. </p>
                            <div className="row border-top border-bottom pt-30 pb-30 mt-30 mb-30">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="blog-tag-wrap d-flex align-items-center">
                                        <h5>Tags:</h5>
                                        <span>Carpentry</span>
                                        <span>Furniture</span>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 text-xl-end">
                                    <div className="social-icon">
                                        <a href="#"><i className="lab la-facebook-f"></i></a>
                                        <a href="#"><i className="lab la-skype"></i></a>
                                        <a href="#"><i className="lab la-instagram"></i></a>
                                        <a href="#"><i className="lab la-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-wrap">
                                <a href="#"><i className="las la-long-arrow-alt-left"></i>Previous Post</a>
                                <a href="#">Next Post<i className="las la-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                        <PostCommentSection />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12">
                        <div className="blog-sidebar">
                            <div className="search-bar-wrap d-flex">
                                <input type="search" placeholder="search"/>
                                <i className="fal fa-search"></i>
                            </div>
                            <div className="blog-category">
                                <h5>Categories</h5>
                                <ul>
                                    <li><i className="las la-angle-double-right"></i><Link href="/blog">Furniture</Link>
                                    </li>
                                    <li><i className="las la-angle-double-right"></i><Link href="/blog">Interior</Link>
                                    </li>
                                    <li><i className="las la-angle-double-right"></i><Link href="/blog">Flooring</Link>
                                    </li>
                                    <li><i className="las la-angle-double-right"></i><Link href="/blog">Carpentry</Link>
                                    </li>
                                    <li><i className="las la-angle-double-right"></i><Link href="/blog">Home
                                        Renovation</Link></li>
                                </ul>
                            </div>
                            <RecentPost />
                            <div className="popular-tag-wrap">
                                <h5>Popular Tag</h5>
                                <span>Wood Work</span>
                                <span>Furniture</span>
                                <span>Craftsman</span>
                                <span>Renovation</span>
                                <span>Interior</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}