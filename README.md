# React Parallax Mouse

### 安裝react-parallax-mouse
```
npm install react-parallax-mouse
```

### 於專案內引入
```
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
```

### Example
```html
<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
  <MouseParallaxChild factorX={0.3} factorY={0.5}>
    <img src="example1.jpg" alt="" />
  </MouseParallaxChild>
  <MouseParallaxChild factorX={0.7} factorY={0.8}>
    <img src="example2.jpg" alt="" />
  </MouseParallaxChild>
</MouseParallaxContainer>
```

```
參考
https://github.com/choozn/react-parallax-mouse
```