export default function BlogLanding(props){
    const blogOverlayStyle = {
        position: "absolute",
        right: "0",
        top: "12vh",
        width: "40vw",
        height: "80vh",
        borderRadius: "20px 0 0 20px",
        boxShadow: "16px 16px 79px 9px rgba(0,0,0,0.49)",
        backgroundImage: "url(" + props.imgSrc + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return(
        <div className="blog-landing">
            <div className="blog-overlay" style={blogOverlayStyle}></div>
            <div className="blog-top-banner">
                <div className="blog-landing-text">
                    <h1 className="blog-landing-title">{props.title}</h1>
                    <h2 className="blog-landing-subtitle">{props.subtitle}</h2>
                </div>
            </div>
            <div className="blog-bottom-banner"></div>
        </div>
    )
}