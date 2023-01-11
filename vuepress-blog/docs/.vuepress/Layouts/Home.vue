<template>
  <section class="blog">
    <div class="box">
      <div class="head">
        <img
          src="https://slbblog.oss-cn-beijing.aliyuncs.com/head.jpeg"
          alt="头像"
          class="head-img"
        />
      </div>
      <p
        style="width: 100%; color: rgba(239, 239, 239, 1); padding: 20px 0 10px"
      >
        为梦想而年轻，为年轻而坚定
      </p>
      <a href="/list.html" class="into">进入</a>
    </div>
  </section>
</template>
  
<style lang="scss" scoped>
.blog {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #159957;
  background-image: linear-gradient(120deg, #155799, #159957);
  margin: 0 !important;
  box-sizing: border-box;
}
.box {
  position: absolute;
  width: 400px;
  max-width: 100%;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -65%);
}
.into {
  width: 200px;
  padding: 12px;
  line-height: 24px;
  display: inline-block;
  text-align: center;
  text-decoration: none !important;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 0.3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
}
.into:hover {
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}
.head {
  background-blend-mode: screen;
  width: 110px;
  height: 110px;
  display: inline-block;
  position: relative;
  & > img {
    width: 100%;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    &:hover {
      transform: rotate(666turn);
      transition-delay: 0.2s;
      transition-property: all;
      transition-duration: 59s;
      transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
    }
  }
  &:before,
  &:after {
    z-index: -1;
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    border-radius: 50%;
    animation: radar 4s linear infinite;
  }
  &:before {
    animation-delay: -2s;
  }
  @keyframes radar {
    100% {
      transform: scale(2.5);
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0) inset;
    }
  }
}
</style>