import Landing from '../components/Landing';
import BlogPost from '../components/BlogPost';

import Smoke from '../assets/smoke.jpg';

export default function Home() {
    return (
        <section className='home'>
            <Landing image={Smoke} title="Unlock the Power of a Carbon Credit Portfolio" subtitle="Your path to a greener future starts here">
                <button className='landing-button'>For Enterprise →</button>
                <button className='landing-button clear'>For Individuals →</button>
            </Landing>
            <div className='featured-blog-posts'>
                <div className='featured-blog-posts-inner-container'>
                    <BlogPost imgSrc={Smoke}>"Carbon Markets 101": Basics of Carbon Markets for Newcomers</BlogPost>
                </div>
            </div>
        </section>
    )
}