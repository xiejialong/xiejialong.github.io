document.addEventListener('DOMContentLoaded', function() {
    const albumContainers = document.querySelectorAll('.album-container');
    
    albumContainers.forEach(container => {
      const scrollWrapper = container.querySelector('.album-scroll');
      const items = container.querySelectorAll('.album-item');
      const prevBtn = container.querySelector('.album-prev');
      const nextBtn = container.querySelector('.album-next');
      
      // 如果没有照片项则返回
      if (!items.length) return;
      
      const itemWidth = items[0].offsetWidth // 包括间隙
      let currentPosition = 0;
      let autoScrollInterval;
      
      // 自动滚动函数
      function startAutoScroll() {
        // autoScrollInterval = setInterval(() => {
        //   // 检查是否到达末尾
        //   if (currentPosition <= -(items.length * itemWidth - scrollWrapper.offsetWidth)) {
        //     currentPosition = 0; // 回到起点
        //   } else {
        //     currentPosition -= itemWidth; // 向左移动
        //   }
        //   scrollWrapper.style.transform = `translateX(${currentPosition}px)`;
        // }, 4000); // 每3秒滚动一次
      }
      
      // 手动控制函数
      function scrollToPosition(position) {
        currentPosition = position;
        scrollWrapper.style.transform = `translateX(${currentPosition}px)`;
      }
      
      // 上一张按钮
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          clearInterval(autoScrollInterval);
          const newPosition = Math.min(currentPosition + itemWidth * 1, 0);
          scrollToPosition(newPosition);
        //   startAutoScroll();
        });
      }
      
      // 下一张按钮
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          clearInterval(autoScrollInterval);
          const maxScroll = -(items.length * itemWidth - scrollWrapper.offsetWidth);
          const newPosition = Math.max(currentPosition - itemWidth * 1, maxScroll);
          scrollToPosition(newPosition);
        //   startAutoScroll();
        });
      }
      
    //   // 鼠标悬停时暂停自动滚动
    //   container.addEventListener('mouseenter', () => {
    //     clearInterval(autoScrollInterval);
    //   });
      
    //   // 鼠标离开时恢复自动滚动
    //   container.addEventListener('mouseleave', () => {
    //     startAutoScroll();
    //   });
      
      // 初始化自动滚动
    //   startAutoScroll();
    });
  });
  