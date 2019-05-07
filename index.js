
    function $(selector) {
      return document.querySelector(selector);
    }

    function $$(selector) {
      return document.querySelectorAll(selector);
    }

    // flipBox hide and show
    $('header .login').onclick = function(e) {
      e.stopPropagation();
      $('.flipBox').style.display = 'block';
    }
       
    document.addEventListener('click', function(){
      $('.flipBox').style.display = 'none';
    })
    
    //login and register translate
    $('.flipBox').addEventListener('click', function(e){
      e.stopPropagation();
      if(e.target.classList.contains('login')) {
        $('.flipBox').classList.remove('register');
        $('.flipBox').classList.add('login');
      }

      if(e.target.classList.contains('register')) {
        $('.flipBox').classList.remove('login');
        $('.flipBox').classList.add('register');
      }

      if(e.target.classList.contains('icon-close')) {
        $('.flipBox').style.display = 'none';
      }
    })

    $('.login-box form').addEventListener('submit',function(e){
      e.preventDefault();
      if(!/^\w{3,8}$/.test($('.login-box input[name=username]').value)) {
        $('.login-box .errmsg').innerText = '用户名需要输入3～8个字符，包括字母/数字/下划线';
        return false;
      }
      if(!/^\w{6,10}$/.test($('.login-box input[name=password]').value)) {
        $('.login-box .errmsg').innerText = '密码需要输入6～10个字符，包括字母/数字/下划线';
        return false;
      }
      this.submit();
    })

    $('.register-box form').addEventListener('submit', function(e){
      e.preventDefault();
      if(!/^\w{3,8}$/.test($('.register-box input[name=username]').value)) {
        $('.register-box .errmsg').innerText = '用户名需要输入3～8个字符，包括字母/数字/下划线';
        return false;
      }
      if(!/^\w{6,10}$/.test($('.register-box input[name=password]').value)) {
        $('.register-box .errmsg').innerText = '密码需要输入6～10个字符，包括字母/数字/下划线';
        return false;
      }
      if($('.register-box input[name=password]').value !== $('.register-box input[passwordAgain]').value){
        $('.register-box .errmsg'),innerText = '两次输入的密码不一致';
        return false;
      }

      this.submit();
    })