<template>
  <div class="bg">
    <div id="back">
      <div class="backRight"></div>
      <div class="backLeft"></div>
    </div>
    <div id="slideBox">
      <div class="topLayer">
        <div class="left">
          <div class="content">
            <h2>注册</h2>
            <form method="post" onsubmit="return false;">
              <div class="form-group">
                <input type="text" placeholder="用户名" v-model="registerFrom.userName">
              </div>
              <div class="form-group">
                <input type="password" placeholder="密码" v-model="registerFrom.userPwd">
              </div>
              <div class="form-group">
                <input type="password" placeholder="确认密码">
              </div>
              <div class="form-group">
                <input type="text" placeholder="验证码">
              </div>
            </form>
            <button @click="goLeft" class="off">登入</button>
            <button @click="register">注册</button>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <h2>Welcome</h2>
            <form method="post" onsubmit="return false;">
              <div class="form-group">
                <label for="username" class="form-label">用户名</label>
                <input type="text" v-model="loginForm.userName">
              </div>
              <div class="form-group">
                <label for="password" class="form-label">密码</label>
                <input type="password" v-model="loginForm.userPwd">
              </div>
              <button @click="goRight" class="off">注册</button>
              <button @click="login" type="submit">登入</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      loginForm: {
        userName: '',
        userPwd: ''
      },
      registerFrom: {
        userName: '',
        userPwd: ''
      }
    }
  },
  methods: {
    goRight() {
      $('#slideBox').animate({
        'marginLeft': '0'
      });
      $('.topLayer').animate({
        'marginLeft': '100%'
      });
    },
    goLeft() {
      $('#slideBox').animate({
        'marginLeft': '50%'
      });
      $('.topLayer').animate({
        'marginLeft': '0'
      });
    },
    login() {
      var self = this;
      this.$store.dispatch('Login', this.loginForm).then((res) => {
        if (res === 'error') return
        let role = self.$store.getters.role
        console.log(role)
        this.$router.push({ path: '/index' })
      })
    },
    register() {
      this.$store.dispatch('Register', this.registerFrom).then((res) => {
        if (res === 'error') return
        $('#slideBox').animate({
          'marginLeft': '50%'
        });
        $('.topLayer').animate({
          'marginLeft': '0'
        });
      })
    }
  }
}
</script>

<style lang="less" scoped>
body {
  height: 100%;
  overflow: hidden;
  width: 100% !important;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}



.backRight {
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background: #3498db url('../../static/photo-1429041966141-44d228a42775.jpg');
  background-size: cover;
  background-position: 50% 50%;
}

.backLeft {
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  background: #e74c3c url('../../static/photo-1428279148693-1cf2163ed67d.jpg');
  background-size: cover;
  background-position: 50% 50%;
}

#back {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -999;
}

#slideBox {
  width: 50%;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  margin-left: 50%;
  position: absolute;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.topLayer {
  width: 200%;
  height: 100%;
  position: relative;
  left: 0;
  left: -100%;
}

.left {
  width: 50%;
  height: 100%;
  background: #2C3034;
  left: 0;
  position: absolute;
}

.right {
  width: 50%;
  height: 100%;
  background: #f9f9f9;
  right: 0;
  position: absolute;
}

.content {
  width: 250px;
  margin: 0 auto;
  top: 30%;
  position: absolute;
  left: 50%;
  margin-left: -125px;
}

.left .content {
  top: 20%;
}

.content h2 {
  color: #20A0FF;
  font-weight: 300;
  font-size: 35px;
}

button {
  background: #20A0FF;
  padding: 10px 16px;
  width: auto;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  line-height: 16px;
  letter-spacing: 0.5px;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  margin: 15px 15px 15px 0;
  transition: all 0.25s;
}

button:hover {
  background: #0288D1;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

.off {
  background: none;
  color: #20A0FF;
  box-shadow: none;
}

.right .off:hover {
  background: #eee;
  color: #20A0FF;
  box-shadow: none;
}

.left .off:hover {
  box-shadow: none;
  color: #20A0FF;
  background: #363A3D;
}

input {
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #45494C;
  font-size: 14px;
  color: #959595;
  padding: 8px 0;
  margin-top: 20px;
}
</style>
