var listInfo = [],
	players = [],
	positions = [];

function originalOrder() {
	for(var i = 0; i < listInfo.length; i ++) {
		listInfo[i].element.style.top = `${listInfo[i].position.y}px`;
	}
	return [];
}

function shuffle (array) {
  var i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function shuffleList() {
	shuffle(players);
	applyPositions(players);
	return [];	
}

function sortByType(sortBy) {
	return players.sort(function(a, b) {
		return sortBy == 1 
			? a.name > b.name 
			: a.name <= b.name;
	});
}

function applyPositions(sortedList) {
	for(var i = 0; i < sortedList.length; i ++) {
		sortedList[i].element.style.top = `${positions[i]}px`;
	}
}

function sortList(sortBy) {
	var sortedList = (sortBy == 0) ? shuffleList() : sortByType(sortBy); 
	if(sortedList.length) {
		applyPositions(sortedList);
	}
}

function init() {
	var ul = document.getElementById('players-ul')
	var body = document.body.getBoundingClientRect();
	var li = ul.children;
	var rect = ul.getBoundingClientRect();
	var top = body.top, left = body.left;
	var offset = 50;
	for(var i = 0; i < li.length; i ++) {
		listInfo.push({
			id: i + 1,
			text: li[i].textContent,
			position: {
				x: left,
				y: top
			},
			element: li[i]
		});

		players.push({
			id: i + 1,
			name: li[i].textContent,
			element: li[i]
		});

		positions.push(top);

		top += offset;
	}
	
	originalOrder();
}

init();