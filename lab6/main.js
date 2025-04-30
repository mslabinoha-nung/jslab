class Scientist{
	id=null;
	name=null;
	organisation=null;
	country=null;
	field=null;
	degree=null;
	constructor(dataObj){
		this.id=dataObj.id;
		this.name=dataObj.name;
		this.organisation=dataObj.organisation;
		this.country=dataObj.country;
		this.field=dataObj.field;
		this.degree=dataObj.degree;
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.name}</td>
					<td>${this.organisation}</td>
					<td>${this.country}</td>
					<td>${this.field}</td>
					<td>${this.degree}</td>
					<td>
						<button data-id="${this.id}" class="edit-scientist btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-scientist btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	displayAsOption(){
		return `<option value="${this.name}">${this.name}</option>`
	}
	edit(dataObj){
		this.name=dataObj.name;
		this.organisation=dataObj.organisation;
		this.country=dataObj.country;
		this.field=dataObj.field;
		this.degree=dataObj.degree;
	}
}

class Conference{
	id=null;
	topic=null;
	title=null;
	country=null;
	place=null;
	date=null;
	constructor(dataObj){
		this.id=dataObj.id;
		this.topic=dataObj.topic;
		this.title=dataObj.title;
		this.country=dataObj.country;
		this.place=dataObj.place;
		this.date=dataObj.date;
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.topic}</td>
					<td>${this.title}</td>
					<td>${this.country}</td>
					<td>${this.place}</td>
					<td>${this.date}</td>
					<td>
						<button data-id="${this.id}" class="edit-conference btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-conference btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	displayAsOption(){
		return `<option value="${this.title}">${this.title}</option>`
	}
	edit(dataObj){
		this.topic=dataObj.topic;
		this.title=dataObj.title;
		this.country=dataObj.country;
		this.place=dataObj.place;
		this.date=dataObj.date;
	}
}
class Participation{
	constructor(dataObj){
		this.id=dataObj.id;
		this.conference=dataObj.conference;
		this.scientist=dataObj.scientist;
		this.topic=dataObj.topic;
		this.type=dataObj.type;
		this.duration=dataObj.duration;
		
	}
	displayAsTableRow(){
		return `<tr>
					<td>${this.conference}</td>
					<td>${this.scientist}</td>
					<td>${this.topic}</td>
					<td>${this.type}</td>
					<td>${this.duration}</td>
					<td>
						<button data-id="${this.id}" class="edit-participation btn btn-warning">Редагувати</button>
						<button data-id="${this.id}" class="delete-participation btn btn-danger">Видалити</button>
					</td>
				</tr>`
	}
	edit(dataObj){
		this.conference=dataObj.conference;
		this.scientist=dataObj.scientist;
		this.topic=dataObj.topic;
		this.type=dataObj.type;
		this.duration=dataObj.duration;
	}
}
class BaseList{
	constructor(){
		//this.id=1;
		this.list=[];
	}
	edit(dataObj){
		for(let i=0;i<this.list.length;i++){
			if(dataObj.id==this.list[i].id){
				this.list[i].edit(dataObj);
				break;
			}
		}
	}
	delete(id){
		for(let i=0;i<this.list.length;i++){
			if(id==this.list[i].id){
				this.list.splice(i,1);
				break;
			}
		}
	}
	displayTableRows(){
		let content=``;
		for(let i=0;i<this.list.length;i++){
			content+=this.list[i].displayAsTableRow();
		}
		
		return content;
	}
	displaySelectOptions(){
		let content=``;
		for(let i=0;i<this.list.length;i++){
			content+=this.list[i].displayAsOption();
		}
		return content;
	}
	getById(id){
		for(let i=0;i<this.list.length;i++){
			if(id==this.list[i].id){
				return this.list[i];
			}
		}
	}
}
class ScientistList extends BaseList{
	add(dataObj){
		//dataObj.id=this.id++
		let scientist=new Scientist(dataObj);
		this.list.push(scientist);
	}
	
}
class ConferenceList extends BaseList{
	add(dataObj){
		//dataObj.id=this.id++
		let conference=new Conference(dataObj);
		this.list.push(conference);
	}
}
class ParticipationList extends BaseList{
	add(dataObj){
		dataObj.id=this.id++
		let participation=new Participation(dataObj);
		this.list.push(participation);
	}
}
let scientists=new ScientistList();
fetch('https://6811c7d13ac96f7119a58af6.mockapi.io/api/scientists')
  .then(response => response.json())
  .then(data => {
	for(let i=0;i<data.length;i++){
		scientists.add(data[i]);
	}
	displayScientists();
  });

let conferences=new ConferenceList();
fetch('https://6811c7d13ac96f7119a58af6.mockapi.io/api/conferences')
  .then(response => response.json())
  .then(data => {
	for(let i=0;i<data.length;i++){
		conferences.add(data[i]);
	}
	displayConferences();
  });  
