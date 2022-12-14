$("input#date").daterangepicker({
  locale: {
    "separator": " ~ ", // 시작일시와 종료일시 구분자
    "format": 'YYYY-MM-DD', // 일시 노출 포맷
    "applyLabel": "확인", // 확인 버튼 텍스트
    "cancelLabel": "취소", // 취소 버튼 텍스트
    "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
    "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
  },
  showDropdowns: true, // 년월 수동 설정 여부
  autoApply: true, // 확인/취소 버튼 사용여부
});

$("#txtDate").on('show.daterangepicker', function (ev, picker) {
  $(".yearselect").css("float", "left");
  $(".monthselect").css("float", "right");
  $(".cancelBtn").css("float", "right");
});
