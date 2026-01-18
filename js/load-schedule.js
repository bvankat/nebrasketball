// Helper function to get result color class
function getResultColorClass(won) {
	return won ? 'text-green-700' : 'text-red-700';
}

// Helper function to format time, removing :00 minutes
function formatGameTime(hours, minutes) {
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // 0 should be 12
	
	// Only include minutes if they're not :00
	if (minutes === 0) {
		return `${hours} ${ampm}`;
	} else {
		const minutesStr = minutes < 10 ? '0' + minutes : minutes;
		return `${hours}:${minutesStr} ${ampm}`;
	}
}

// Load and display schedule data
async function loadSchedule() {
	try {
		const response = await fetch('/data/nebraska_schedule.json');
		const data = await response.json();
		const schedule = data.teams['nebraska-cornhuskers'].schedule;
		const scheduleTableBody = document.getElementById('schedule-table-body');
		
		// Fetch win probabilities
		const dataResponse = await fetch('/data/data.json');
		const analyticsData = await dataResponse.json();
		const winProbabilities = analyticsData.kenpom.remaining_games;
		
		schedule.forEach(game => {
			const row = document.createElement('tr');
			row.className = 'transition-colors duration-200 hover:bg-gray-50';
			
			// Determine opponent
			const opponent = game.competitors.find(c => c.team_id !== '158');
			const nebraska = game.competitors.find(c => c.team_id === '158');
			
			// Format date
			const gameDate = new Date(game.date);
			const monthNames = ['Jan.', 'Feb.', 'March', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
			let formattedDate = monthNames[gameDate.getMonth()] + ' ' + gameDate.getDate();
			
			// Check if it's an away game (opponent is first in competitors array)
			const isAway = game.competitors[0].team_id !== '158';
			const locationPrefix = isAway ? '<span class="font-light text-xs text-gray-500">at</span> ' : '';

			// Check if opponent is ranked in Top 25
			const isRanked = opponent.gameRank && opponent.gameRank <= 25;
			const rankDisplay = isRanked ? `<span class="text-xs font-medium text-gray-500">#${opponent.gameRank}</span> ` : '';

			// Determine result
			let result = '—';
			if (opponent.score && nebraska.score) {
				const nebScore = nebraska.score.displayValue;
				const oppScore = opponent.score.displayValue;
				const won = nebraska.winner;
				const resultColorClass = getResultColorClass(won);
				result = `<span class="geist-mono">${nebScore}-${oppScore}</span> <span class="font-semibold ${resultColorClass}">${won ? 'W' : 'L'}</span>`;
			} else {
				// For future games, add the time to the date
				const hours = gameDate.getHours();
				const minutes = gameDate.getMinutes();
				const timeStr = formatGameTime(hours, minutes);
				formattedDate += `  <span class="text-[10px] text-gray-400 ml-1">${timeStr}</span>`;
				
				// Find matching win probability
				const matchingGame = winProbabilities.find(g => {
					// Parse kenpom date (format: "Sun Mar 8" or "Sat Feb 28")
					const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
					const parts = g.date.split(' ');
					const month = monthNames.indexOf(parts[1]);
					const day = parseInt(parts[2]);
					// Compare with schedule game date
					return gameDate.getMonth() === month && gameDate.getDate() === day;
				});

				if (matchingGame) {
					const winProb = parseInt(matchingGame.prob);
					const probColor = winProb >= 50 ? 'text-green-800/50' : 'text-red-800/50';
					result = `<span class="text-[11px] font-normal ${probColor}" title="Kenpom Win Probability: ${winProb}%">${winProb}%</span>`;
				}
			}
			
			row.innerHTML = `
				<td class="px-3 py-4 text-sm font-medium text-gray-700">
					<div class="flex items-center gap-2 font-medium">
						<img src="${opponent.logo}" alt="${opponent.team_nickname}" class="w-5 h-5">
						<span>${locationPrefix}${rankDisplay}<a href="https://tourneyodds.info/${opponent.slug}" target="_blank" class="hover:text-red-700 transition-colors">${opponent.team_nickname}</a></span>
					</div>
				</td>
				<td class="px-4 py-4 text-xs font-normal text-gray-600 geist">${formattedDate}</td>
				<td class="px-4 py-4 text-sm font-medium text-gray-700 text-right">${result}</td>
			`;
			
			scheduleTableBody.appendChild(row);
		});
	} catch (error) {
		console.error('Error loading schedule:', error);
	}
}

// Load schedule when page loads
document.addEventListener('DOMContentLoaded', loadSchedule);