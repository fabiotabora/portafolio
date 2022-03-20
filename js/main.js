const ctx = document.getElementById('myChart');
			const myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Pr', 'Ps', 'Ai', 'Lr', 'Ae', 'Id'],
					datasets: [{
						label: 'Destrezas',
						data: [12, 19, 3, 5, 2, 3],
						backgroundColor: [
							'rgba(255, 99, 255, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 159, 64, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 25, 100, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 255, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 159, 64, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 25, 100, 0.2)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						y: {
							beginAtZero: true
						}
					}
				}
			});
		