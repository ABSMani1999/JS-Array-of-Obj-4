
const users=[
	{
	first_name:'mike',
	last_name:'sheridan'
	},
	{
	first_name:'tim',
	last_name:'lee'
	},
	{
	first_name:'john',
	last_name:'carte'
	},
];
var  b=[];
users.map(function(a){
	b.push(a.first_name+" "+a.last_name);
 });
 console.table(b);