const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 웹훅 수신 허용
app.use(express.json());

// 기본 접속 확인
app.get('/', (req, res) => {
  res.send('🟢 TradingGear 백엔드 서버가 실행 중입니다.');
});

// TradingView 웹훅 수신용
app.post('/signal', (req, res) => {
  console.log('📩 웹훅 수신:', req.body);
  res.status(200).send('✅ 신호 수신 완료');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행 중`);
});
