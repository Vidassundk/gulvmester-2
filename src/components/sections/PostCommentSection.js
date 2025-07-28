import comment1Img from "@/assets/img/blog/comment-1.png";
import comment2Img from "@/assets/img/blog/comment-2.jpg";

export default function PostCommentSection() {
    return (
        <>
            <div className="commetns-section-wrap">
                <div className="comments-headline">
                    <h3>Comments (2)</h3>
                </div>
                <div className="single-comments-wrap">
                    <div className="single-comments-inner">
                        <div className="comments-autor-thumb">
                            <img src={comment1Img.src} alt=""/>
                        </div>
                        <div className="comments-content">
                            <h6>Patric Evra</h6>
                            <p className="comments-date">November 02, 2024 - 9:44 am</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                        </div>
                    </div>
                    <a href="#" className="reply-btn">Reply</a>
                </div>

                <div className="single-comments-wrap">
                    <div className="single-comments-inner">
                        <div className="comments-autor-thumb">
                            <img src={comment2Img.src} alt=""/>
                        </div>
                        <div className="comments-content">
                            <h6>Monica Benedict</h6>
                            <p className="comments-date">November 06, 2024 - 7:28 am</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                        </div>
                    </div>
                    <a href="#" className="reply-btn">Reply</a>
                </div>
            </div>
            <div className="comments-form-wrap">
                <h3>Leave A Comment </h3>
                <div className="comments-form">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div className="col-md-6 col-12">
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="col-12">
                                <input type="tel" placeholder="Phone"/>
                            </div>
                            <div className="col-12">
                                            <textarea name="message" id="message" cols="30" rows="10"
                                                      placeholder="Write a Comment"></textarea>
                            </div>
                            <div className="col-12">
                                <input type="submit" value="Post Comment"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}