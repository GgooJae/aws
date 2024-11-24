// 예시 데이터 (동적으로 서버에서 데이터 로드 예정)
const expensesData = [
    { expense: "임대비", amount: "1,000,000원", date: "2024-11-01", status: "지불 완료", month: "11" },
    { expense: "전기세", amount: "300,000원", date: "2024-11-05", status: "미지불", month: "11" },
    { expense: "유지비", amount: "500,000원", date: "2024-11-03", status: "미지불", month: "11" },
    { expense: "수도비", amount: "200,000원", date: "2024-11-04", status: "지불 완료", month: "11" },
    { expense: "임대비", amount: "1,000,000원", date: "2024-11-02", status: "지불 완료", month: "2" },
    { expense: "유지비", amount: "500,000원", date: "2024-11-03", status: "미지불", month: "2" }
  ];

  // 월별, 항목별, 상태별 관리비 필터링
  function filterExpenses() {
    const monthSelect = document.getElementById("monthSelect").value;
    const expenseSelect = document.getElementById("expenseSelect").value;
    const statusSelect = document.getElementById("statusSelect").value;
    const tbody = document.getElementById("expenseTable");

    // 필터링된 데이터 배열을 만듬
    const filteredData = expensesData.filter(item => {
      const matchMonth = (monthSelect === "" || item.month === monthSelect);
      const matchExpense = (expenseSelect === "" || item.expense === expenseSelect);
      const matchStatus = (statusSelect === "" || item.status === statusSelect);
      return matchMonth && matchExpense && matchStatus;
    });

    // 기존 테이블 내용 삭제
    tbody.innerHTML = "";

    // 필터링된 데이터로 테이블 내용 추가
    filteredData.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.expense}</td>
        <td>${item.amount}</td>
        <td>${item.date}</td>
        <td>${item.status}</td>
        <td><button class="edit-btn">수정</button> <button class="delete-btn">삭제</button></td>
      `;
      tbody.appendChild(row);
    });
  }

  // 페이지 로드 시 모든 데이터를 출력
  window.onload = filterExpenses;