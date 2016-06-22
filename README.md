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
    都是CSS3支持的颜色表示方法
    互相转换页面的原理

    RGB
        红色，绿色，蓝色
        表示：rgb(r,g,b)
        范围［0，255］

    HSL
        三个分量分别表示颜色，饱和度和亮度
        格式：hsl(h, s%, l%)
        范围：h［0，359］s,l[0,100]

    透明度
        rgba(r,g,b,a) hsla(h,s%,l%,a)
        opacity

HSL应用实例：http://paletton.com

###3.2.线性渐变和径向渐变
    线性渐变
        <linearGradient><stop>
        定义方向
        关键点位置及颜色
        gradientUnits:objectBoundingBox userSpaceOnUse

###3.3.使用笔刷
    绘制纹理
    <pattern>标签
    patternUnits和patternContentUnits

###4.1.path命令汇总
    M/m(x,y)+  移动当前位置
    L/l(x,y)+  从当前位置绘制线段到指定位置
    H/h(x)+  从当前位置绘制水平线到达指定的x坐标
    V/v(x)+  从当前位置绘制竖直水平线到达指定的y坐标
    Z/z  闭合当前路径
    C/c(x1,y1,x2,y2,x,y)+  从当前位置绘制三次贝塞尔曲线到指定位置
    S/s(x2,y2,x,y)+  从当前位置光滑绘制三次贝塞尔曲线到指定位置
    Q/q(x1,y1,x,y)+  从桑钱位置绘制二次贝塞尔曲线到指定位置
    T/t(x,y)+  从当前位置光滑绘制二次贝塞尔曲线到指定位置
    A/a(rx,ry,xr,laf,sf,x,y)  从当前位置绘制弧线到指定位置

http://slides.com/

    命令基本规律
    区别大小写：大写表示坐标参数为绝对位置，小写则为相对位置
    最后的参数表示最终要达到的位置
    上一个命令结束的位置就是下一个命令开始的位置
    命令可以重复参数表示统一命令

###4.3.弧线命令
    A(rx,ry,xr,laf,sf,x,y) 绘制弧线
    最复杂的命令
    rx-radius-x 弧线所在椭圆的x半轴长
    ry-radius-y 弧线所在椭圆的y半轴长
    xr-xAxis-rotation 弧线所在椭圆的长轴角度
    laf-large-arc-flag 是否选择弧长较长的那一段弧
    sf-sweep-flag 是否选择逆时针方向的那段弧
    x,y-弧的终点位置




