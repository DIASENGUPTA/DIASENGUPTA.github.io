var names=new Array();
names[0]="Dia";
names[1]="Jiya";
names[2]="Riya";
names[3]="Piya";
names[4]="Tiya";
names[5]="Jina";
names[6]="Mina";
names[7]="Tina";
names[8]="Hina";
names[9]="Rina";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}