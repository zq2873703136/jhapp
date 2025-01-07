<template>
  <view class="flex-col page">
    <view class="flex-col section">
      <view class="flex-row justify-between items-center section_2" style="opacity:0">
        <view class="flex-row">
          <image
            class="image"
            src="../../../static/page03/53c6eeb7f3e2e414d1f8a0f28a6975b1.png"
          />
          <image
            class="image_2 ml-5"
            src="../../../static/page03/f1c70d0ca1d0515ce7924b87c68e033d.png"
          />
          <image
            class="image_3 ml-5"
            src="../../../static/page03/f00bac70f8143b2d222aa9e7b9a06045.png"
          />
        </view>
      </view>
      <view class="flex-col group mt-25">
        <view class="flex-row justify-between items-end self-stretch">
          <view class="flex-col">
            <text class="self-start text_2">Hi  {{ userName }} ！</text>
            <view class="mt-20 flex-col self-stretch">
              <view class="flex-row items-center">
                <text class="font text_3">{{company}}公司</text>
                <text class="font text_3 text_4">|</text>
                <text class="font text_3">{{department}}</text>
              </view>
            </view>
          </view>
          
        </view>
        <image
          class="self-start image_5 image_9"
          src="../../../static/page03/b725a89c76a8787406f58ee436015aa2.png"
        />
        <view class="flex-row justify-between items-center self-stretch group_3">
          <view class="flex-col group_4">
            <image
              class="self-end image_5"
              src="../../../static/page03/e66d955fb372e4b32cd111acbde3f9e7.png"
            />
            <image
              class="self-start image_7"
              src="../../../static/page03/3cbe2a7f0187fa4c28d57b1fd983c295.png"
            />
          </view>
          <image
            class="image_5"
            src="../../../static/page03/ed86351ff5d3784630ba0592be0f033f.png"
          />
        </view>
      </view>
    </view>
    <view class="flex-col justify-start relative section_3">
      <view class="grid">
        <view class="flex-col items-start grid-item" @click="push('/pages/page/page1/index')">
          <image
            class="image_10"
            src="../../../static/page03/b4c341d080ffd38286c5d1feac29609b.png"
          />
          <text class="font_2 text_6 mt-15">任务单查询</text>
        </view>
		<view class="flex-col items-start grid-item" @click="push('/pages/Page_08_pay_online_add/Page_08_pay_online')">
		  <image
		    class="image_10"
		    src="../../../static/page03/0328a03fc3c8d3d8d01cc425d32d3f82.png"
		  />
		  <text class="font_2 text_6 mt-15">新增任务单</text>
		</view>


        <view class="flex-col items-start grid-item"  @click="push('/pages/page/page4/index')">
          <image
            class="image_10"
            src="../../../static/page03/530292bbb18ea7cff45b80c1df9e218c.png"
          />
          <text class="mt-16 font_2 text_6">基本级配单</text>
        </view>
        <view class="flex-col items-start grid-item" @click="push('/pages/page/page5/index')">
          <image
            class="image_10"
            src="../../../static/page03/907eb29e029f4eef674a6a2eec517cc7.png"
          />
          <text class="mt-14 font_2 text_6">新增配比单</text>
        </view>

        <view class="flex-col items-start grid-item_2">
          <image
            class="image_10"
            src="../../../static/page03/8d8de440c6f8e53066f35976bb696a4d.png"
          />
          <text class="mt-14 font_2 text_7">车辆识别卡维护</text>
        </view>
        <view class="flex-col items-start grid-item">
          <image
            class="image_10"
            src="../../../static/page03/f53082c3724c81b77a3456859c8d3735.png"
          />
          <text class="mt-14 font_2 text_6">新增识别卡</text>
        </view>
        <view class="flex-col items-start grid-item" @click="push('/pages/page/page7/index')">
          <image
            class="image_10"
            src="../../../static/page03/4c501b985b82e504750bc33ea03317e8.png"
          />
          <text class="mt-14 font_2 text_6">调度车辆管理</text>
        </view>

        <view class="flex-col items-start grid-item" @click="push('/pages/page/page9/index')">
          <image
            class="image_10"
            src="../../../static/page03/b48a3f695f4da2e87892440ee0c4c6cd.png"
          />
          <text class="font_2 text_6 mt-15">新增调度车辆</text>
        </view>
        <view class="flex-col items-start grid-item">
          <image
            class="image_10"
            src="../../../static/page03/2d0a62cede497a5dd52a0f63303b6128.png"
          />
          <text class="font_2 text_6 mt-15">统计查询管理</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
	
	import {
		getUserInfo,
		setUserInfo
	} from '@/request/publicData.js'
	
	
  export default {
    components: {},
    props: {},
    data() {
      return {
		  userName:'',
		  company:'混凝土',
		  department:''
	  };
    },
	created() {
		getUserInfo().then((res)=>{
			console.log('res:::',res)
			this.department = res.data.departmentName
			this.userName = res.data.username
			// console.log('this.userName', this.userName)
		})
	},
    methods: {
		push(url) {
			uni.navigateTo({
				url:url
			})
		},
		fun(){}
	},
  };
