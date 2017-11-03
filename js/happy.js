function happy() {
	if(document.getElementById('exampleInputName2').value<=0){
		sweetAlert("输入错误", "请输入>=0的数据","error");
		return false;
	}
	else if(document.getElementById('exampleInputName2').value>99){
		sweetAlert("输入错误", "请输入<100的数据","error");
		return false;
	}
	else{
	$('tr').remove();
	var n = parseInt(document.getElementById('exampleInputName2').value);
	var Move;
	var N;
	var posOne = 0;
	var posZero;
	var posMax;
	var a = new Array();

	if (n % 2 == 0) {
		N = n;
		for (var x = 0; x < N; x++) {
			a[x] = x + 1;
		}
		Move = (n - 4) / 2;
		posMax = N - 1;
		for (var i = 0; i < n - 1; i++) {
			//$('.head').append('<td>第'+(i+1)+'轮</td>');
			$('.table').append('<tr class=\''+(i+1)+'\'><td>第'+(i+1)+'轮</td></tr>');
			for (var j = 0; j < N / 2; j++)
				$('.'+(i+1)).append("<td>" + a[j] + "-" + a[N - 1 - j] + "</td>");
			if (posMax == N - 1) {
				posOne += (Move + 1);
				if (posOne > N - 2)
					posOne -= (N - 1);
				a[posOne] = 1;
				posMax = 0;
				for (var I = posOne + 1; I < N; I++)
					a[I] = a[I - 1] + 1;
				if (posOne > 1)
					a[posOne - 1] = N - 1;
				for (var J = posOne - 2; J > 0; J--)
					a[J] = a[J + 1] - 1;
				a[posMax] = n;
			} else {
				posOne += (Move + 1);
				if (posOne > N - 1)
					posOne -= (N - 1);
				a[posOne] = 1;
				posMax = N - 1;
				for (var I = posOne + 1; I < N; I++)
					a[I] = a[I - 1] + 1;
				if (posOne > 1)
					a[posOne - 1] = N - 1;
				for (var J = posOne - 2; J >= 0; J--)
					a[J] = a[J + 1] - 1;
				a[posMax] = n;
			}
		}
	} else {
		N = n + 1;
		Move = (N - 4) / 2;
		for (var x = 0; x < N; x++)
			a[x] = x + 1;
		a[N - 1] = 0;
		posZero = N - 1;
		for (var i = 0; i < n; i++) {
			$('.table').append('<tr class=\''+(i+1)+'\'><td>第'+(i+1)+'轮</td></tr>');
			for (var j = 0; j < N / 2; j++)
				$('.'+(i+1)).append("<td>" + a[j] + "-" + a[N - 1 - j] + "</td>");
			if (posZero == N - 1) {
				posOne += (Move + 1);
				if (posOne > N - 2)
					posOne -= (N - 1);
				a[posOne] = 1;
				posZero = 0;
				for (var I = posOne + 1; I < N; I++)
					a[I] = a[I - 1] + 1;
				if (posOne > 1)
					a[posOne - 1] = N - 1;
				for (var J = posOne - 2; J > 0; J--)
					a[J] = a[J + 1] - 1;
				a[posZero] = 0;
			} else {
				posOne += (Move + 1);
				if (posOne > N - 1)
					posOne -= (N - 1);
				a[posOne] = 1;
				posZero = N - 1;
				for (var I = posOne + 1; I < N; I++)
					a[I] = a[I - 1] + 1;
				if (posOne > 1)
					a[posOne - 1] = N - 1;
				for (var J = posOne - 2; J >= 0; J--)
					a[J] = a[J + 1] - 1;
				a[posZero] = 0;
			}
		}
		}
		swal("干得漂亮！", "成功输出列表！","success")
	}
}