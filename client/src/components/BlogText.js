export default function BlogText(props){
    return(
        <div className="blog-text-container">
            <div className="blog-text-inner-container">
                {props.children}
            </div>
        </div>
    )
}