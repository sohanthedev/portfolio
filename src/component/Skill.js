import React from 'react';
import SkillBar from 'react-skillbars';

function Skill() {
    const colors = {
        bar: 'white',
        title: {
          text: 'white',
          background: 'purple',
        },
      };
    const skills = [
        { type: 'React', level: 95 },
        { type: 'Javascript', level: 90 },
        { type: 'node', level: 88 },
        { type: 'MongoDB', level: 75 },
        { type: 'CSS', level: 89 },
        { type: 'HTML', level: 90 },
      ];
    return (
        <div className='my-12 p-6 bg-slate-500'>
            <h1 className='text-white text-3xl font-bold text-center my-4'>MY SKILLS</h1>

        <SkillBar skills={skills} height={20} colors={colors} />
        </div>
    );
};

export default Skill;