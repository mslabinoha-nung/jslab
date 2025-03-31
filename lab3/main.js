let scientists=[
	{
		name:"Marian Slabinoha",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"IT",
		degree:"PhD"
	},
	{
		name:"Bohdan Pashkovskyi",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"IT",
		degree:"PhD"
	},
	{
		name:"Ihor Chudyk",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"Oil and Gas Engineering",
		degree:"Dr.Sc."
	}
];
let conferences=[
	{
		topic:"Економіка",
		title:"«Сталий розвиток економіки, підприємств та суспільства»",
		country:"Ukraine",
		place:"ІФНТУНГ",
		date:"10-11 квітня 2025 р."
	},{
		topic:"Туризм",
		title:"«Адаптація до глобальних змін та викликів в економіці, туризмі, рекреації та захисті довкілля»",
		country:"Ukraine",
		place:"ІФНТУНГ",
		date:"8-9 травня 2025 р."
	}, {
		topic:"Публічне управління",
		title:"«Розвиток компетентності в публічному секторі: європейські стандарти та перспективи»",
		country:"Ukraine",
		place:"ІФНТУНГ",
		date:"30 вересня 2021 р."
	}
];
let participations=[
	{
		conference:"«Сталий розвиток економіки, підприємств та суспільства»",
		scientist:"Bohdan Pashkovskyi",
		topic:"Якась глобальна тема",
		type:"доповідь",
		duration:"50 хв"
	},{
		conference:"«Адаптація до глобальних змін та викликів в економіці, туризмі, рекреації та захисті довкілля»",
		scientist:"Bohdan Pashkovskyi",
		topic:"Якась не дуже глобальна тема",
		type:"доповідь",
		duration:"20 хв"
	},{
		conference:"«Адаптація до глобальних змін та викликів в економіці, туризмі, рекреації та захисті довкілля»",
		scientist:"Marian Slabinoha",
		topic:"Ще про щось там порозказували",
		type:"доповідь",
		duration:"30 хв"
	}
]
const participationTab=document.getElementById('participation');
let participationTabContent=`
	<h3>Участі у конференціях</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Конференція</th>
				<th>Вчений</th>
				<th>Тема доповіді</th>
				<th>Тип виступу</th>
				<th>Тривалість</th>
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
			</tr>
	`;
}
participationTabContent+=`</tbody>
	  </table>`;
participationTab.innerHTML=participationTabContent;	  
const scientistTab=document.getElementById('scientist');
let scientistTabContent=`
	<h3>Вчені</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Ім'я</th>
				<th>Організація</th>
				<th>Країна</th>
				<th>Спеціалізація</th>
				<th>Науковий ступінь</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<scientists.length;i++){
	scientistTabContent+=`
			<tr>
				<td>${scientists[i].name}</td>
				<td>${scientists[i].organisation}</td>
				<td>${scientists[i].country}</td>
				<td>${scientists[i].field}</td>
				<td>${scientists[i].degree}</td>
			</tr>
	`;
}
scientistTabContent+=`</tbody>
	  </table>`;
scientistTab.innerHTML=scientistTabContent;
const conferenceTab=document.getElementById('conference');
let conferenceTabContent=`
	<h3>Конференції</h3>
	<table class="table table-striped">
		<thead>
			<tr>
				<th>Тематика</th>
				<th>Назва</th>
				<th>Країна</th>
				<th>Місце проведення</th>
				<th>Дата проведення</th>
			</tr>
		</thead>
		<tbody>
	`;
for(let i=0;i<conferences.length;i++){
	conferenceTabContent+=`
			<tr>
				<td>${conferences[i].topic}</td>
				<td>${conferences[i].title}</td>
				<td>${conferences[i].country}</td>
				<td>${conferences[i].place}</td>
				<td>${conferences[i].date}</td>
			</tr>
	`;
}
conferenceTabContent+=`</tbody>
	  </table>`;
conferenceTab.innerHTML=conferenceTabContent;