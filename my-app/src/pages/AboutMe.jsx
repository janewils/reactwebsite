import './AboutMe.css';

const AboutMe = ()=> {
    return (
      <div className="AboutMe"> 
            <div class="about-me">
                <h2>About Me</h2>
                <p>Jane Wilson is a senior at UNC Chapel Hill passionate about building community, learning, and writing about contemporary religion and folk music. She also enjoys spending time outdoors.</p>
            </div>
            <div class="featured-stories">
                <h2>Featured Stories</h2>
                <ul>
                    <li>
                        <h3>Story Title 1</h3>
                        <p>Short description of the story. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="story1.html">Read More</a>
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