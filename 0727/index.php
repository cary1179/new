<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title>首页</title>
	<link rel="stylesheet" type="text/css" href="css/base.css" />
</head>
<body>
	<!-- 头部 -->
	<div class="header">
		<div class="center">
			<div class="user fr">
				<img src="img/user.jpg" alt="" />您好，管理员
			</div>
			<h1>住院医生工作站</h1>
		</div>
	</div>

	<!-- 切换 -->
	<div class="top-tab">
		<div class="center">
			<ul class="clear">
				<li class="cur"><i class="fr">&times;</i><a href="###">首页</a></li>
			</ul>
		</div>
	</div>

	<!-- 筛选 -->
	<div class="filter filter2 mb10">
		<div class="center clear">
			<div class="ipt-wrap">
				<label>病区：</label>
				<span class="select open">病区01
					<ul>
						<li>病区01</li>
						<li>病区02</li>
						<li>病区03</li>
					</ul>
				</span>
			</div>
			<a href="###" class="filter-links"><i class="icon icon3"></i>床位卡</a>
			<a href="###" class="filter-links br"><i class="icon icon4"></i>列表</a>
			<a href="###" class="filter-links"><i class="icon icon5"></i>本病区</a>
			<a href="###" class="filter-links"><i class="icon icon6"></i>我关注</a>
			<a href="###" class="filter-links"><i class="icon icon7"></i>我的病人</a>
			<a href="###" class="filter-links"><i class="icon icon8"></i>本科室</a>
			<a href="###" class="filter-links"><i class="icon icon9"></i>查找</a>
			<a href="###" class="filter-links"><i class="icon icon10"></i>病案资料</a>
			<a href="###" class="filter-links br"><i class="icon icon11"></i>报告提醒</a>
			<a href="###" class="filter-links"><i class="icon icon12"></i>离院</a>
		</div>
	</div>

	<div class="table table1 fix-table1 fix-table3">
		<div class="center">
			<h2>病人列表</h2>
			<table>
				<tr>
					<th>姓名</th>
					<th>性别</th>
					<th>年龄</th>
					<th>床位号</th>
					<th>护理级别</th>
					<th>危重级别</th>
					<th>诊断</th>
					<th>入院日期</th>
					<th>费用类型</th>
					<th>科室</th>
					<th>床位医师</th>
				</tr>
			</table>
		</div>
	</div>
	<div class="table table1 fix-table1 fix-table4">
		<div class="center">
			<table>
				<tr class="cur">
					<td>张三</td>
					<td>男</td>
					<td>100岁</td>
					<td>2</td>
					<td>二级护理</td>
					<td>一般病人</td>
					<td>感冒</td>
					<td>2014-12-19</td>
					<td>医保</td>
					<td>康复科</td>
					<td>张三</td>
				</tr>
				<tr>
					<td>张三</td>
					<td>男</td>
					<td>100岁</td>
					<td>2</td>
					<td>二级护理</td>
					<td>一般病人</td>
					<td>感冒</td>
					<td>2014-12-19</td>
					<td>医保</td>
					<td>康复科</td>
					<td>张三</td>
				</tr>
				<?php for($i=0;$i<32;$i++) { ?>
				<tr>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
				<?php } ?>
			</table>
		</div>
	</div>
</body>
</html>