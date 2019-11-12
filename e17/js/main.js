$ (document).ready(function(){
  console.log('THE DOCUMENT IS READY! DO SOMETHING AWESOME')
$ ('.Green').click(function(){
    $ ('.number-1').css ('text-align','left');
      $ ('number-1').toggleClass ('align-left');
      $ ('.Taro').click(function(){
          $ ('.number-2').css ('text-align','left');
            $ ('number-2').toggleClass ('align-left');
  });
});
