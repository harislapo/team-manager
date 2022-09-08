import female_employee from './images/female_employee.png';
import male_employee from './images/male_employee.png';
import { useContext } from 'react';
import DataContext from './context/DataContext';

const TeamMemberCard = ({ employee }) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'
      }
      style={{ cursor: 'pointer' }}
      onClick={handleEmployeeCardClick}
    >
      <img
        src={employee.gender === 'female' ? female_employee : male_employee}
        alt={employee.fullName}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{employee.fullName}</h5>
        <p className="card-text">{employee.designation}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
