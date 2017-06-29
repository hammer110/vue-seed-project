<template>
  <section class="modelThree">
    <div class="floor_header flex">
        <h4 class="title cell_1">{{productFloor.name}}</h4>
        <a class="more js_more_cate" :href="productFloor.h5Url">更多</a>
    </div>
    <div class="floor_conent">
      <ul class="layoutType_box3">
        <template v-for="(_item, index) in productFloor.prudouct">
          <li :class="'lay_it'+(index+1)">
            <a :href="_item.urlContent"  class="js_pro_detail">
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
                <a class="swiper-slide banner_a" :href="slide.h5Url">
                    <img :src="slide.picUrl" class="lazy" :title="slide.name" :alt="slide.name" width="100%" lazy="loading"/>
                </a>
              </swiper-slide>
            </template>
            <div class="swiper-pagination bt6" slot="pagination"></div>
          </swiper>
      </div>
    </div>
  </section>
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
