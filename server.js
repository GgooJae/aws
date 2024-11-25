const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// RDS 연결 설정
const db = mysql.createConnection({
  host: "mydb.cewlmnepsvpu.us-east-1.rds.amazonaws.com", // RDS 엔드포인트
  user: "admin", // RDS 사용자
  password: "rnwodbs1", // RDS 비밀번호
  database: "myrds" // 데이터베이스 이름
});

db.connect((err) => {
  if (err) {
    console.error("RDS 연결 실패:", err);
    return;
  }
  console.log("RDS 연결 성공!");
});

// 로그인 데이터 검증 라우트
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("쿼리 실패:", err);
      res.status(500).send("DB 오류");
      return;
    }
    if (results.length > 0) {
      res.send("로그인 성공!");
    } else {
      res.send("로그인 실패: 아이디 또는 비밀번호가 틀렸습니다.");
    }
  });
});

// 서버 실행
app.listen(3000, () => {
  console.log("서버 실행 중: http://localhost:3000");
});