import styles from './AboutMe.css';

const AboutMe = ()=> {
    return (
      <div className="AboutMe"> 
            <div className="about-me">
                <h2>About Me</h2>
                <p>Hey! I'm a senior at UNC Chapel Hill. I'm passionate about building community and writing about religion and music, and spending time outdoors.</p>
            </div>
            <div className="featured-stories">
                <h2>Featured Stories</h2>
                <ul>
                    <li>
                        <h3>Story Title 1</h3>
                        <p>Short description of the story. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="story1">Read More</a>
                    </li>
                    <li>
                        <h3>"I Could Hear the Music Through the Trees..."</h3>
                        <p>A contemporary story about how I play the trombone.</p>
                        <a href="https://www.coolmathgames.com/">Read More</a>
                        
                    </li>
                </ul>
            </div>
      </div>
    );
  }
  
  export default AboutMe;