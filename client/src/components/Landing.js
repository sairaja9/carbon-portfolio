export default function Landing(props){
    return(
        <section className="landing">
            <div className="text-container">
                <h1 className="landing-title">{props.title}</h1>
                <h2 className="landing-subtitle">{props.subtitle}</h2>
            </div>
            <div className="button-outer-container">
                <div className="button-inner-container">{props.children}</div>
            </div>
            <div className="rounded-box-container">
                <div className="rounded-box"></div>
            </div>
        </section>
    )
}