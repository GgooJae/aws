// 예시 리뷰 데이터
const reviews = [
    {
      customerId: '12345',
      rating: 9,
      comment: '매우 만족!',
      date: '2024-11-24',
    },
    {
      customerId: '67890',
      rating: 8,
      comment: '좋았으나 개선 필요',
      date: '2024-11-23',
    },
    {
      customerId: '11223',
      rating: 10,
      comment: '완벽한 서비스였습니다!',
      date: '2024-11-22',
    },
    {
      customerId: '44556',
      rating: 7,
      comment: '가격이 조금 비쌌어요.',
      date: '2024-11-21',
    },
    {
      customerId: '78901',
      rating: 6,
      comment: '서비스가 조금 늦었어요.',
      date: '2024-11-20',
    },
  ];
  
  // 리뷰 목록 테이블 업데이트 함수
  function updateReviewsTable() {
    const tableBody = document.getElementById('reviews-table-body');
    tableBody.innerHTML = '';
  
    reviews.forEach(review => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${review.date}</td>
        <td>${review.customerId}</td>
        <td>${review.rating}</td>
        <td>${review.comment}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // 페이지 로드 시 리뷰 목록을 갱신
  window.onload = function() {
    updateReviewsTable();
  };
  
  // 리뷰 작성 폼 제출 이벤트
  document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // 폼 데이터 가져오기
    const customerId = document.getElementById('customer-id').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    const date = new Date().toLocaleDateString();  // 현재 날짜
    
    // 리뷰 객체 생성
    const review = {
      customerId: customerId,
      rating: rating,
      comment: comment,
      date: date
    };
  
    // 리뷰 데이터를 배열에 추가
    reviews.push(review);
  
    // 폼 초기화
    document.getElementById('review-form').reset();
  
    // 리뷰 목록 업데이트
    updateReviewsTable();
  });