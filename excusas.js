function excusas(){
	
  var sujeto = [ 'pareja' , 'madre' , 'hermano '];
  var verbo = ['se comió',  'destruyó', 'borró ', 'tachó'];
  var predicado = [ 'móvil' , ' cine ' ,' tarea ' , ' concierto' , 'visualización '];
	
	var quien = sujeto[Math.round(Math.random()*(sujeto.length-1))];
	var hizo = verbo[Math.round(Math.random()*(verbo.length-1))];
	var que = predicado[Math.round(Math.random()*(predicado.length-1))];
	
	document.getElementById('excusas').innerHTML = '<div>Mi ' + quien + ' ' + hizo + '<br> mi ' + que + '.</div>'
	
}