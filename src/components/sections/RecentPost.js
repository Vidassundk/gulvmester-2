import recentPost1 from "@/assets/img/blog/recent-post-1.jpg";
import recentPost2 from "@/assets/img/blog/recent-post-2.jpg";
import recentPost3 from "@/assets/img/blog/recent-post-3.jpg";

export default function RecentPost() {
    return (
        <div className="recent-post-wrap">
            <h5>Recent Post</h5>
            <div className="single-recent-post">
                <div className="recent-post-thumbs">
                    <img src={recentPost1.src} alt=""/>
                </div>
                <div className="recent-post-content">
                    <p>May 22, 2024</p>
                    <a href="#">
                        <h6>Top 10-contemporary trends in wooden furnishings</h6>
                    </a>
                </div>
            </div>
            <div className="single-recent-post">
                <div className="recent-post-thumbs">
                    <img src={recentPost2.src} alt=""/>
                </div>
                <div className="recent-post-content">
                    <p>May 15, 2024</p>
                    <a href="#">
                        <h6>Custom design of eco-friendly wooden furniture</h6>
                    </a>
                </div>
            </div>
            <div className="single-recent-post">
                <div className="recent-post-thumbs">
                    <img src={recentPost3.src} alt=""/>
                </div>
                <div className="recent-post-content">
                    <p>May 07, 2024</p>
                    <a href="#">
                        <h6>From forest to furnishing: the story of solid wood</h6>
                    </a>
                </div>
            </div>
        </div>
    )
}