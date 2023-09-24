export default function BlogPost(props) {
    const imgStyle={
        width: "17vw",
        height: "40vh",
        backgroundImage: "url(" + props.imgSrc + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px",
        boxShadow: "16px 16px 79px 9px rgba(0,0,0,0.49)",
        transition: "0.3s ease"
    }
    return (
        <div className="blog-post">
            <div className="blog-img-container" style={imgStyle}></div>
            <div className="blog-text">{props.children}</div>
        </div>
    )
}