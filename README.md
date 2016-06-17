# 走进SVG

##

##SVG的图形和属性

1.1

###1.2基本图形和属性
-基本图形
    rect,circle,elipse,line,polyline,polygon

-基本属性
    fill,stroke,stroke-width,transform


###1.3.基本操作API
创建图形
document.createElementNS(ns, tagName);

添加图形
element.appendChild(childElement);

设置／获取属性
element.setAttribute(name,value)
elememt.getAttribute(name)

###2.1.SVG的世界，视野，视窗的概念
width,height-控制视窗

SVG代码－定义世界

viewBox,preserveAspectRatio-控制视野
    
    <svg xmlns="..."
        width="800" height="600"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid meet">
        <!--SVG Content-->
    </svg>

###2.2.SVG的图形分组
<g>标签创建分组

属性继承

tansform属性定义坐标变换

可以嵌套使用

###2.3.SVG坐标系统概述
笛卡尔直角坐标系

原点

互相垂直的两条数轴

角度定义




