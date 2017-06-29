<template id="">
  <!--首页楼层 模版 s-->
     <!-- layout 1 s-->
     <div class="floor">
       <div class="floor_header flex">
            <h4 class="title cell_1">{{productFloor.name}}</h4>
            <a class="more js_more_cate"  :href="productFloor.h5Url">更多</a>
        </div>
       <div class="floor_conent">
         <ul class="g_list">
            <template v-for="_item in productFloor.prudouct">
              <li class="g_item">
                <router-link :to="'detail?productNo='+_item.productNo+'&isActivity=0'" class="js_pro_detail">
                      <div class="img_wrap">
                          <img v-lazy="_item.proImage" class="lazy" :title="_item.proName"  alt="_item.proName" lazy="loading"/>
                      </div>
                      <h6>{{_item.proName}}</h6>
                      <div class="tag">
                        月付：￥
                        <b>{{_item.monthAmount}}</b>
                        ×{{_item.monthnum}}
                      </div>
                  </router-link>
              </li>
            </template>
           </ul>
          </div>
          <div class="small_banner" v-if="productFloor.banner.length > 0">
            <div class="swiper-container02 swiper-container22">
                <swiper :options="swiperBannerOption">
                  <template v-for="(slide, index) in productFloor.banner">
                    <swiper-slide :keys="index">
                      <a class="swiper-slide banner_a" :href="slide.h5Url">
                          <img :src="slide.picUrl" class="lazy" :title="slide.name" :alt="slide.name" width="100%" lazy="loading"/>
                      </a>
                    </swiper-slide>
                  </template>
                  <div class="swiper-pagination bt6" slot="pagination"></div>
                </swiper>
            </div>
          </div>
       </div>
     <!-- layout 1 e-->
  <!--首页楼层 模版 e-->
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        // banner图片轮播图
        swiperBannerOption: {
          effect: 'fade',
          loop: this.productFloor.banner.length > 1 ? 2000 : false,
          autoplay: this.productFloor.banner.length > 1 ? 2000 : false,
          speed: 1000,
          initialSlide: 1,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
          preventClicksPropagation: false,
          touchMoveStopPropagation: false
        }
      }
    },
    props: {
      productFloor: {
        required: true,
        type: Object
      }
    }
  }
</script>
<style media="screen">
  .bt6{
    bottom: 6px !important;
  }
</style>
