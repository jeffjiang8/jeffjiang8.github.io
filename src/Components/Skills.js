import React, { Component } from 'react';
import SkillPageOne from './SkillPageOne'
import SkillPageTwo from './SkillPageTwo'
import SkillPageThree from './SkillPageThree'


class Skills extends Component {

    handleClick = (e) => {
      console.log(e.targer)
    }
    render(){
      return (
        <div className={this.props.view?`skills slider`:`skills slider closed`}>
          <div className="skills-slider">
            <div class="slides">
              <div className="slide" id="slide-1">
                <SkillPageOne/>
                <p>&gt;</p>
              </div>
              <div className="slide" id="slide-2">
                <p>&lt;</p>
                <SkillPageTwo/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>&gt;</p>
              </div>
              <div className="slide" id="slide-3">
                <p>&lt;</p>
                <SkillPageThree/>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Skills;