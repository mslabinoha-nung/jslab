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
		type:"Доповідь",
		duration:"50"
	},{
		id:2,
		conference:"«Адаптація до глобальних змін та викликів в економіці, туризмі, рекреації та захисті довкілля»",
		scientist:"Bohdan Pashkovskyi",
		topic:"Якась не дуже глобальна тема",
		type:"Доповідь",
		duration:"20"
	},{
		id:3,
		conference:"«Адаптація до глобальних змін та викликів в економіці, туризмі, рекреації та захисті довкілля»",
		scientist:"Marian Slabinoha",
		topic:"Ще про щось там порозказували",
		type:"Доповідь",
		duration:"30"
	}
]
conferencesLastId=3;
scientistsLastId=3;
participationsLastId=3;
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
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<participations.length;i++){
		if(elementId==participations[i].id){
			participations.splice(i,1);
			break;
		}
	}
	displayParticipations();
  } else if(e.target.classList.contains('delete-scientist')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<scientists.length;i++){
		if(elementId==scientists[i].id){
			scientists.splice(i,1);
			break;
		}
	}
	displayScientists();
  } else if(e.target.classList.contains('delete-conference')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<conferences.length;i++){
		if(elementId==conferences[i].id){
			conferences.splice(i,1);
			break;
		}
	}
	displayConferences();
  } else if(e.target.classList.contains('edit-conference')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<conferences.length;i++){
		if(elementId==conferences[i].id){
			document.getElementById('conferenceIdInput').value=conferences[i].id;
			document.getElementById('conferenceTopicInput').value=conferences[i].topic;
			document.getElementById('conferenceTitleInput').value=conferences[i].title; 
			document.getElementById('conferenceCountryInput').value=conferences[i].country;
			document.getElementById('conferencePlaceInput').value=conferences[i].place;
			document.getElementById('conferenceDateInput').value=conferences[i].date;
			document.getElementById('addConference').click();
			break;
		}
	}
  } else if(e.target.classList.contains('edit-scientist')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<scientists.length;i++){
		if(elementId==scientists[i].id){
			document.getElementById('scientistIdInput').value=scientists[i].id;
			document.getElementById('scientistNameInput').value=scientists[i].name;
			document.getElementById('scientistOrganisationInput').value=scientists[i].organisation; 
			document.getElementById('scientistCountryInput').value=scientists[i].country;
			document.getElementById('scientistFieldInput').value=scientists[i].field;
			document.getElementById('scientistDegreeInput').value=scientists[i].degree;
			document.getElementById('addScientist').click();
			break;
		}
	}
  } else if(e.target.classList.contains('edit-participation')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	for(let i=0;i<participations.length;i++){
		if(elementId==participations[i].id){
			document.getElementById('participationIdInput').value=participations[i].id;
			document.getElementById('participationConferenceInput').value=participations[i].conference;
			document.getElementById('participationScientistInput').value=participations[i].scientist; 
			document.getElementById('participationTopicInput').value=participations[i].topic;
			document.getElementById('participationTypeInput').value=participations[i].type;
			document.getElementById('participationDurationInput').value=participations[i].duration;
			document.getElementById('addParticipation').click();
			break;
		}
	}
  }
});
document.addEventListener('submit', function(e){
	if(e.target.id=="conferenceForm"){
		e.preventDefault();
		let id=document.getElementById('conferenceIdInput').value;
		let topic=document.getElementById('conferenceTopicInput').value;
		let title=document.getElementById('conferenceTitleInput').value; 
		let country=document.getElementById('conferenceCountryInput').value;
		let place=document.getElementById('conferencePlaceInput').value;
		let date=document.getElementById('conferenceDateInput').value;
		if(id==""){
			let newConference={
				id:++conferencesLastId,
				topic:topic,
				title:title,
				country:country,
				place:place,
				date:date
				}
			conferences.push(newConference);
		} else{
			for(let i=0;i<conferences.length;i++){
				if(id==conferences[i].id){
					conferences[i].id=document.getElementById('conferenceIdInput').value;
					conferences[i].topic=document.getElementById('conferenceTopicInput').value;
					conferences[i].title=document.getElementById('conferenceTitleInput').value; 
					conferences[i].country=document.getElementById('conferenceCountryInput').value;
					conferences[i].place=document.getElementById('conferencePlaceInput').value;
					conferences[i].date=document.getElementById('conferenceDateInput').value;
					break;
				}
			}
		}
		displayConferences();
		document.getElementById('conferenceIdInput').value="";
		document.getElementById('conferenceForm').reset();
		document.getElementById('closeConferenceModal').click();
		
	} else if(e.target.id=="scientistForm"){
		e.preventDefault();
		let id=document.getElementById('scientistIdInput').value;
		let name=document.getElementById('scientistNameInput').value;
		let organisation=document.getElementById('scientistOrganisationInput').value; 
		let country=document.getElementById('scientistCountryInput').value;
		let field=document.getElementById('scientistFieldInput').value;
		let degree=document.getElementById('scientistDegreeInput').value;
		if(id==""){
			let newScientist={
				id:++scientistsLastId,
				name:name,
				organisation:organisation,
				country:country,
				field:field,
				degree:degree
				}
			scientists.push(newScientist)
		} else{
			for(let i=0;i<scientists.length;i++){
				if(id==scientists[i].id){
					scientists[i].id=document.getElementById('scientistIdInput').value
					scientists[i].name=document.getElementById('scientistNameInput').value
					scientists[i].organisation=document.getElementById('scientistOrganisationInput').value
					scientists[i].country=document.getElementById('scientistCountryInput').value
					scientists[i].field=document.getElementById('scientistFieldInput').value
					scientists[i].degree=document.getElementById('scientistDegreeInput').value
					break;
				}
			}
		}
		displayScientists();
		document.getElementById('scientistIdInput').value="";
		document.getElementById('scientistForm').reset();
		document.getElementById('closeScientistModal').click();
		
	} else if(e.target.id=="participationForm"){
		e.preventDefault();
		let id=document.getElementById('participationIdInput').value;
		let conference=document.getElementById('participationConferenceInput').value;
		let scientist=document.getElementById('participationScientistInput').value; 
		let topic=document.getElementById('participationTopicInput').value;
		let type=document.getElementById('participationTypeInput').value;
		let duration=document.getElementById('participationDurationInput').value;
		if(id==""){
			let newParticipation={
				id:++participationsLastId,
				conference:conference,
				scientist:scientist,
				topic:topic,
				type:type,
				duration:duration
				}
			participations.push(newParticipation)
		} else{
			for(let i=0;i<participations.length;i++){
				if(id==participations[i].id){
					participations[i].id=document.getElementById('participationIdInput').value
					participations[i].conference=document.getElementById('participationConferenceInput').value
					participations[i].scientist=document.getElementById('participationScientistInput').value
					participations[i].topic=document.getElementById('participationTopicInput').value
					participations[i].type=document.getElementById('participationTypeInput').value
					participations[i].duration=document.getElementById('participationDurationInput').value
					break;
				}
			}
		}
		displayParticipations();
		document.getElementById('participationIdInput').value="";
		document.getElementById('participationForm').reset();
		document.getElementById('closeParticipationModal').click();
		
	} 
  });
