// 예시 데이터: 인사 정보
const employees = [
    { id: 'E001', position: 'Manager', name: '김지훈', gender: '남', age: 35, monthsWorked: 120, salary: 5000000 },
    { id: 'E002', position: 'Engineer', name: '박지민', gender: '여', age: 28, monthsWorked: 36, salary: 4000000 },
    { id: 'E003', position: 'Staff', name: '최영호', gender: '남', age: 45, monthsWorked: 180, salary: 6000000 },
    { id: 'E004', position: 'Engineer', name: '이수진', gender: '여', age: 32, monthsWorked: 48, salary: 4500000 },
  ];
  
  // 사원 리스트 출력 함수
  function displayEmployees(employeeList) {
    const employeeTableBody = document.getElementById('employee-list');
    employeeTableBody.innerHTML = '';
  
    employeeList.forEach(employee => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.position}</td>
        <td>${employee.name}</td>
        <td>${employee.gender}</td>
        <td>${employee.age}</td>
        <td>${employee.monthsWorked}</td>
        <td>${employee.salary.toLocaleString()} 원</td>
      `;
      employeeTableBody.appendChild(row);
    });
  }
  
  // 필터링 함수
  function filterEmployees() {
    const searchName = document.getElementById('search-name').value.toLowerCase();
    const searchDepartment = document.getElementById('search-department').value;
  
    const filteredEmployees = employees.filter(employee => {
      const isNameMatch = employee.name.toLowerCase().includes(searchName);
      const isDepartmentMatch = searchDepartment ? employee.position === searchDepartment : true;
      return isNameMatch && isDepartmentMatch;
    });
  
    displayEmployees(filteredEmployees);
  }
  
  // 초기 화면에 모든 사원 표시
  displayEmployees(employees);
  
  // 검색창 이벤트 리스너
  document.getElementById('search-name').addEventListener('input', filterEmployees);
  document.getElementById('search-department').addEventListener('change', filterEmployees);