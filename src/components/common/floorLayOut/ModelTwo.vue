<template>
  <div class="floor">
     <div class="floor_header flex">
       <h4 class="title cell_1">{{productFloor.name}}</h4>
       <a class="more js_more_cate" :href="productFloor.h5Url">更多</a>
     </div>
     <div class="floor_conent" id="layoutType2">
         <ul class="layoutType_box2">
           <template v-for="(_item, index) in productFloor.prudouct">
             <li class="lay_item2" :class="{'layoutType_box22': index < 2, 'layoutType_box2': index>=2}">
                 <a :href="_item.urlContent" class="js_pro_detail">
                    <img v-lazy="_item.picture" class="lazy" :title="_item.proName"  :alt="_item.proName" lazy="loading"/>
                </a>
             </li>
             </template>
         </ul>
      </div>
      <div class="small_banner" v-if="productFloor.banner.length > 0">
        <div class="swiper-container02 swiper-container22">
            <swiper :options="swiperBannerOption">
              <template v-for="(slide, index) in productFloor.banner">
                <swiper-slide :keys="index">
                  <a class="swiper-slide banner_a"  :href="slide.h5Url">
                      <img :src="slide.picUrl" class="lazy"  :title="slide.name"  :alt="slide.name" width="100%" lazy="loading"/>
                  </a>
                </swiper-slide>
              </template>
              <div class="swiper-pagination bt6" v-show="productFloor.banner.length > 1" slot="pagination"></div>
            </swiper>
        </div>
      </div>
  </div>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
  },
  components: {
    "swiper": swiper,
    "swiperSlide": swiperSlide
  }
}
</script>
<style media="screen" lang="scss" scoped>
  li.layoutType_box22{
    float: left;
    width: 50%;
  }
  li.layoutType_box2 {
    float: left;
    width: 33%;
  }
  li.layoutType_box2:nth-of-type(3n-1) {
    width: 34%;
  }
  .layoutType_box22:after{
    left: 0;
  }
  .layoutType_box2 li{
    border-right: 1px solid #eeeeee;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
  }
  #layoutType2 li{
    border-top: 1px solid #eeeeee;
  }
  li.layoutType_box2:nth-of-type(3n-1) {
    border-right: none;
  }
</style>
