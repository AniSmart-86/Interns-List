import React, { useState, useEffect } from 'react';


const internsData = [
    {
      id: 1,
      name: 'Ani Emmanuel',
    picture: require('../images/Ani.jpg') ,
      info: 'Emmanuel is a tech enthusiatic and a passionate Frontend Developer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 96',
      Task7: 'Task-7 = 92',
      Task8: 'Task-8 = 99',
      Task9: 'Task-9 = 89',
      scores: [96, 99, 92, 89],
    },
    {
      id: 2,
      name: 'Chinaza Okafor',
    picture: require('../images/nazzy.jpg') ,
      info: 'Chinaza is a tech enthusiatic and a passionate Frontend Developer, technologist, communicator and a dedicated learner and her last four task scores:',
      Task6: 'Task-6 = 50',
      Task7: 'Task-7 = 70',
      Task8: 'Task-8 = 65',
      Task9: 'Task-9 = 56',
      scores: [50, 70, 65, 56],
    },
    {
      id: 3,
      name: 'Chukwudi Confidence',
    picture: require('../images/chudy (1).jpg') ,
      info: 'Chukwudi is a tech enthusiatic and a passionate Frontend Developer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 64',
      Task7: 'Task-7 = 80',
      Task8: 'Task-8 = 95',
      Task9: 'Task-9 = 73',
      scores: [64, 80, 95, 73],
    },
    {
      id: 4,
      name: 'Godson Caleb',
    picture: require('../images/chudy (2).jpg') ,
      info: 'Caleb is a tech enthusiatic and a passionate Product Designer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 44',
      Task7: 'Task-7 = 82',
      Task8: 'Task-8 = 77',
      Task9: 'Task-9 = 35',
      scores: [44, 82, 77, 35],
    },
    {
      id: 5,
      name: 'Chisom Jennifer',
    picture: require('../images/chudy (3).jpg') ,
      info: 'Chisom is a tech enthusiatic and a passionate Product Designer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 60',
      Task7: 'Task-7 = 85',
      Task8: 'Task-8 = 90',
      Task9: 'Task-9 = 75',
      scores: [60, 85, 75, 90],
    },
    {
      id: 6,
      name: 'Callistus Obi0rah',
    picture: require('../images/chudy (4).jpg') ,
      info: 'Callistus is a tech enthusiatic and a passionate Frontend Developer, technologist, communicator and a dedicated learner and her last four task scores:',
      Task6: 'Task-6 = 65',
      Task7: 'Task-7 = 85',
      Task8: 'Task-8 = 90',
      Task9: 'Task-9 = 75',
      scores: [85, 90, 75, 65],
    },
    {
      id: 7,
      name: 'Juliet Okonma',
    picture: require('../images/chudy (5).jpg') ,
      info: 'Juliet Okonma is a tech enthusiatic and a passionate Web3 Developer, technologist, communicator and a dedicated learner and her last four task scores:',
      Task6: 'Task-6 = 67',
      Task7: 'Task-7 = 85',
      Task8: 'Task-8 = 90',
      Task9: 'Task-9 = 55',
      scores: [85, 90, 55, 67],
    },
    {
      id: 8,
      name: 'Samuel uche',
    picture: require('../images/chudy (7).jpg') ,
      info: 'Samuel is a tech enthusiatic and a passionate Frontend Developer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 67',
      Task7: 'Task-7 = 88',
      Task8: 'Task-8 = 90',
      Task9: 'Task-9 = 75',
      scores: [88, 90, 75, 67],
    },
    {
      id: 9,
      name: 'Judah Onunkwor',
    picture: require('../images/chudy (8).jpg') ,
      info: 'Judah is a tech enthusiatic and a passionate Frontend Developer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 67',
      Task7: 'Task-7 = 85',
      Task8: 'Task-8 = 99',
      Task9: 'Task-9 = 75',
      scores: [85, 99, 75, 67],
    },
    {
      id: 10,
      name: 'Uchechukwu Amogu',
    picture: require('../images/chudy (9).jpg') ,
      info: 'Uchechukwu is a tech enthusiatic and a passionate Web3 Developer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 67',
      Task7: 'Task-7 = 85',
      Task8: 'Task-8 = 90',
      Task9: 'Task-9 = 75',
      scores: [85, 90, 75, 67],
    },
    {
      id: 11,
      name: 'Israel Ofido',
    picture: require('../images/chudy (7).jpg') ,
      info: 'Israel is a tech enthusiatic and a passionate Frontend Developer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 67',
      Task7: 'Task-7 = 85',
      Task8: 'Task-8 = 90',
      Task9: 'Task-9 = 75',
      scores: [85, 90, 75, 67],
    },
    {
      id: 12,
      name: 'Oluwaseun Daramola',
    picture: require('../images/chudy (1).jpg') ,
      info: 'Oluwaseun is a tech enthusiatic and a passionate Frontend Developer, technologist, communicator and a dedicated learner and his last four task scores:',
      Task6: 'Task-6 = 67',
      Task7: 'Task-7 = 85',
      Task8: 'Task-8 = 90',
      Task9: 'Task-9 = 75',
      scores: [85, 90, 75, 67],
    },
    
    
  ];


const InternsList = () => {


  const [selectedIntern, setSelectedIntern] = useState(null);

  const handleInternClick = (id) => {
    const intern = internsData.find((intern) => intern.id === id);
    setSelectedIntern(intern);
    

  };


  
  return (
    <div className='internsWrapper'>
      <div className="interns-container">
      <h1>Interns List</h1>
        <div className='scroll'>
            <div className='inner-scroll'>
        {internsData.map((intern) => (
          <div key={intern.id} className="intern-card" onClick={() => handleInternClick(intern.id)}>
            <img src={intern.picture} alt={intern.name} />
            <h2>{intern.name}</h2>
          </div>
        ))}
      </div>
      </div>
      </div>
      {selectedIntern && (
        <div className="intern-details">
          <img src={selectedIntern.picture} alt={selectedIntern.name} />
          <h2>{selectedIntern.name}</h2>
          <p>{selectedIntern.info}</p>
          <p>{selectedIntern.Task6}</p>
          <p>{selectedIntern.Task7}</p>
          <p>{selectedIntern.Task8}</p>
          <p>{selectedIntern.Task9}</p>
          <p>Overall Grading: {calculateOverallGrade(selectedIntern.scores)}</p>
        </div>
      )}
    </div>
  );
};

const calculateOverallGrade = (scores) => {
  const total = scores.reduce((acc, score) => acc + score, 0);
  const average = total / scores.length;
  return `${average.toFixed(2)}%`; 
};

export default InternsList;
