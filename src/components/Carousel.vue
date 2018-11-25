<script>
    export default {
        name: "Carousel",
        data(){
          return {
              currentIndex: 0,
          }
        },
        created(){
            let self = this
            self.play()
        },
        destroyed(){
            this.stop()
        },
        methods:{
          animate(offset) {
           let self = this
          //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
          //且style.left获取的是字符串，需要用parseInt()取整转化为数字
          let newLeft = parseInt(self.carouselElement.style.left) + offset;
             self.carouselElement.style.left = newLeft + 'px';
          //无限滚动判断
            if (newLeft > 4*self.initLeft) {
                self.carouselElement.style.left = -(self.initLeft * 2)+ 'px';
            }
            if (newLeft < -(self.initLeft * 3)) {
                self.carouselElement.style.left = 4* self.initLeft + 'px';
            }
           },
            topClick(){
               let self = this
                self.currentIndex -= 1;
                if ( self.currentIndex <= 1) {
                    self.currentIndex = self.num
                }
                self.animate(self.initLeft);
            },
            nexClick($event){
                let self = this
                self.currentIndex += 1
              if(self.currentIndex >= self.num){
                  self.currentIndex = 1;
              }
                self.animate(-self.initLeft);
            },
            buttonClick($index){
              let self = this
               /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
               /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
               self.clickIndex = $index;
               let offset = self.initLeft * (self.currentIndex - self.clickIndex); //这个index是当前图片停留时的index
               self.animate(-offset);
                self.currentIndex = self.clickIndex;
            },
            play() {
              //重复执行的定时器
              let self = this
              setInterval(() => {
               self.nexClick();
             }, 10000)
           },
            stop() {
                //重复执行的定时器
                let self = this
                clearInterval(() => {
                    self.nexClick();
                }, 10000)
            },
        }
    }
</script>

<style scoped>

</style>