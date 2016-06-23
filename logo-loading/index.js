/**********************************************
 * created by beth on 2016年6月23日
 * placeholder
 **********************************************/
 //获取demo2.svg图形线段长度
 $('#len').html($('.gbtags path')[0].getTotalLength());//这个方法可获取svg图形线段长度

 //添加两个处理滑块并且自动设置dashoffset和dasharray属性值方法
 $('#dashoffset').on('input', function(){
 	console.log();
 	var current = $(this).val();
 	$('.gbtags path').attr('stroke-dashoffset', current);
 });

 $('#dasharray').on('input', function(){
 	var current = $(this).val();
 	$('.gbtags path').attr('stroke-dasharray', current + ' '+current);
 });

 /*定义js*/
 var current_frame;//定义当前帧
 var total_frames;//定义全部帧数
 var path;//定义svg中唯一的path元素
 var length;//定义path所生成素描长度
 var handle;//定义js动画句柄

 path = document.getElementById('path');
 length = path.getTotalLength();

 //定义初始化方法
 var init = function(){
 	current_frame = 0;
 	total_frames = 160;
 	path.style.strokeDasharray = length + ' ' + length;//定义dasharray
 	path.style.strokeDashoffset = length;//定义dashoffset
 	handle = 0;
 }

 //定义实际的动画绘制方法
 var draw = function(){
 	var progress = current_frame/total_frames;
 	if(progress>1){
 		window.cancelAnimationFrame(handle);
 	}else{
 		current_frame++;
 		path.style.strokeDashoffset = Math.floor(length*(1-progress));

 		handle = window.requestAnimationFrame(draw);
 	}
 }

 //定义一个重新运行方法
 var rerun = function(){
 	init();
 	draw();
 }

 rerun();