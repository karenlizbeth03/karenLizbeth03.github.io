import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import 'animate.css';

const Skills = () => {
  const skills = {
    databases: [
      { name: 'MySQL', percentage: 90 },
      { name: 'MongoDB', percentage: 85 },
      { name: 'PostgreSQL', percentage: 70 },
      { name: 'Firebase', percentage: 80 },
      { name: 'SQL Server', percentage: 70 }
    ],
    frameworks: [
      { name: 'Laravel', percentage: 90 },
      { name: 'Angular', percentage: 90 },
      { name: 'React', percentage: 90 },
      { name: 'Ionic', percentage: 85 },
      { name: 'Adobe XD', percentage: 85 },
    ],
    languages: [
      { name: 'HTML & CSS', percentage: 95 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'PHP', percentage: 90 },
      { name: 'Python', percentage: 90 },
      { name: 'Java', percentage: 85 },
    ]
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const getPathColor = (index) => {
    const width = window.innerWidth;
    if (width <= 600) {
      return `url(#grad-small-${index})`;
    } else if (width <= 1024) {
      return `url(#grad-medium-${index})`;
    } else {
      return `url(#grad-large-${index})`;
    }
  };

  const renderSkills = (category) => {
    return skills[category].map((skill, index) => (
      <div className="col" key={index}>
        <div className="score">
          <div className="box">
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
              styles={buildStyles({
                textColor: '#fff',
                pathColor: getPathColor(index)
              })}
            />
            <h2>{skill.name}</h2>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="skill" id="skills">
      <div className="skill-bx">
        <h2>Skills</h2>
        <p>I am a person with diverse skills and talents, capable of tackling multiple challenges </p>
        <p>and projects effectively. Among my competencies are.</p>
        <h3>Databases</h3>
        <div className="skill-slider">
          <Slider {...sliderSettings}>
            {renderSkills('databases')}
          </Slider>
        </div>

        <h3>Frameworks & Technologies</h3>
        <div className="skill-slider">
          <Slider {...sliderSettings}>
            {renderSkills('frameworks')}
          </Slider>
        </div>

        <h3>Programming Languages</h3>
        <div className="skill-slider">
          <Slider {...sliderSettings}>
            {renderSkills('languages')}
          </Slider>
        </div>

        {skills.databases.map((_, index) => (
          <svg width="0" height="0" key={index}>
            <defs>
              <linearGradient id={`grad-small-${index}`} gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#1c7d9e" />
                <stop offset="100%" stopColor="#5300b9" />
              </linearGradient>
              <linearGradient id={`grad-medium-${index}`} gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#1c7d9e" />
                <stop offset="100%" stopColor="#5300b9" />
              </linearGradient>
              <linearGradient id={`grad-large-${index}`} gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#1c7d9e" />
                <stop offset="100%" stopColor="#5300b9" />
              </linearGradient>
            </defs>
          </svg>
        ))}

      </div>
    </section>
  );
};

export default Skills;
