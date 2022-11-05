const missingPeopleData = [{
    id: 1,
    name: '박근혁',
    gender: 'male',
    age: 39,
    isDisabled: true,
    missingDate: '2013-07-26',
    missingLoca: '서울특별시 관악구 봉천동',
    missingCase: '저녁 식사 후 덥다고 집을 나간 뒤 실종',
    keyword: [
      '178cm', '71kg', '정신장애', '당뇨병'
    ]
  },
  {
    id: 2,
    name: '이동가',
    gender: 'male',
    age: 36, //현재 나이
    isDisabled: false,
    missingDate: '1993-06-01',
    missingLoca: '경상남도 창원시 마산회원구 내서읍 삼계리 1-0, 배순선 댁',
    missingCase: '어머니 지인의 집에 여동생과 맡겨진 후 실종',
    keyword: [
      '오똑한 콧대', '호리호리한 체형', '목 안쪽에 살짝 패인자국', '양쪽 어금니 금도금'
    ]
  },
  {
    id: 3,
    name: '구효린',
    gender: 'female',
    age: 12,
    isDisabled: false,
    missingDate: '2022-10-24',
    missingLoca: '경상남도 김해시 진영로',
    missingCase: '불명',
    keyword: [
      '통통한 체격', '둥근 얼굴형', '흑색 긴머리'
    ]
  },
  {
    id: 4,
    name: '강선미',
    gender: 'female',
    age: 52,
    isDisabled: true,
    missingDate: '2006-07-30',
    missingLoca: '충청북도 괴산군 청안면',
    missingCase: '집에서 나간 후 실종',
    keyword: [
      '분홍색 티셔츠', '청색 츄리닝', '지적장애', '언어장애', '말을 하거나 글씨를 쓸 줄 모름', '인지능력 없음'
    ]
  },
  {
    id: 5,
    name: '이다은',
    gender: 'female',
    age: 34,
    isDisabled: false,
    missingDate: '1991-03-12',
    missingLoca: '대구광역시 남구 대명4동',
    missingCase: '집 앞에 목마 타러 혼자 내려갔다가 실종',
    keyword: [
      '흑색 긴머리', '왼쪽 손목 희미한 점', '앞니가 톱날처럼 갈라짐', '등과 팔에 흰 점', '제비초리 있음', '빨간색 티셔츠', '빨간색 긴바지', '흰색 운동화'
    ]
  },
  {
    id: 6,
    name: '김일형',
    gender: 'male',
    age: 21,
    isDisabled: false,
    missingDate: '2010-09-04',
    missingLoca: '충청남도 서산시 부석면 강당리',
    missingCase: '충남 서산 AB지구 간척지에서 자전거를 타고 놀다가 실종',
    keyword: [
      '가슴에 별 그림이 있는 흰색 메리야스', '청색 반바지', '청색 장화', '125cm', '20kg', '자폐성 장애', '갸름한 얼굴형', '검정색 스포츠머리'
    ]
  },
  {
    id: 7,
    name: '최민석',
    gender: 'male',
    age: 35,
    isDisabled: false,
    missingDate: '1991-03-24',
    missingLoca: '광주광역시 북구 임동',
    missingCase: '집 근처 교회 앞에서 세발자전거 타며 놀다가 실종',
    keyword: [
      '하늘색 점퍼', '주황색 구두', '내복바지', '이마 왼쪽에 찢어진 흉터', '쌍꺼풀', '왼쪽 허리 위에 종기'
    ]
  },
  {
    id: 8,
    name: '김경춘',
    gender: 'male',
    age: 69,
    isDisabled: true,
    missingDate: '2008-05-14',
    missingLoca: '경상북도 구미시 형곡동',
    missingCase: '운동하러 나갔다 안 들어옴',
    keyword: [
      '베이지색 티셔츠', '남색 츄리닝', '밤색 구두', '18K 시계', '다이아 반지', '172cm', '62kg', '지적장애 3급', '눈썹에 사마귀', '침 자주 흘림', '검정색 곱슬머리', '걸을 때 뒷짐'
    ]
  },
  {
    id: 9,
    name: '송윤선',
    gender: 'female',
    age: 32,
    isDisabled: false,
    missingDate: '1992-07-23',
    missingLoca: '서울특별시 종로구 숭인1동 자택',
    missingCase: '자택 내에서 잠을 자던 중 보호자가 잠깐 자리를 비운 사이에 없어짐',
    keyword: [
      '목 오른쪽에 3센치 정도의 긴 흰색점', '흰색계통 민무늬 긴팔 잠바', '흰색계통 민무늬 긴 잠옷'
    ]
  },
  {
    id: 10,
    name: '안현수',
    gender: 'male',
    age: 45,
    isDisabled: false,
    missingDate: '1978-03-01',
    missingLoca: '서울특별시 영등포구',
    missingCase: '아이 아버지가 친구한테 맡겼는데, 그 이후에 연락두절',
    keyword: [
      '불상'
    ]
  },
  {
    id: 11,
    name: '박시성',
    gender: 'male',
    age: 51,
    isDisabled: true,
    missingDate: '1985-12-05',
    missingLoca: '경상남도 사천시 삼천포시내 시내버스',
    missingCase: '시내버스 내 보호자 이탈',
    keyword: [
      '150cm', '45kg', '위 앞니가 새총에 깨짐'
    ]
  },
  {
    id: 12,
    name: '조수민',
    gender: 'female',
    age: 36,
    isDisabled: false,
    missingDate: '2002-09-13',
    missingLoca: '전라남도 순천시 저전',
    missingCase: '학교자율학습을 마치고 집으로 귀가 하던 중 실종',
    keyword: [
      '155cm', '50kg', '왜소한 체격', '흑색 단발', '두툼한 입술', '둥근 얼굴형'
    ]
  },
  {
    id: 13,
    name: '강문상',
    gender: 'male',
    age: 46,
    isDisabled: true,
    missingDate: '2002-11-12',
    missingLoca: '서울특별시 관악구 신림8동',
    missingCase: '집에서 나간 후 돌아오지 않음',
    keyword: [
      '178cm', '78kg', '정신장애 2급', '입술 밑과 눈 옆에 흉터 자국', '어깨가 약간 구부정함'
    ]
  },
  {
    id: 14,
    name: '민경미',
    gender: 'female',
    age: 35,
    isDisabled: true,
    missingDate: '2001-12-08',
    missingLoca: '대구광역시 서구 북부버스정류장',
    missingCase: '대구북부정류장에서 친구와 택시를 타고 내린 뒤 실종',
    keyword: [
      '165cm', '48kg', '눈이 나쁨'
    ]
  },
  {
    id: 15,
    name: '김도연',
    gender: 'male',
    age: 37,
    isDisabled: true,
    missingDate: '2001-01-29',
    missingLoca: '경상북도 경주시 보문단지 한국콘도',
    missingCase: '경주로 야유회 갔다가 실종',
    keyword: [
      '152cm', '빨간색 티셔츠', '회색 츄리닝', '검정색 파카', '흰색 운동화', '긴 얼굴형', '지적장애 1급', '눈동자 초점이 흐림', '이가 고르지 못함', '우측 두피에 10cm 가량의 흉터'
    ]
  }
]

missingPeopleData.map(
  (data) => {
    let article = document.createElement('article');
    article.setAttribute('id', data.id)
    article.innerHTML = `<a href="#"><div class="person-image" style="background-image: url(../assets/missingperson/${data.id}.png)"></div><div class="person-info"><span class="info-name">${data.name} (${data.gender=='male'? '남' : '여'}, ${data.age}세)</span><span class="info-disable">장애유무 | ${data.isDisabled ? '장애인' : '비장애인'}</span><span class="info-date">실종일자 | ${data.missingDate}</span><span class="info-location">실종지역 | ${data.missingLoca}</span></div></a>`
    $('.search-results').append(article)
  }
)