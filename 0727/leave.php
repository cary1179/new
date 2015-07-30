<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/base.css" />
</head>
<body>
	<!-- 头部 -->
	<div class="header">
		<div class="center">
			<div class="user fr">
				<a href="###"><img src="img/user.jpg" alt="" />您好，管理员</a>
			</div>
			<h1>住院医生工作站</h1>
			<ul>
				<li class="cur"><a href="###">文件</a></li>
				<li><a href="###">统计</a></li>
				<li><a href="###">系统设置</a></li>
				<li><a href="###">帮助</a></li>
			</ul>
		</div>
		
	</div>

	<!-- 切换 -->
	<div class="top-tab">
		<div class="center">
			<ul class="clear">
				<li><i class="fr">&times;</i><a href="###">首页</a></li>
				<li class="cur"><i class="fr">&times;</i><a href="###">离院</a></li>
			</ul>
		</div>
	</div>

	<!-- 筛选 -->
	<div class="filter filter1 mb10">
		<div class="center clear">
			<div class="fl filter1_l">
				<a href="###"><i class="icon icon1"></i>病历</a>
				<a href="###"><i class="icon icon2"></i>医嘱</a>
			</div>
			<div class="filter1_r clear">
				<div class="ipt-wrap">
					<label>病区：</label>
					<span class="select">病区01
						<ul>
							<li>病区01</li>
							<li>病区02</li>
							<li>病区03</li>
						</ul>
					</span>
				</div>
				<div class="ipt-wrap">
					<label>住院号：</label>
					<input type="text" />
				</div>
				<div class="ipt-wrap">
					<label>姓名：</label>
					<input type="text" class="ipt_s" />
				</div>
				<div class="ipt-wrap">
					<label>床位：</label>
					<input type="text" class="ipt_s" />
				</div>
				<div class="ipt-wrap">
					<label>收费类型：</label>
					<div class="select open">自费
						<ul>
							<li>医保</li>
							<li>自费</li>
						</ul>
					</div>
				</div>
				<div class="ipt-wrap">
					<label>医保卡号：</label>
					<input type="text" />
				</div>
				<div class="ipt-wrap">
					<label>入院日期：</label>
					<input type="text" /> - <input type="text" />
				</div>
				<div class="ipt-wrap">
					<label>出院日期：</label>
					<input type="text" value="2014年9月12日" /> - <input type="text" value="2014年9月12日" />
				</div>
				<div class="btn-wrap">
					<a href="###" class="btn btn1">查询</a>
					<a href="###" class="btn btn2">重置</a>
				</div>
			</div>
		</div>
	</div>

	<div class="table table1 fix-table1">
		<div class="center">
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
	<div class="table table1 fix-table1 fix-table2">
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
				<?php for($i=0;$i<22;$i++) { ?>
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