let participations=new ParticipationList();
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
	participationTabContent+=participations.displayTableRows();
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
	scientistSelectContent+=scientists.displaySelectOptions()
	scientistTabContent+=scientists.displayTableRows();
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
	conferenceSelectContent+=conferences.displaySelectOptions()
	conferenceTabContent+=conferences.displayTableRows();
	conferenceTabContent+=`</tbody>
		</table>`;
	conferenceTab.innerHTML=conferenceTabContent;
	conferenceSelect.innerHTML=conferenceSelectContent;
}
displayParticipations();

//event processors
document.addEventListener('click', function(e){
  if(e.target.classList.contains('delete-participation')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	participations.delete(elementId);
	displayParticipations();
  } else if(e.target.classList.contains('delete-scientist')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	scientists.delete(elementId);
	fetch('https://6811c7d13ac96f7119a58af6.mockapi.io/api/scientists/'+elementId,{
		method:"DELETE",
	})
	.then(response => response.json())
	.then(data => {
		displayScientists();
	});	
  } else if(e.target.classList.contains('delete-conference')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	conferences.delete(elementId);
	fetch('https://6811c7d13ac96f7119a58af6.mockapi.io/api/conferences/'+elementId,{
		method:"DELETE",
	})
	.then(response => response.json())
	.then(data => {
		displayConferences();
	});
	
  } else if(e.target.classList.contains('edit-conference')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let conference=conferences.getById(elementId);
	document.getElementById('conferenceIdInput').value=conference.id;
	document.getElementById('conferenceTopicInput').value=conference.topic;
	document.getElementById('conferenceTitleInput').value=conference.title; 
	document.getElementById('conferenceCountryInput').value=conference.country;
	document.getElementById('conferencePlaceInput').value=conference.place;
	document.getElementById('conferenceDateInput').value=conference.date;
	document.getElementById('addConference').click();
	
  } else if(e.target.classList.contains('edit-scientist')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let scientist=scientists.getById(elementId);
	document.getElementById('scientistIdInput').value=scientist.id;
	document.getElementById('scientistNameInput').value=scientist.name;
	document.getElementById('scientistOrganisationInput').value=scientist.organisation; 
	document.getElementById('scientistCountryInput').value=scientist.country;
	document.getElementById('scientistFieldInput').value=scientist.field;
	document.getElementById('scientistDegreeInput').value=scientist.degree;
	document.getElementById('addScientist').click();
  } else if(e.target.classList.contains('edit-participation')){
	e.preventDefault();
	let elementId=e.target.getAttribute('data-id');
	let participation=participations.getById(elementId);
	document.getElementById('participationIdInput').value=participation.id;
	document.getElementById('participationConferenceInput').value=participation.conference;
	document.getElementById('participationScientistInput').value=participation.scientist; 
	document.getElementById('participationTopicInput').value=participation.topic;
	document.getElementById('participationTypeInput').value=participation.type;
	document.getElementById('participationDurationInput').value=participation.duration;
	document.getElementById('addParticipation').click();
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
		let newConference={
			id:id,
			topic:topic,
			title:title,
			country:country,
			place:place,
			date:date
		}
		if(id==""){
			fetch('https://6811c7d13ac96f7119a58af6.mockapi.io/api/conferences',{
				method:"POST",
				body:JSON.stringify(newConference)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					conferences.add(data[i]);
				}
				displayConferences();
			});		
			conferences.add(newConference);
		} else{
			fetch('https://6811c7d13ac96f7119a58af6.mockapi.io/api/conferences/'+newConference.id,{
				method:"PUT",
				body:JSON.stringify(newConference)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					conferences.add(data[i]);
				}
				displayConferences();
			});	
			conferences.edit(newConference);
		}
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
		
			let newScientist={
				id:id,
				name:name,
				organisation:organisation,
				country:country,
				field:field,
				degree:degree
				}
		if(id==""){
			fetch('https://6811c7d13ac96f7119a58af6.mockapi.io/api/scientists',{
				method:"POST",
				body:JSON.stringify(newScientist)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					scientists.add(data[i]);
				}
				displayScientists();
			});		
			scientists.add(newScientist)
			
		} else{
			fetch('https://6811c7d13ac96f7119a58af6.mockapi.io/api/scientists/'+newScientist.id,{
				method:"PUT",
				body:JSON.stringify(newScientist)
			})
			.then(response => response.json())
			.then(data => {
				for(let i=0;i<data.length;i++){
					scientists.add(data[i]);
				}
				displayScientists();
			});	
			scientists.edit(newScientist)
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
		
			let newParticipation={
				id:id,
				conference:conference,
				scientist:scientist,
				topic:topic,
				type:type,
				duration:duration
				}
		if(id==""){
			participations.add(newParticipation)
		} else{
			participations.edit(newParticipation)
		}
		displayParticipations();
		document.getElementById('participationIdInput').value="";
		document.getElementById('participationForm').reset();
		document.getElementById('closeParticipationModal').click();
		
	} 
  });