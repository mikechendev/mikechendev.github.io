import React from 'react';
import { Jumbotron } from './migration';
import { Container } from 'react-bootstrap';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <div
          style={{
            fontSize: '75px',
            // display: 'grid',
            // gridTemplateColumns: '1fr 1fr 1fr 1fr',
          }}
        >
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-react-original colored"></i>
          <i class="devicon-redux-original colored"></i>
          <i class="devicon-python-plain colored"></i>
          <i class="devicon-selenium-original colored"></i>
          <i class="devicon-ruby-plain colored"></i>
          <i class="devicon-rails-plain colored"></i>
          <i class="devicon-amazonwebservices-original colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
          <i class="devicon-express-original colored"></i>
          <i class="devicon-postgresql-plain colored"></i>
          <i class="devicon-mongodb-plain colored"></i>
          <i class="devicon-html5-plain colored"></i>
          <i class="devicon-css3-plain colored"></i>
          <i class="devicon-sass-original colored"></i>
          <i class="devicon-git-plain colored"></i>
        </div>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
