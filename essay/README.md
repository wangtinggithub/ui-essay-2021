# essay

> 基于vue的文章查看组件

### Install

``` bash
npm install ui-essay-2021 --save
```

### Usage
``` bash
import essay from 'ui-essay-2021'

Vue.use(essay);

<essay :info="info"></essay>
```

### Props
``` bash

字段名称                类型                说明                        默认值
info              Object                文章详情                   -
      title       String                文章标题
      content     String                文章内容
```
