<template>
  <view class="flex-col justify-start relative page">
    <view class="section"></view>
    <text class="text_2 pos_2">登录</text>
    <text class="text_3 pos_3">请输入账号密码</text>
    <view class="flex-col section_3 pos_4">
      <view class="flex-col items-start self-stretch group">
        <view class="flex-row justify-between self-stretch group_3">
          <view class="self-start font_2">
            <picker @change="onPickerChange" :value="pickerIndex" :range="companyNameList">
              <view class="picker">
                <text class="font text_4"><text style="color: red;">*</text>公司:</text>{{ companyName? companyName : '暂未选择公司，请先选择公司' }}
              </view>
            </picker>
          </view>
        </view>
      </view>
      <view class="flex-col items-start self-stretch group">
        <text class="font text_4">账号</text>
        <input class="mt-12 font_2 text_5" v-model="userName">
      </view>
      <view class="self-center divider"></view>
      <view class="flex-col self-stretch group_2">
        <text class="self-start font text_6">密码</text>
        <view class="flex-row justify-between items-center self-stretch mt-15">
          <input class="mt-12 font_2 text_5" v-model="pwd">
          <image class="image_4" src="../../static/page02/1b746dcbd2ade4c3245e00a59313e882.png" />
        </view>
        <view class="self-stretch divider_2 mt-15"></view>
      </view>
      <view class="flex-row justify-end items-center self-center section_4" @click="login">
        <text class="font_2 text_7">登录系统</text>
        <image class="ml-64 shrink-0 image_6" src="../../static/page02/221e14eb7a121aa669a952dd3a52b697.png" />
      </view>
      <view class="input section_5"></view>
    </view>
  </view>
</template>

<script>
	import {
		managerLogin
	} from '@/request/api.js'
	
	import {
		managerLogin2
	} from '@/request/api2.js'
	
	import {
		managerLogin3
	} from '@/request/api3.js'
	
	
import {
  setUserInfo
} from '@/request/publicData.js';
import JSEncrypt from 'jsencrypt';

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\n' +
  'nzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==';

export default {
  components: {},
  props: {},
  data() {
    return {
      companyName: '',
      company: '',
      userName: "",
      pwd: "",
      companyNameList: ["水电八局引江补汉1标", "火芽"],//, "测试"
      companyPathList: ["水电八局引江补汉1标", "火芽"],// , "测试"
      pickerIndex: 0,
    };
  },
  methods: {
    onPickerChange(e) {
      this.pickerIndex = e.detail.value;
      this.company = this.companyPathList[this.pickerIndex];
      this.companyName = this.companyNameList[this.pickerIndex];
    },
    async login() {
      if (this.company === '') {
        uni.showToast({
          title: '请先选择公司',
          icon: "error"
        });
        return false;
      }

try {
      let redirectUrl;
	  let res = null;
	  const user = this.getEncryptedUser();
      if (this.companyName === '火芽') {
        res = await managerLogin(user);
        redirectUrl = '/pages_pc/Page_03_dashboard/Page_03_dashboard';
      } else if (this.companyName === '测试') {
        res = await managerLogin3(user);
        redirectUrl = '/pages_bd/dashboard/dashboard';
      } else if (this.companyName === '水电八局引江补汉1标') {
        res = await managerLogin2(user);
        redirectUrl = '/pages/sdpage/dashboard/dashboard';
      } else {
        uni.showToast({
          title: '不支持的公司选择',
          icon: "error"
        });
        return false;
      }

        if (res.result!== 1) {
          this.showLoginError();
          return false;
        }

        uni.setStorageSync('X-Token', res.data['X-Token']);
        setUserInfo(res.data);
        uni.reLaunch({
          url: redirectUrl
        });
      } catch (error) {
        console.error('登录请求出错:', error);
        uni.showToast({
          title: '登录请求出错，请稍后重试',
          icon: "error"
        });
      }
    },
    getEncryptedUser() {
      const encryptor = new JSEncrypt();
      encryptor.setPublicKey(publicKey);
      return {
        managerName: this.userName,
        managerPassword: encryptor.encrypt(this.pwd)
      };
    },
    showLoginError() {
      uni.showToast({
        title: '用户或密码错误，请重新输入',
        icon: "error"
      });
    }
  }
};
</script>


<style scoped lang="css">
	.ml-5 {
		margin-left: 10rpx;
	}

	.mt-15 {
		margin-top: 30rpx;
	}

	.page {
		background-color: #ffffff;
		background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		height: 100%;
	}

	.section {
		background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 750rpx;
		height: 1624rpx;
	}

	.section_2 {
		padding: 26rpx 28rpx 36rpx 36rpx;
		background-color: #ffffff00;
	}

	.pos {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}

	.text {
		color: #ffffff;
		font-size: 30rpx;
		font-family: Avenir LT Std;
		line-height: 21.78rpx;
	}

	.image {
		width: 34rpx;
		height: 22rpx;
	}

	.image_2 {
		width: 30rpx;
		height: 22rpx;
	}

	.image_3 {
		width: 48rpx;
		height: 22rpx;
	}

	.text_2 {
		color: #ffffff;
		font-size: 68rpx;
		font-family: Source Sans Pro;
		font-weight: 600;
		line-height: 63.58rpx;
	}

	.pos_2 {
		position: absolute;
		left: 60rpx;
		top: 444rpx;
	}

	.text_3 {
		color: #ffffff;
		font-size: 40rpx;
		font-family: Source Sans Pro;
		line-height: 37.2rpx;
		opacity: 0.61;
	}

	.pos_3 {
		position: absolute;
		left: 60rpx;
		top: 548rpx;
	}

	.section_3 {
		padding-top: 56rpx;
		background-image: url('../../static/page02/a59b77dda22d23ecff5227fc03813b52.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.pos_4 {
		position: absolute;
		left: 0;
		right: 0;
		top: 658rpx;
	}

	.group {
		padding: 44rpx 60rpx;
	}

	.font {
		font-size: 24rpx;
		font-family: Source Sans Pro;
		line-height: 21.78rpx;
		color: #a5a5a5;
	}

	.text_4 {
		line-height: 21.58rpx;
	}

	.font_2 {
		font-size: 32rpx;
		font-family: Source Sans Pro;
		line-height: 30.34rpx;
	}

	.text_5 {
		color: #323643;
	}

	.divider {
		background-color: #e1e3e8;
		width: 630rpx;
		height: 2rpx;
	}

	.group_2 {
		margin-top: 70rpx;
		padding: 0 60rpx;
	}

	.text_6 {
		line-height: 22.12rpx;
	}

	.image_5 {
		width: 180rpx;
		height: 18rpx;
	}

	.image_4 {
		width: 36rpx;
		height: 26rpx;
	}

	.divider_2 {
		background-color: #e1e3e8;
		height: 2rpx;
	}

	.section_4 {
		margin-top: 80rpx;
		padding: 32rpx 56rpx 36rpx;
		background-image: url('../../static/page02/4c049c06cf447f43a007de802e7ebe84.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		width: 630rpx;
	}

	.text_7 {
		margin-left: 208rpx;
		color: #ffffff;
		font-weight: 600;
		line-height: 30.36rpx;
	}

	.image_6 {
		width: 52rpx;
		height: 36rpx;
	}

	.input {
		align-self: stretch;
		margin-top: 340rpx;
	}

	.section_5 {
		background-color: #d3d3d300;
		height: 32rpx;
	}
</style>