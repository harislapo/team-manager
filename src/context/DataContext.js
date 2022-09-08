import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({
  employees: [],
  selectedTeam: null,
  handleTeamSelectionChange: () => {},
  handleEmployeeCardClick: () => {},
  setSelectedTeam: () => {},
});

export const DataProvider = ({ children }) => {
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem('selectedTeam')) || 'Team A'
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employeesList')) || [
      {
        id: 1,
        fullName: 'Nicola Jennica',
        designation: 'JavaScript Developer',
        gender: 'male',
        teamName: 'Team A',
      },
      {
        id: 2,
        fullName: 'Emory Branislava',
        designation: 'Node Developer',
        gender: 'female',
        teamName: 'Team A',
      },
      {
        id: 3,
        fullName: 'Ivana Essie',
        designation: 'Java Developer',
        gender: 'female',
        teamName: 'Team A',
      },
      {
        id: 4,
        fullName: 'Vladimir Letha',
        designation: 'React Developer',
        gender: 'male',
        teamName: 'Team B',
      },
      {
        id: 5,
        fullName: 'Dustin Goddard',
        designation: 'DotNet Developer',
        gender: 'male',
        teamName: 'Team B',
      },
      {
        id: 6,
        fullName: 'Katherina Rainer',
        designation: 'SQL',
        gender: 'female',
        teamName: 'Team B',
      },
      {
        id: 7,
        fullName: 'Jo Promise',
        designation: 'Angular Developer',
        gender: 'male',
        teamName: 'Team C',
      },
      {
        id: 8,
        fullName: 'Stacy Clair',
        designation: 'API Developer',
        gender: 'female',
        teamName: 'Team C',
      },
      {
        id: 9,
        fullName: 'Myles Reanna',
        designation: 'C++ Developer',
        gender: 'female',
        teamName: 'Team C',
      },
      {
        id: 10,
        fullName: 'Sully Florijan',
        designation: 'Python Developer',
        gender: 'male',
        teamName: 'Team D',
      },
      {
        id: 11,
        fullName: 'Aleksandar Nina',
        designation: 'Vue Developer',
        gender: 'male',
        teamName: 'Team D',
      },
      {
        id: 12,
        fullName: 'Klara Tajda',
        designation: 'Graphic Designer',
        gender: 'female',
        teamName: 'Team D',
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem('employeesList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  const handleTeamSelectionChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleEmployeeCardClick = (event) => {
    const transformedEmployeesArray = employees.map((emp) =>
      emp.id === parseInt(event.currentTarget.id)
        ? emp.teamName === selectedTeam
          ? { ...emp, teamName: '' }
          : { ...emp, teamName: selectedTeam }
        : emp
    );
    setEmployees(transformedEmployeesArray);
  };

  return (
    <DataContext.Provider
      value={{
        employees,
        selectedTeam,
        handleTeamSelectionChange,
        handleEmployeeCardClick,
        setSelectedTeam,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
