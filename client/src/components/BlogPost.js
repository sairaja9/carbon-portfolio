export default function BlogPost(props) {
    return (
        <div className="blog-post">
            <img className="blog-img" src={props.imgSrc} alt="blog-img"/>
            <div className="blog-text">{props.children}</div>
        </div>
    )
}