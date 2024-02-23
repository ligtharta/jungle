
function BouwLinks() {
	if (top.length!=3) return;
	stokje=(self.document.title * 41) + 58;
	top.links.document.open();
	top.links.document.writeln("<HTML><STYLE TYPE='text/css'><!-- A {color:#66ff77;text-decoration:none;} A:Active {color:#FFFFcc;} A:Hover {color:#FFFFcc;} TD {font-size:10pt;font-family:'sans-serif';} --></STYLE>");
	top.links.document.writeln("<BODY background='decor_a1.jpg' bgcolor='#ffff99'>");
	top.links.document.writeln("<DIV STYLE='position:absolute; background-color:transparent; top:6px; left:129px; border-width:0;'><img src='decor_b1.jpg'></div>");
	top.links.document.writeln("<DIV STYLE='position:absolute; background-color:transparent; top:" + stokje + "px; left:143px; border-width:0;'><img src='decor_b2.jpg'></div>");
	top.links.document.writeln("<DIV STYLE='position:absolute; background-color:transparent; top:60px; left:0px; border-width:0;'><TABLE WIDTH=130 CELLSPACING=0 CELLPADDING=0 BORDER=0>");
	PrintLink('Intro...','in_split.html');
	PrintLink('De voorbereidingen','vb_split.html');
	PrintLink('Kalimantan in beeld','kb_split.html');
	PrintLink('Jungle-expeditie','je_split.html');
	PrintLink('Route-info','rt_split.html');
	PrintLink('Dagboek','db_split.html');
	PrintLink('Overig','ov_split.html');
	top.links.document.writeln("<TR><TD HEIGHT=41 VALIGN=top ALIGN=right><A TARGET='rechts' href="+ String.fromCharCode(34) + "javascript:top.location.href='../index.html'" + String.fromCharCode(34) + ">Terug</A></TD></TR>");

	top.links.document.writeln("</table></div></BODY></html>");
	top.links.document.close();
}

function PrintLink(Beschr, File) {
	top.links.document.writeln("<TR><TD HEIGHT=41 VALIGN=top ALIGN=right><A TARGET='rechts' HREF='"+ File + "'>" + Beschr + "</A></TD></TR>");
}

function PrintTitel(Titel) {
	if (top.length!=3) return;
	top.boven.document.open();
	top.boven.document.write("<HTML><BODY BACKGROUND='decor_a2.jpg'><DIV STYLE='position:absolute; background-color:transparent; top:15px; left:0px; border-width:0; color:#ffff99;font-family:serif;font-size:18pt;'>");
	top.boven.document.write("<B>" + Titel + "</B></div></BODY></HTML>");
	top.boven.document.close();
}


function PrintMenu(A,X) {
	if (top.length!=3) return;	
	top.rechts.menu.document.open();
	top.rechts.menu.document.write("<HTML><STYLE TYPE='text/css'><!--  BODY {font-size:8pt; font-family:sans-serif;} A {color:#000077;text-decoration:none;} A:Visited {color:#000077;} A:Active {color:#6666ee;} A:Hover {color:#6666ee;} HR {color:black;} --></STYLE>");
	top.rechts.menu.document.write("<BODY style='margin:0px;padding:0px;' BGCOLOR='#FFFF99'>");
	top.rechts.menu.document.write("<DIV STYLE='position:absolute; background-color:transparent; top:-3px; left:0px; border-width:0px;'><HR WIDTH=100% SIZE=1 NOSHADE></div>");
	top.rechts.menu.document.write("<DIV STYLE='position:absolute; background-color:transparent; top:5px; left:0px; border-width:0px;'>");
	for (var i=0;i<X;i++) { top.rechts.menu.document.write("<A HREF='" + A[i*2] + ".html' TARGET='tekst'>"+A[(i*2)+1] + "</A>");
	if (i<(X-1)) top.rechts.menu.document.write(" | ");}
	top.rechts.menu.document.write("</div></BODY></HTML>");
	top.rechts.menu.document.close();
}

function ToonKaart(Titel, Plaats)  {
	startDate= new Date();
	var oldurl = document.URL;
	var olddoc = document;
	olddoc.URL = oldurl;
	NewWin=window.open("",startDate.getTime(),"toolbar=no,location=no,resizable=yes,status=yes,scrollbars=no,menubar=no,width=602,height=395");
	NewWin.document.open();
	NewWin.document.writeln("<HTML>");
	NewWin.document.writeln("<BODY style='margin:0px;padding:0px;' bgcolor=#ffff99><CENTER><B>" + Titel + "</B></CENTER>");
	NewWin.document.writeln("<applet code='Route.class' height=375 width=600 align=middle>");
	NewWin.document.writeln("<PARAM name='Plaats' value='" + Plaats + "'></applet><p>");
	NewWin.document.writeln("</body></html>");
	NewWin.document.close();
}

