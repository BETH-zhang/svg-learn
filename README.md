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

###2.4.四个坐标系
####2.4.1用户坐标系User Coordinate
    世界的坐标系Ouser

####2.4.2自身坐标系Current Coordinate
    每个图形元素或分组独立与生俱来Oa

####2.4.3前驱坐标系Previous Coordinate
    父容器的坐标系Ouser->Oa
    transform="translate(50 50)"

####2.4.4参考坐标系Reference Coordinate
    使用其它坐标系来考究自身的情况时使用

###2.5.坐标变换
定义
    在数学上，坐标变换是采用已定的数学方法将一个坐标的坐标变换为另一个坐标系的坐标的过程
    SVG中，坐标变换是对一个坐标系到另一个坐标系的变换的描述

线性变换
    线性变换方程
    X` = aX+cY+e
    Y` = bX+dY+f

    变换矩阵，记为M

线性变换列表

transform属性
viewBox加上1像素的偏移，坐标就锐利一点

###3.1.认识RGB和HSL

###3.2.线性渐变和径向渐变

###3.3.使用笔刷




