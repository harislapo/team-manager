import { useState, useContext } from 'react';
import DataContext from './context/DataContext';

const GroupedTeamMembers = () => {
  const { employees, selectedTeam, setSelectedTeam } = useContext(DataContext);
  const groupTeamMembers = () => {
    let teams = [];

    let teamAMembers = employees.filter((emp) => emp.teamName === 'Team A');
    let teamA = {
      team: 'Team A',
      members: teamAMembers,
      collapsed: selectedTeam === 'Team A' ? false : true,
    };
    teams.push(teamA);

    let teamBMembers = employees.filter((emp) => emp.teamName === 'Team B');
    let teamB = {
      team: 'Team B',
      members: teamBMembers,
      collapsed: selectedTeam === 'Team B' ? false : true,
    };
    teams.push(teamB);

    let teamCMembers = employees.filter((emp) => emp.teamName === 'Team C');
    let teamC = {
      team: 'Team C',
      members: teamCMembers,
      collapsed: selectedTeam === 'Team C' ? false : true,
    };
    teams.push(teamC);

    let teamDMembers = employees.filter((emp) => emp.teamName === 'Team D');
    let teamD = {
      team: 'Team D',
      members: teamDMembers,
      collapsed: selectedTeam === 'Team D' ? false : true,
    };
    teams.push(teamD);

    return teams;
  };

  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  const handleTeamClick = (event) => {
    let transformedGroupData = groupedEmployees.map((group) =>
      group.team === event.currentTarget.id
        ? { ...group, collapsed: !group.collapsed }
        : group
    );

    setGroupedEmployees(transformedGroupData);
    setSelectedTeam(event.currentTarget.id);
  };

  return (
    <main className="container col-6">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: 'pointer' }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              {item.team}
            </h4>
            <div
              id={'collapse_' + item.team}
              className={item.collapsed === true ? 'collapse' : ''}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2" key={member.id}>
                    <h5 className="card-title mt-2">
                      <span className="text-dark">{member.fullName}</span>
                    </h5>
                    <p>{member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
