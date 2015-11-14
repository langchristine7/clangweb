/*
affiche le tableau html en fonction du mois
*/
function getJourFr(indice) {
	var jours = ["di", "lu","ma","me","je","ve","sa"];
	if (indice < 0 || indice > 6)
		return "??";
	else
		return jours[indice];
}

function affiche_mois() {
	$('#titre_mois').text($("#mois option:selected").text());
   var mois = $('#mois').val();
   //alert ("affiche_mois " + mois);
   if (mois < 1 || mois > 12)
    return;
  $('#tab_mois').html("");

	var i;
	var jourSem;
	var jour = new Date("2015/"+mois+"/01");
	// $('#debug').append("mois en cours : " + jour + "<br>");
	// $('#debug').append("mois en cours : " + mois + "<br>");
	// $('#debug').append("mois auj : " + (new Date()).getMonth() + "<br>");
	for  (i = 1 ; i <= 31 ; i++)  {
		jour.setDate(i);
		if (jour.getMonth()==mois-1) {
			//alert(jour);
			jourSem = jour.getDay();	//0 = dimanche
			$('#tab_mois').append ("<tr class=\"jourSem"+ jourSem + "\">");
			$('#tab_mois').append ("	<td id=\"td_JSL_" +  i + "\" " + " class=\"jourSem" +jourSem  +  "\">" + getJourFr(jourSem) + "</td>");
			$('#tab_mois').append ("	<td id=\"td_I_" +  i + "\" " + " class=\"jourSem" +jourSem  + "\">" + i + "</td>");
			//$('#tab_mois').append ("<td>" +"jour" + "</td>");
			$('#tab_mois').append ("	<td id=\"td_CL_" +  i + "\" " + " class=\"jourSem" +jourSem  +  "\">" + "</td>");
			//$('#tab_mois').append ("<td>"+ "cours" + "</td>");
			$('#tab_mois').append ("	<td id=\"td_FL_" +  i + "\" " + " class=\"jourSem" +jourSem  + "\">" + "</td>");
			$('#tab_mois').append ("</tr>");
	    }
	}

		//$('#debug').append(formations.length);

	for (i = 0 ; i <= formations.length ; i++){

		var j = formations[i].jour;
		if (formations[i].mois == mois) {
			//$('#debug').append("#td_CL_"+j+"<br>");
			$('#td_CL_'+j).text(formations[i].cours);
			$("#td_FL_"+j).text(formations[i].formateur);
		}
	}
}
