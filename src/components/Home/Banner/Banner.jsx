import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p> Enjoy the Vibe With the Best Wireless Headphones. Shop Now at boAt Official. Get yourself immersed in the colors of musical bliss by choosing boAt Rockerz</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Banner Cta</div>
                </div>
            </div>
            <img src={BannerImg} alt="Banner Image" />
        </div>
    </div>;
};

export default Banner;
