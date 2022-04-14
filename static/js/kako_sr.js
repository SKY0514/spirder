 Kakao.init('27184a3fcd905a4935b964caebd1e8d7');
  function sendLink() {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MZ언어 테스트',
        description: '당신의 신조어 언어 수준을 테스트하고 공유해보세요!',
        imageUrl:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/726/57a5b86ea74e692c0c356bb3ed9fad18_res.jpeg',
        link: {
          mobileWebUrl: 'http://mzquiz.site',
          webUrl: 'http://mzquiz.site',
        },
      },
      buttons: [
        {
          title: 'TEST 시작하기',
          link: {
            mobileWebUrl: 'http://mzquiz.site',
            webUrl: 'http://mzquiz.site',
          },
        },
      ],
    })
  }
