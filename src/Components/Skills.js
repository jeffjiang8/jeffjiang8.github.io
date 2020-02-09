import React, { Component } from 'react';
import SkillPageOne from './SkillPageOne'
import SkillPageTwo from './SkillPageTwo'
import SkillPageThree from './SkillPageThree'


class Skills extends Component {
    render(){
      return (
        <div className={this.props.view?`skills slider`:`skills slider closed`}>
          <div className="skills-slider">
            <div class="slides">
              <div className="slide" id="slide-1">
                <SkillPageOne/>
                <a href="#slide-2">&gt;</a>
                &nbsp;&nbsp;
              </div>
              <div className="slide" id="slide-2">
                <a href="#slide-1">&lt;</a>
                <SkillPageTwo/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#slide-3">&gt;</a>
              </div>
              <div className="slide" id="slide-3">
                <a href="#slide-2">&lt;</a>
                <SkillPageThree/>
              </div>
            </div>
            {/* <div className="skills-navi">
              <a href="#slide-1">&lt;</a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div> 
            */}
          </div>
        </div>
      )
    }
}

export default Skills;