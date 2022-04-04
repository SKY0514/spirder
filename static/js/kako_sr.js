function  kakoShare(){
  Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: '오늘의 디저트',
    description: '아메리카노, 빵, 케익',
    imageUrl:
      'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
    link: {
      mobileWebUrl: 'https://developers.kakao.com',
      androidExecutionParams: 'test',
    },
  },
  social: {
    likeCount: 10,
    commentCount: 20,
    sharedCount: 30,
  },
  buttons: [
    {
      title: '웹으로 이동',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
      },
    }
  ]
});
}
