

function  kakoShare(){
  const level = document.querySelector('.level')
  if(level == 1){
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MZ언어 테스트 결과',
        description: '당신의 신조어 수준은 아직 태어나기 전. 스파이더스와 함께 새로 태어나요~',
        imageUrl: url('../images/egg.png'),
        link: {
          mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_1.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          WebUrl: 'http://localhost:63342/04_05/templates/page/result_1.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
        },
      },
      buttons: [
        {
          title: '결과 확인하기',
          link: {
            mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_1.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
            WebUrl: 'http://localhost:63342/04_05/templates/page/result_1.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          },
        }
      ]
    });
  }else if(level == 2){
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MZ언어 테스트 결과',
        description: '아 응애에요~ 당신의 신조어 수준은 신생아.',
        imageUrl: url('../images/baby.png'),
        link: {
          mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_2.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          WebUrl: 'http://localhost:63342/04_05/templates/page/result_2.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
        },
      },
      buttons: [
        {
          title: '결과 확인하기',
          link: {
            mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_2.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
            WebUrl: 'http://localhost:63342/04_05/templates/page/result_2.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          },
        }
      ]
    });
  }else if(level == 3){
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MZ언어 테스트 결과',
        description: '당신은 분명 X세대! MZ세대와 소통하려면 좀 더 분발하세요~',
        imageUrl: url('../images/삐삐.png'),
        link: {
          mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_3.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          WebUrl: 'http://localhost:63342/04_05/templates/page/result_3.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
        },
      },
      buttons: [
        {
          title: '결과 확인하기',
          link: {
            mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_3.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
            WebUrl: 'http://localhost:63342/04_05/templates/page/result_3.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          },
        }
      ]
    });
  }else if(level == 4){
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MZ언어 테스트 결과',
        description: '이젠 나도 유행어 알딱잘깔센',
        imageUrl: url('../images/싸이월드.png'),
        link: {
          mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_4.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          WebUrl: 'http://localhost:63342/04_05/templates/page/result_4.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
        },
      },
      buttons: [
        {
          title: '결과 확인하기',
          link: {
            mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_4.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
            WebUrl: 'http://localhost:63342/04_05/templates/page/result_4.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          },
        }
      ]
    });
  }else if(level == 5){
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MZ언어 테스트 결과',
        description: '홀리몰리 과카몰리 로보카폴리 유행어 전문가',
        imageUrl: url('../images/mz세대 이미지.jpg'),
        link: {
          mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_5.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          WebUrl: 'http://localhost:63342/04_05/templates/page/result_5.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
        },
      },
      buttons: [
        {
          title: '결과 확인하기',
          link: {
            mobileWebUrl: 'http://localhost:63342/04_05/templates/page/result_5.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
            WebUrl: 'http://localhost:63342/04_05/templates/page/result_5.html?_ijt=bhvtd30tcoi5ppnfuvsmm88dtl&_ij_reload=RELOAD_ON_SAVE',
          },
        }
      ]
    });
  }
}



