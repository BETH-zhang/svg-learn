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