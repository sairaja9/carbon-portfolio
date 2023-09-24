import Landing from '../components/Landing';
import BlogPost from '../components/BlogPost';

import Smoke from '../assets/smoke.jpg';
import Stock from '../assets/stock.jpg';
import Globe from '../assets/globe.jpg';
import Mountain from '../assets/mountain.jpg';

export default function Home() {
    return (
        <section className='home'>
            <Landing image={Smoke} title="Unlock the Power of a Carbon Credit Portfolio" subtitle="Your path to a greener future starts here">
                <button className='landing-button'>For Enterprise →</button>
                <button className='landing-button clear'>For Individuals →</button>
            </Landing>
            <div className="blog-title-container">
                <div className="blog-title-inner-container">
                    <h1 className="blog-section-title">Not Familiar with Carbon Credit Portfolios? Read Our Blog Posts.</h1>
                    <h2 className="blog-section-subtitle">Understand the Impacts of Carbon Credits from a business and individual's perspective.</h2>
                </div>
            </div>
            <div className='featured-blog-posts'>
                <div className='featured-blog-posts-inner-container'>
                    <BlogPost imgSrc={Globe}>"Carbon Markets 101": Basics of Carbon Markets for Newcomers</BlogPost>
                    <BlogPost imgSrc={Stock}>Diversification in Carbon Credits: Lessons from Asset Management</BlogPost>
                    <BlogPost imgSrc={Smoke}>Carbon Credits: A Viable Alternative to Internal Emissions Reduction</BlogPost>
                    <BlogPost imgSrc={Mountain}>Individuals and Carbon Credits: Making a Personal Impact</BlogPost>
                </div>
            </div>
        </section>
    )
}