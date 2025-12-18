// Load and display schedule data
async function loadSchedule() {
	try {
		const response = await fetch('/data/nebraska_schedule.json');
		const data = await response.json();
		const schedule = data.teams['nebraska-cornhuskers'].schedule;
		const scheduleTableBody = document.getElementById('schedule-table-body');
		
		schedule.forEach(game => {
			const row = document.createElement('tr');
			row.className = 'transition-colors duration-200 hover:bg-gray-50';
			
			// Determine opponent
			const opponent = game.competitors.find(c => c.team_id !== '158');
			const nebraska = game.competitors.find(c => c.team_id === '158');
			
			// Format date
			const gameDate = new Date(game.date);
			const monthNames = ['Jan.', 'Feb.', 'March', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
			const formattedDate = monthNames[gameDate.getMonth()] + ' ' + gameDate.getDate();
			
			// Check if it's an away game (opponent is first in competitors array)
			const isAway = game.competitors[0].team_id !== '158';
			const locationPrefix = isAway ? 'at ' : '';
			
			// Determine result
			let result = '—';
			if (opponent.score && nebraska.score) {
				const nebScore = nebraska.score.displayValue;
				const oppScore = opponent.score.displayValue;
				const won = nebraska.winner;
				result = `<span class="geist-mono">${nebScore}-${oppScore}</span> <span class="font-semibold text-green-700">${won ? 'W' : 'L'}</span>`;
			}
			
			row.innerHTML = `
				<td class="px-6 py-4 text-sm font-medium text-gray-700">
					<div class="flex items-center gap-3 font-medium">
						<img src="${opponent.logo}" alt="${opponent.team_nickname}" class="w-6 h-6">
						<span>${locationPrefix}${opponent.team_nickname}</span>
					</div>
				</td>
				<td class="px-6 py-4 text-sm font-normal text-gray-600 geist">${formattedDate}</td>
				<td class="px-6 py-4 text-sm font-medium text-gray-700 text-right">${result}</td>
			`;
			
			scheduleTableBody.appendChild(row);
		});
	} catch (error) {
		console.error('Error loading schedule:', error);
	}
}

// Load schedule when page loads
document.addEventListener('DOMContentLoaded', loadSchedule);