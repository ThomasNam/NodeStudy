// 이벤트 리스너 연결 개수를 조절
process.setMaxListeners (15);

let onUncaughtException = (error) => {
    console.log (error + "예외 발생!!");
};

process.on ("exit", function (code) {
    console.log (code + " - 기존 EXIT 종료합니다.");
});

// exit 이벤트 연결
process.on ("exit", (code) => {
    console.log (code + " - EXIT 종료합니다.");
});

process.on ("uncaughtException", onUncaughtException);

// 이벤트 핸들러 제거
process.removeListener('uncaughtException', onUncaughtException);
