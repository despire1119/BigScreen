<template>
  <div class="home">
  </div>
</template>

<script>
const arr1 = [
  {
    diseaseCode: '224251002',
    diseaseDisplaySeq: '2',
    diseaseName: '缺铁性贫血',
    diseaseSystemCode: '12425',
    diseaseSystemName: '血液、淋巴疾病',
    id: '40',
    isSelected: true,
    systemDisplaySeq: '13'
  },
  {
    diseaseCode: '224807003',
    diseaseDisplaySeq: '3',
    diseaseName: '肛周脓肿',
    diseaseSystemCode: '17026',
    diseaseSystemName: '肛周疾病',
    id: '41',
    isSelected: true,
    systemDisplaySeq: '14'
  },
  {
    diseaseCode: '224807002',
    diseaseDisplaySeq: '2',
    diseaseName: '痔疮',
    diseaseSystemCode: '17026',
    diseaseSystemName: '肛周疾病',
    id: '42',
    isSelected: true,
    systemDisplaySeq: '14'
  },
  {
    diseaseCode: '226122014',
    diseaseDisplaySeq: '14',
    diseaseName: '肝血管瘤',
    diseaseSystemCode: '12612',
    diseaseSystemName: '良、恶性肿瘤',
    id: '43',
    isSelected: true,
    systemDisplaySeq: '17'
  }
]
const arr2 = [
  {
    code: '4242510020201',
    diseaseCode: '224251002',
    diseaseName: '缺铁性贫血',
    name: '是否正在检查或住院治疗过程中？',
    seq: '1'
  },
  {
    code: '4242510020302',
    diseaseCode: '224251002',
    diseaseName: '缺铁性贫血',
    name: '请选择血红蛋白值：',
    seq: '2'
  },
  {
    code: '4261220140201',
    diseaseCode: '226122014',
    diseaseName: '肝血管瘤',
    name: '是否已经通过手术治疗切除？',
    seq: '3'
  },
  {
    code: '4261220140201',
    diseaseCode: '226122014',
    diseaseName: '肝血管瘤',
    name: '是否已经通过手术治疗切除？',
    seq: '3'
  }
]

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      imgList: [
        require('@/assets/images/banner.jpg'),
        require('@/assets/images/banner.jpg'),
        require('@/assets/images/banner.jpg'),
        require('@/assets/images/banner.jpg'),
        require('@/assets/images/banner.jpg')
      ],
      swiperOption: {
        loop: true,
        height: 300,
        autoplay: {
          delay: 10000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        slidesPerView: 1,
        centeredSlides: true,
        // effect: 'cube',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          progressbarFillClass: 'progress-fill',
          clickable: true
        },
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      innerSwiper: {
        loop: true,
        // loopAdditionalSlides: 1,
        slidesPerView: 2,
        loopedSlides: 5,
        height: 300,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        slideToClickedSlide: true,
        effect: 'coverflow',
        centeredSlides: true,
        coverflowEffect: {
          rotate: 1,
          stretch: 270,
          depth: 350,
          modifier: 1,
          slideShadows: false
        }
      }
    }
  },
  mounted() {
    console.log(this.diff(arr1, arr2))
    // for (const key in arr1[0]) {
    //   if (arr1[0].hasOwnProperty(key)) {
    //     const element = arr1[0][key];
    //     console.log(element)
    //   }
    // }
    for (const iterator of arr1) {
      console.log(iterator)
    }
    class Person {
      // 定义了一个名字为Person的类
      constructor(name, age) {
        // constructor是一个构造方法，用来接收参数
        this.name = name // this代表的是实例对象
        this.age = age
      }
      say() {
        // 这是一个类的方法，注意千万不要加上function
        return `我的名字叫${this.name}今年${this.age}岁了`
      }
    }
    const p = new Person('老王', 18)
    console.log(p.say())
  },
  methods: {
    slideTo(index) {
      console.log(index)
    },
    diff(arr1, arr2) {
      var a = arr1.map(function(item) {
        return item.diseaseCode
      })
      var b = arr2.map(function(item) {
        return item.diseaseCode
      })
      var diff = arr1
        .filter(function(item) {
          return b.indexOf(item.diseaseCode) === -1
        })
        .concat(
          arr2.filter(function(item) {
            return a.indexOf(item.diseaseCode) === -1
          })
        )
      return diff
    }
  }
}
</script>
<style lang="stylus" scoped>
// @import '~swiper/dist/css/swiper.css'
</style>
