  async function loadData() {
	  const response = await fetch('/data/data.js');
	  const data = await response.json();
	  console.dir(data); 
	  
	  var dotPlotData = {};
	
	// replace this with NCAA when real NET is released. Nolan is approximation, but calculated earlier in season
	// Using Torvik NET Forecast as of Nov. 2023 - https://barttorvik.com/net4cast.php
	// Nolan NET matches NCAA NET on Dec. 11, 2023. Torvik NET is off by 7 spots (NCAA, Nolan: 68; Torvik 61)
	
	if ( data.ncaa ) {  
		document.getElementById('ncaa-net').innerHTML = data.ncaa.net_rank; 
		document.getElementById('ncaa-net2').innerHTML = data.ncaa.net_rank; 
	} else if (data.trank) {
		document.getElementById('ncaa-net').innerHTML = data.trank.torvik_NET; 
		document.getElementById('ncaa-net2').innerHTML = data.trank.torvik_NET; 
	}
	
	if ( data.kenpom ) {
		document.getElementById('kenpom-rating').innerHTML = data.kenpom.rating;
		document.getElementById('kenpom-overall').innerHTML = data.kenpom.overall_record;
		document.getElementById('kenpom-conference').innerHTML = data.kenpom.conference_record;
		document.getElementById('kenpom-record').innerHTML = data.kenpom.record;
	}

	if ( data.kpi_sports ) {
		if (data.kpi_sports.kpi_ranking == null) {
			document.getElementById('kpi_ranking').innerHTML = "<span class='small text-muted'>NA</span>";
		} else {
		document.getElementById('kpi_ranking').innerHTML = data.kpi_sports.kpi_ranking;
		}
	}

	if ( data.espn ) {
		document.getElementById('espn-rating').innerHTML = data.espn.bpi;
		dotPlotData['BPI'] = data.espn.bpi;
		document.getElementById('espn-proj-tourney-seed').innerHTML = data.espn.proj_tourney_seed;
		document.getElementById('espn-wl').innerHTML = data.espn.proj_win_loss_overall;
		document.getElementById('espn-cwl').innerHTML = data.espn.proj_win_loss_conf;
		document.getElementById('espn-sor').innerHTML = data.espn.sor;
		// document.getElementById('espn-sweet16').innerHTML = data.espn.chance_sweet_16;
		// document.getElementById('espn-round-32').innerHTML = data.espn.chance_round_32;
		document.getElementById('espn-sor-s-curve').innerHTML = data.espn.projected_tournament_order;
		document.getElementById('espn-bracketology-seed').innerHTML = data.espn_bracketology.seed;
		document.getElementById('quadrants-sos').innerHTML = data.espn.sos;
		document.getElementById('quadrants-non-con-sos').innerHTML = data.espn.non_con_sos;
	}
	
	if (data.next_game) {
		document.getElementById('nextGame-teams').innerHTML = "<img src='" + data.next_game.away_team_logo + "' class='team-logo' > <strong>" + data.next_game.away_team + "</strong> at <img src='" + data.next_game.home_team_logo + "' class='team-logo' > <strong>" + data.next_game.home_team + "</strong>";
		document.getElementById('nextGame-details').innerHTML = data.next_game.date_time;
	}

	if ( data.warrennolan ) {
	//	document.getElementById('warrennolan-group1').innerHTML = data.warrennolan.quadrant_1;
	//	document.getElementById('warrennolan-group2').innerHTML = data.warrennolan.quadrant_2;
	//	document.getElementById('warrennolan-group3').innerHTML = data.warrennolan.quadrant_3;
	//	document.getElementById('warrennolan-group4').innerHTML = data.warrennolan.quadrant_4;
		document.getElementById('nolan-rpi').innerHTML = data.warrennolan.rpi;
		document.getElementById('nolan-elo').innerHTML = data.warrennolan.elo;
		}

	if ( data.polls ) {
		document.getElementById('ap-rank').innerHTML = data.polls.ap_rank;
		document.getElementById('coaches-rank').innerHTML = data.polls.coaches_rank;
	}	
	
	
	if ( data.warrennolan ) {
		// document.getElementById('current_record').innerHTML = data.trank.current_record;
		document.getElementById('current_conf_record').innerHTML = data.warrennolan.current_conf_record;
	}
	
	if ( data.trank ) {
		document.getElementById('trank-proj').innerHTML = data.trank.trank_proj_record;
		document.getElementById('trank-seed').innerHTML = data.trank.trank_seed;
		document.getElementById('trank-trank').innerHTML = data.trank.trank;
		
		document.getElementById('wab-score').innerHTML = data.trank.wab_score;
		document.getElementById('wab-rank').innerHTML = data.trank.wab_rank;
	
		var trank_tourney_pct = data.trank.trank_make_tourney + "%";
	}

	if ( data.haslametrics ) {
		document.getElementById('haslam-rating').innerHTML = data.haslametrics.haslam_rating;
		document.getElementById('haslametrics-seed').innerHTML = data.haslametrics.seed;
	}
	
	if ( data.evanmiya ) {
		document.getElementById('miya-rating').innerHTML = data.evanmiya.miya_rating;
		document.getElementById('miya-resume-category').innerHTML = data.evanmiya.miya_resume_category;
	}
	
	if ( data.bauertology ) {
		document.getElementById('bauertology-BRCT').innerHTML = data.bauertology.BRCT_rank;
	}
	
	if ( data.shot_quality ) {
		document.getElementById('sq-ranking').innerHTML = data.shot_quality.sq_ranking;
	}
	
	if ( data.sports_reference ) {
		document.getElementById('sports-reference-srs').innerHTML = data.sports_reference.SRS_rank;
	}
	
	document.getElementById('trank-make-tourney').innerHTML = trank_tourney_pct;
	

	if ( data.teamrankings ) {
		if (data.teamrankings.rank >= 60) {
			document.getElementById('teamrankings-seed').innerHTML = "OUT";
		} else {
			document.getElementById('teamrankings-seed').innerHTML = data.teamrankings.most_likely_seed;
		}
		document.getElementById('teamrankings-rating').innerHTML = data.teamrankings.make_tournament;
		document.getElementById('teamrankings-rank').innerHTML = data.teamrankings.rank;
		document.getElementById('teamrankings-conf-wl').innerHTML = data.teamrankings.proj_conf_record;
		var teamrankings_wl = data.teamrankings.projected_wins + "-" + data.teamrankings.projected_losses
		document.getElementById('teamrankings_wl').innerHTML = teamrankings_wl;
	}
	
	if ( data.bracketproject ) {
		document.getElementById('bracketproject-count').innerHTML = data.bracketproject.matrix_count;
		document.getElementById('bracketproject-totalbrackets').innerHTML = data.bracketproject.total_brackets;
		document.getElementById('bracketproject-seed').innerHTML = data.bracketproject.matrix_seed;
	}

	if ( data.cbs ) {
		document.getElementById('cbs-bracket').innerHTML = data.cbs.cbs_rank;
	}
	
	if ( data.massey_ratings ) {
		document.getElementById('massey-rank').innerHTML = data.massey_ratings.massey_rank;
	}
	
	if ( data.bballnet_quadrants ) {
		document.getElementById('NET_quadrants_Q1_record').innerHTML = data.bballnet_quadrants.quad1record;
		document.getElementById('NET_quadrants_Q2_record').innerHTML = data.bballnet_quadrants.quad2record;
		document.getElementById('NET_quadrants_Q3_record').innerHTML = data.bballnet_quadrants.quad3record;
		document.getElementById('NET_quadrants_Q4_record').innerHTML = data.bballnet_quadrants.quad4record;
		document.getElementById('NET_quadrants_quad1_games').innerHTML = data.bballnet_quadrants.quad1_games;
		document.getElementById('NET_quadrants_quad2_games').innerHTML = data.bballnet_quadrants.quad2_games;
		document.getElementById('NET_quadrants_quad3_games').innerHTML = data.bballnet_quadrants.quad3_games;
		document.getElementById('NET_quadrants_quad4_games').innerHTML = data.bballnet_quadrants.quad4_games;
	}
	
	document.getElementById('time').innerHTML = data.time.time;


	function generateTable(data, containerId) {
		let table = `<table class="quad-games">
						<tbody>`;
	
		// Loop through each game and create table rows
		data.forEach(game => {
			const resultClass = game.result === "W" ? "w" : game.result === "L" ? "l" : "";
			
			table += `<tr>
						<td><span class="opponent-net">${game.opponent_NET}</span> ${game.opponent}</td>
						<td>${game.location}</td>
						<td class="text-end" style="padding-left: 10px;">${game.score}</td>
						<td class="text-end ${resultClass}" style="padding-left: 10px;">${game.result}</td>
					  </tr>`;
		});
	
		table += `</tbody></table>`;
	
		// Insert table into the div
		document.getElementById(containerId).innerHTML = table;
	}
	
	// Call the function to render the table
	generateTable(data.bballnet_quadrants.quad1_games, "NET_quadrants_quad1_games");
	generateTable(data.bballnet_quadrants.quad2_games, "NET_quadrants_quad2_games");
	generateTable(data.bballnet_quadrants.quad3_games, "NET_quadrants_quad3_games");
	generateTable(data.bballnet_quadrants.quad4_games, "NET_quadrants_quad4_games");



	function FindScore(data) { // Calculate percentage chance based on previous at-large bids
		 var score;
		 if (data <= 30){ score = 99; } 
		 if (data > 30 && data <= 35){ score = 95; } 
		 if (data > 35 && data <= 40) { score = 90; } 
		 if (data > 40 && data <= 43) { score = 80; } 
		 if (data > 43 && data <= 45) { score = 70; }
		 if (data > 45 && data <= 47) { score = 55; }
		 if (data > 47 && data <= 51) { score = 30; }
		 if (data > 51 && data <= 55) { score = 15; }
		 if (data > 55 && data <= 60) { score = 10; }
		 if (data > 60 && data <= 70) { score = 5; }
		 if (data > 70 && data <= 80) { score = 2; } // Highest NET ranking to get bid: 77 in 2022, RPI 74 in 1999 
		 if (data > 80) { score = 1; }
		 
		 return score;
	 };
	 

	 // Calculations notes: 
	 // 2022 Last 4 In: Wyoming (NET 50), Rutgers (77), Indiana (38), Notre Dame (53)
	 // 2022 First 4 Out: Dayton (NET 58), SMU (NET 45), Texas A&M (NET 43) 
	 
	 // Approx. 500 at-large bids from 2008-2022 
	 // Only five at-large teams with NET over 70: All 10 or 11 seeds 
	 // 20 at large bids with NET/RPI above 60 

	 
	 if( data.kenpom) { kenpom_score = FindScore(data.kenpom.rating); }
	 
	 if( data.ncaa ) { 
		 net_score = FindScore(data.ncaa.net_rank); 
	 } else if ( data.trank.torvik_NET ) {
		 net_score = FindScore(data.trank.torvik_NET); 
	 }
	 
	 if( data.espn ) { 
		 espn_sor = FindScore(parseInt(data.espn.sor));  // SOR is stronger predictor than BPI. Note: Preseason SOR is 1. That skews the gauge.
		 espn_bpi = FindScore(parseInt(data.espn.bpi)); 
	}
	 
	 if(data.teamrankings ) { 
		 teamrankings_score = parseInt(data.teamrankings.make_tournament); 
	 } // This one's already a % score
	 
	 if( data.trank ) { 
		 torvik_score = parseInt(data.trank.trank_make_tourney); 
		  wab_score = FindScore(data.trank.wab_rank); 
	 }
	 
	 if( data.kpi_sports ) { kpi_score = FindScore(data.kpi_sports.kpi_ranking); }
	 if (data.warrennolan ) { rpi_score = FindScore(data.warrennolan.rpi); }
	 if (data.bauertology ) { bauertology_score = FindScore(data.bauertology.BRCT_rank); }
	 
	 
	 // Intangibles: Don't think any of the systems has a way to value injuries and/or hype, so we need to add it. Check out sports-reference Win Shares, perhaps, for injuries data points. 
	 
	 // Quad 3 losses: -5 each
	 // Quad 1 blowouts: -3 each?
	 
	 let intangibles = -5;
	 let intangibles_msg = "Rutgers Q3 home loss";
	 
	 
	 
	 // Penalty for a Nonconference SOS above 250. New for 2025.
	 if ( data.espn.non_con_sos >= 250 ) {
		 intangibles = intangibles-5;
		 intangibles_msg += "Intangibles: Penalty applied for having non-con SOS above 250."
	 }
	 
	 
	 // TOTAL SCORE FORMULA
	 
		var total_score;
	
		// MANUAL TOTAL - Uncomment to override formulas below  
			// total_score = 100;

		// PURE AVERAGE FORMULA - Debut 2024-25 season
		// To make life easy early in the season: Just average the available metrics. This is less precise than the WEIGHTED AVERAGE formula below. Comment out one or the other. 
		
		// Initialize an object to hold only defined variables
		let raw_rankings = {};
		
		// Conditionally add variables to the object if they are defined
		if (typeof data.ncaa.net_rank !== 'undefined') raw_rankings.NET = parseInt(data.ncaa.net_rank);
		if (typeof data.kpi_sports.kpi_ranking !== 'undefined') raw_rankings.KPI = data.kpi_sports.kpi_ranking;
		if (typeof data.espn.sor !== 'undefined') raw_rankings["ESPN SOR"] = data.espn.sor;
		if (typeof data.espn.bpi !== 'undefined') raw_rankings["ESPN BPI"] = data.espn.bpi;
		if (typeof data.teamrankings.rank !== 'undefined') raw_rankings["Team Rankings"] = parseInt(data.teamrankings.rank);
		if (typeof data.warrennolan.rpi !== 'undefined') raw_rankings.RPI = parseInt(data.warrennolan.rpi);
		if (typeof data.kenpom.rating !== 'undefined') raw_rankings.Kenpom = data.kenpom.rating;
		if (typeof data.trank.trank !== 'undefined') raw_rankings.Torvik = data.trank.trank;
		if (typeof data.trank.wab_rank !== 'undefined') raw_rankings.WAB = data.trank.wab_rank;
		
		
		// Initialize an array to hold the values that exist
		let rankings_used = [];
		
		// Collect variable names and values
		for (let [name, value] of Object.entries(raw_rankings)) {
			rankings_used.push(value);
		}				
		
		console.group("Rankings used");
		console.table(raw_rankings);
		console.groupEnd();	
	
	 // Note from KPI: Selections have trended toward using results-based metrics - "Who's resume is better?". Predictive metrics help more with seeding - "Who would win between these two?".
	console.group('What percentage odds?');
		
		let percentages = {};
		
		if (net_score) { 
			const NET_pct = { metric: "NET", type: "combo", pct: net_score };
			percentages.NET = NET_pct;
		}
		
		if (data.espn) { 
			const SOR_pct = { metric: "SOR", type: "results-based", pct: espn_sor };
			percentages.SOR = SOR_pct;
		}
		
		if (data.kpi_sports) { 
			const KPI_pct = { metric: "KPI", type: "results-based", pct: kpi_score };
			percentages.KPI = KPI_pct;
		}
	
		if (data.teamrankings) { 
			const TeamRankings_pct = { metric: "TeamRankings", type: "results-based", pct: teamrankings_score };
			percentages.TeamRankings = TeamRankings_pct;
		}
		
		if (rpi_score) { 
			const RPI_pct = { metric: "RPI", type: "results-based", pct: rpi_score };
			percentages.RPI = RPI_pct;
		}
	
		if (data.espn) { 
			const BPI_pct = { metric: "BPI", type: "predictive", pct: espn_bpi };
			percentages.BPI = BPI_pct;
		}
	
		if (kenpom_score) { 
			const Kenpom_pct = { metric: "Kenpom", type: "predictive", pct: kenpom_score };
			percentages.Kenpom = Kenpom_pct;
		}

		if (torvik_score) { 
			const Torvik_pct = { metric: "Torvik", type: "predictive", pct: torvik_score };
			percentages.Torvik = Torvik_pct;
		}
		
		if (wab_score) { 
			const WAB_pct = { metric: "WAB", type: "results-based", pct: wab_score };
			percentages.WAB = WAB_pct;
		}
		
		
		// Initialize an array to hold the values that exist
		let percentages_used = [];

		// Collect variable names and values
		for (let [name, value] of Object.entries(percentages)) {
			percentages_used.push(value["pct"]);
		}	
		
		// Calculate the sum of the values in the array
		let percentages_sum = percentages_used.reduce((acc, val) => acc + val, 0);

	
		console.table(percentages, ["type","pct"]);
	
	console.groupEnd();
	
	
	// Calculate the average
		total_score = percentages_used.length > 0 ? percentages_sum / percentages_used.length : 0;	
		console.log("Total Score before intangibles", total_score);
		console.log("intangibles_debug:", intangibles);
		total_score = intangibles + total_score;
		console.log("updated total_score:" , total_score);
											
		// WEIGHTED AVERAGE - Choose this or the PURE AVERAGE formula above
		//Current formula, multipliers should add to .98 to keep the gauge happy
		// In season, use these scores to calculate total: ESPN SOR, ESPN BPI, KPI, Kenpom, NCAA NET, Team Rankings, Torvik 
			
			//total_score = ((net_score * .16) + (kpi_score * .14) + (espn_sor * .14) + (teamrankings_score * .11) + (rpi_score * .10) + (kenpom_score * .11) + (espn_bpi * .11) +  (torvik_score * .11) + intangibles);		 
	
	 // next three lines keep gauge score > 3 in the really sad times, uncomment during season
	 if (total_score <= 2) {
		 total_score = 2;
		 console.log("Note: Minimum total_score applied");
	 }
	 
	 // Don't want the needle bounding over 100
	 if (total_score >= 96) {
		  total_score = 96;
		  console.log("Note: Maximum total_score applied");
	  }
	  
		// AUTOMATED STATUS UPDATES
		
		//function StatusCheck(data) {
		//	 var status_message;
		//	 if (data < 20) { status_message = "Nope. Not happening." }
		//	 if (data >= 20 && data < 45) { status_message = "It's been a minute since the odds were even this high." }
		//	 if (data >= 45 && data < 75) { status_message = "These aren't uncharted waters. But they're very lightly charted." }
		//	 if (data >= 75) { status_message = "Believe it when we see it." }
		//	 
		//	 return status_message;	 
		// }
	 
		 // Three lines below can automate the status updates based on the total_score. Uncomment to automate. Otherwise, manual status updates are required.
		 
		 // message = StatusCheck(total_score);
		 // console.log(message);
		 // $('#message').text(message);
	
	// Debuggging
	console.log("rankings_used: ", rankings_used);
	console.log("rankings_used length: ", rankings_used.length);
	console.log("percentages_used: ", percentages_used);
	console.log("percentages_sum: ", percentages_sum);
	console.log("Intangibles: " + intangibles + " (" + intangibles_msg + ")");
	console.log("Total Score at the bottom: ", total_score);

google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

	 
function drawChart() {
	   
	   total_score = parseInt(total_score);

	var data = google.visualization.arrayToDataTable([
	  ['Label', 'Value'],
	  ['', total_score],
	]);

	var options = {
	  width: 340, height: 340,
	  redFrom: 75, redTo: 100,
	  yellowFrom:50, yellowTo: 75,
	  minorTicks: 12
	};
	
	var options_2 = {
	  width: 200, height: 200,
	  redFrom: 75, redTo: 100,
	  yellowFrom:50, yellowTo: 75,
	  minorTicks: 10
	};

	var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
	var chart_2 = new google.visualization.Gauge(document.getElementById('chart_div_2'));

	chart.draw(data, options);
	chart_2.draw(data, options_2);


	// Comment out these lines to disable needle bounce in offseason
	// Increase the multiplier applied to Math.random to increase bounciness. It basically equates to the range of values to bounce between.
	setInterval(function() {
	  data.setValue(0, 1, total_score-3 + Math.round(5 * Math.random()));
	  chart.draw(data, options);
	  }, 300);
 
 
  };  // end drawChart()
  
} // end loadData async function
	
loadData(); // MAKES THE MAGIC HAPPEN
dotPlot(); // Makes some other magic happen