</script>

<style scoped lang="css">
  .ml-5 {
    margin-left: 10rpx;
  }
  .mt-25 {
    margin-top: 50rpx;
  }
  .ml-47 {
    margin-left: 94rpx;
  }
  .mt-15 {
    margin-top: 30rpx;
  }
  .page {
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .section {
    padding-bottom: 1188rpx;
    background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
  }
  .section_2 {
    padding: 26rpx 32rpx 36rpx;
    background-color: #ffffff00;
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
  .group {
    padding: 0 32rpx;
  }
  .text_2 {
    color: #ffffff;
    font-size: 60rpx;
    font-family: Source Sans Pro;
    line-height: 54.66rpx;
  }
  .font {
    font-size: 36rpx;
    font-family: Source Sans Pro;
    line-height: 33.02rpx;
    color: #ffffff;
  }
  .text_3 {
    line-height: 31.82rpx;
    opacity: 0.61;
  }
  .text_4 {
    margin-left: 16rpx;
  }
  .text-wrapper {
    padding: 6rpx 0 24rpx;
    background-image: url('../../../static/page03/a83a34ee50dda0fe06064393a2bd36b4.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 168rpx;
  }
  .text_5 {
    color: #6184c7;
    font-size: 28rpx;
    font-family: Source Sans Pro;
    line-height: 18.54rpx;
  }
  .image_5 {
    width: 6rpx;
    height: 6rpx;
  }
  .image_8 {
    margin-right: 12rpx;
  }
  .image_6 {
    margin-top: 152rpx;
  }
  .image_4 {
    width: 124rpx;
    height: 124rpx;
  }
  .group_2 {
    padding: 0 20rpx;
  }
  .image_7 {
    width: 26rpx;
    height: 26rpx;
  }
  .image_9 {
    margin-top: 28rpx;
  }
  .group_3 {
    margin-top: 16rpx;
    padding-left: 72rpx;
    padding-right: 16rpx;
  }
  .group_4 {
    width: 382.4rpx;
  }
  .section_3 {
    margin-top: -1202rpx;
    padding: 64rpx 0 98rpx;
    background-image: url('../../../static/page03/e91b485ad2bdd79a31d01eeb6bd570da.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .grid {
    margin: 0 32rpx;
    height: 1800rpx;
    display: grid;
    grid-template-rows: repeat(6, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 34rpx;
    column-gap: 36rpx;
  }
  .grid-item {
    padding: 36rpx 32rpx 64rpx;
    background-image: url('../../../static/page03/3c24d88bf543c00b8bfee2a1326bb04f.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .image_10 {
    width: 112rpx;
    height: 112rpx;
  }
  .font_2 {
    font-size: 36rpx;
    font-family: Source Sans Pro;
    line-height: 33.02rpx;
    color: #000000;
  }
  .text_6 {
    margin-left: 8rpx;
  }
  .grid-item_2 {
    padding: 36rpx 32rpx 64rpx;
    background-image: url('../../../static/page03/ef122f42288e3994e2147b0082f658e6.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .text_7 {
    margin-left: 8rpx;
  }
</style>