var names=new Array();
names[0]="Rahul";
names[1]="Jonatthon";
names[2]="Jerry";
names[3]="jimmy";
names[4]="suresh";
names[5]="anmol";
names[6]="varun";
names[7]="ramesh";
names[8]="shreya";
names[9]="jiya";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}