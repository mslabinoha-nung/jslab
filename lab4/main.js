let scientists=[
	{
		id:1,
		name:"Marian Slabinoha",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"IT",
		degree:"PhD"
	},
	{
		id:2,
		name:"Bohdan Pashkovskyi",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"IT",
		degree:"PhD"
	},
	{
		id:3,
		name:"Ihor Chudyk",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"Oil and Gas Engineering",
		degree:"Dr.Sc."
	}
];
let conferences=[
	{
		id:1,
		topic:"Економіка",
		title:"«Сталий розвиток економіки, підприємств та суспільства»",
		country:"Ukraine",
		place:"ІФНТУНГ",
		date:"10-11 квітня 2025 р."
	},{
		id:2,
		topic:"Туризм",
		title:"«Адаптація до глобальних змін та викликів в економіці, туризмі, рекреації та захисті довкілля»",
		country:"Ukraine",
		place:"ІФНТУНГ",
		date:"8-9 травня 2025 р."
	}, {
		id:3,
		topic:"Публічне управління",
		title:"«Розвиток компетентності в публічному секторі: європейські стандарти та перспективи»",
		country:"Ukraine",
		place:"ІФНТУНГ",
		date:"30 вересня 2021 р."
	}
];
let participations=[
	{
		id:1,
		conference:"«Сталий розвиток економіки, підприємств та суспільства»",
		scientist:"Bohdan Pashkovskyi",
		topic:"Якась глобальна тема",
		type:"доповідь",
		duration:"50 хв"
	},{
		id:2,
		conference:"«Адаптація до глобальних змін та викликів в економіці, туризмі, рекреації та захисті довкілля»",
		scientist:"Bohdan Pashkovskyi",
		topic:"Якась не дуже глобальна тема",
		type:"доповідь",
		duration:"20 хв"
	},{
		id:3,
		conference:"«Адаптація до глобальних змін та викликів в економіці, туризмі, рекреації та захисті довкілля»",
		scientist:"Marian Slabinoha",
		topic:"Ще про щось там порозказували",
		type:"доповідь",
		duration:"30 хв"
	}
]
function displayParticipations(){
	const participationTab=document.getElementById('participation');
	let participationTabContent=`
		<h3>Участі у конференціях</h3>
		<button id="addParticipation" class="btn btn-success" data-toggle="modal" data-target="#participationModal">Додати</button>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Конференція</th>
					<th>Вчений</th>
					<th>Тема доповіді</th>
					<th>Тип виступу</th>
					<th>Тривалість</th>
					<th>Дії</th>
				</tr>
			</thead>
			<tbody>
		`;
	for(let i=0;i<participations.length;i++){
		participationTabContent+=`
				<tr>
					<td>${participations[i].conference}</td>
					<td>${participations[i].scientist}</td>
					<td>${participations[i].topic}</td>
					<td>${participations[i].type}</td>
					<td>${participations[i].duration}</td>
					<td>
						<button data-id="${participations[i].id}" class="edit-participation btn btn-warning">Редагувати</button>
						<button data-id="${participations[i].id}" class="delete-participation btn btn-danger">Видалити</button>
					</td>
				</tr>
		`;
	}
	participationTabContent+=`</tbody>
		</table>`;
	participationTab.innerHTML=participationTabContent;	
}  
function displayScientists(){
	const scientistTab=document.getElementById('scientist');
	const scientistSelect=document.getElementById('participationScientistInput');
	let scientistSelectContent=``;
	let scientistTabContent=`
		<h3>Вчені</h3>
		<button id="addScientist" class="btn btn-success" data-toggle="modal" data-target="#scientistModal">Додати</button>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Ім'я</th>
					<th>Організація</th>
					<th>Країна</th>
					<th>Спеціалізація</th>
					<th>Науковий ступінь</th>
					<th>Дії</th>
				</tr>
			</thead>
			<tbody>
		`;
	for(let i=0;i<scientists.length;i++){
		scientistSelectContent+=`<option value="${scientists[i].name}">${scientists[i].name}</option>`
		
		scientistTabContent+=`
				<tr>
					<td>${scientists[i].name}</td>
					<td>${scientists[i].organisation}</td>
					<td>${scientists[i].country}</td>
					<td>${scientists[i].field}</td>
					<td>${scientists[i].degree}</td>
					<td>
						<button data-id="${scientists[i].id}" class="edit-scientist btn btn-warning">Редагувати</button>
						<button data-id="${scientists[i].id}" class="delete-scientist btn btn-danger">Видалити</button>
					</td>
				</tr>
		`;
	}
	scientistTabContent+=`</tbody>
		</table>`;
	scientistTab.innerHTML=scientistTabContent;
	scientistSelect.innerHTML=scientistSelectContent;
}
function displayConferences(){
	const conferenceTab=document.getElementById('conference');
	const conferenceSelect=document.getElementById('participationConferenceInput');
	let conferenceSelectContent=``;
	let conferenceTabContent=`
		<h3>Конференції</h3>
		<button id="addConference" class="btn btn-success" data-toggle="modal" data-target="#conferenceModal">Додати</button>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Тематика</th>
					<th>Назва</th>
					<th>Країна</th>
					<th>Місце проведення</th>
					<th>Дата проведення</th>
					<th>Дії</th>
				</tr>
			</thead>
			<tbody>
		`;
	for(let i=0;i<conferences.length;i++){
		conferenceSelectContent+=`<option value="${conferences[i].title}">${conferences[i].title}</option>`
		conferenceTabContent+=`
				<tr>
					<td>${conferences[i].topic}</td>
					<td>${conferences[i].title}</td>
					<td>${conferences[i].country}</td>
					<td>${conferences[i].place}</td>
					<td>${conferences[i].date}</td>
					<td>
						<button data-id="${conferences[i].id}" class="edit-conference btn btn-warning">Редагувати</button>
						<button data-id="${conferences[i].id}" class="delete-conference btn btn-danger">Видалити</button>
					</td>
				</tr>
		`;
	}
	conferenceTabContent+=`</tbody>
		</table>`;
	conferenceTab.innerHTML=conferenceTabContent;
	conferenceSelect.innerHTML=conferenceSelectContent;
}
displayParticipations();
displayScientists();
displayConferences();
//event processors
document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-participation')){
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<participations.length;i++){
		if(elementId==participations[i].id){
			participations.splice(i,1);
			break;
		}
	}
	displayParticipations();
  } else if(e.target.classList.contains('delete-scientist')){
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<scientists.length;i++){
		if(elementId==scientists[i].id){
			scientists.splice(i,1);
			break;
		}
	}
	displayScientists();
  } else if(e.target.classList.contains('delete-conference')){
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<conferences.length;i++){
		if(elementId==conferences[i].id){
			conferences.splice(i,1);
			break;
		}
	}
	displayConferences();
  }
});