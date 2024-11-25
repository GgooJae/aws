// 월별 수익, 지출 데이터
const monthlyData = [
    { month: '1월', income: 12000000, expense: 8000000 },
    { month: '2월', income: 15000000, expense: 9000000 },
    { month: '3월', income: 10000000, expense: 5000000 },
    { month: '4월', income: 14000000, expense: 11000000 },
    { month: '5월', income: 16000000, expense: 9500000 },
    { month: '6월', income: 18000000, expense: 10000000 },
    { month: '7월', income: 13000000, expense: 8000000 },
    { month: '8월', income: 12500000, expense: 10500000 },
    { month: '9월', income: 17000000, expense: 9500000 },
    { month: '10월', income: 15500000, expense: 9200000 },
    { month: '11월', income: 16000000, expense: 11000000 },
    { month: '12월', income: 20000000, expense: 14000000 },
  ];
  
  // 테이블에 데이터 추가
  function populateProfitLossTable() {
    const tableBody = document.getElementById('profit-loss-table-body');
    tableBody.innerHTML = '';
  
    monthlyData.forEach(data => {
      const profitLoss = data.income - data.expense;  // 손익 계산
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${data.month}</td>
        <td>${data.income.toLocaleString()} 원</td>
        <td>${data.expense.toLocaleString()} 원</td>
        <td>${profitLoss.toLocaleString()} 원</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // 그래프 데이터
  function createProfitLossChart() {
    const ctx = document.getElementById('profit-loss-chart').getContext('2d');
    
    const months = monthlyData.map(data => data.month);
    const incomeData = monthlyData.map(data => data.income);
    const expenseData = monthlyData.map(data => data.expense);
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: '수익',
            data: incomeData,
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            fill: true,
          },
          {
            label: '지출',
            data: expenseData,
            borderColor: '#FF5733',
            backgroundColor: 'rgba(255, 87, 51, 0.2)',
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value.toLocaleString() + ' 원';
              }
            }
          }
        }
      }
    });
  }
  
  // 초기화
  populateProfitLossTable();
  createProfitLossChart();