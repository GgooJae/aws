// 예시 매출 데이터
const salesData = [
    { date: "2024-11-01", time: "12:30", menu: "짜장면", price: "6,000원", quantity: 2, total: "12,000원", delivery: "홀", payment: "카드", month: "11" },
    { date: "2024-11-01", time: "14:00", menu: "짬뽕", price: "7,000원", quantity: 1, total: "7,000원", delivery: "배달", payment: "현금", month: "11" },
    { date: "2024-10-15", time: "18:00", menu: "탕수육", price: "15,000원", quantity: 1, total: "15,000원", delivery: "홀", payment: "카드", month: "10" },
    { date: "2024-11-02", time: "13:15", menu: "볶음밥", price: "5,000원", quantity: 3, total: "15,000원", delivery: "배달", payment: "현금", month: "11" }
  ];

  // 월별 및 결제방식 필터링
  function filterSales() {
    const monthSelect = document.getElementById("monthSelect").value;
    const paymentSelect = document.getElementById("paymentSelect").value;
    const tbody = document.getElementById("salesTable");

    // 필터링된 데이터 배열을 만듬
    const filteredData = salesData.filter(item => {
      const matchMonth = (monthSelect === "" || item.month === monthSelect);
      const matchPayment = (paymentSelect === "" || item.payment === paymentSelect);
      return matchMonth && matchPayment;
    });

    // 기존 테이블 내용 삭제
    tbody.innerHTML = "";

    // 필터링된 데이터로 테이블 내용 추가
    filteredData.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.date}</td>
        <td>${item.time}</td>
        <td>${item.menu}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>${item.total}</td>
        <td>${item.delivery}</td>
        <td>${item.payment}</td>
      `;
      tbody.appendChild(row);
    });
  }

  // 페이지 로드 시 모든 데이터를 출력
  window.onload = filterSales;