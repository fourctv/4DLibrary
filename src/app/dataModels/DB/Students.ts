import { FourDModel } from 'js44d';

export class Students extends FourDModel {

	public static kTABLE:string = 'Students';
	public static kID:string = 'Students.ID';
	public static klastName:string = 'Students.lastName';
	public static kfirstName:string = 'Students.firstName';
	public static kaddress:string = 'Students.address';
	public static kzipCode:string = 'Students.zipCode';
	public static kcity:string = 'Students.city';
	public static kclass:string = 'Students.class';
	public static kprimaryTeacher:string = 'Students.primaryTeacher';
	public static ktelephone:string = 'Students.telephone';
	public static kemail:string = 'Students.email';

	tableName:string = 'Students';
	tableNumber:number = 3;
	primaryKey_:string = 'ID';
	fields:Array<any> = [
		{name:'ID', longname:'Students.ID', type:'number', readonly:true, indexed:true, unique:true},
		{name:'lastName', longname:'Students.lastName', type:'string', length:80, indexed:true},
		{name:'firstName', longname:'Students.firstName', type:'string', length:80, indexed:true},
		{name:'address', longname:'Students.address', type:'string'},
		{name:'zipCode', longname:'Students.zipCode', type:'string', length:10},
		{name:'city', longname:'Students.city', type:'string', length:80},
		{name:'class', longname:'Students.class', type:'string', length:30, indexed:true},
		{name:'primaryTeacher', longname:'Students.primaryTeacher', type:'string', length:80},
		{name:'telephone', longname:'Students.telephone', type:'string', length:30},
		{name:'email', longname:'Students.email', type:'string', length:255}
	];

	get ID():number {return this.get('ID');}
	set ID(v:number) {this.set('ID',v);}

	get lastName():string {return this.get('lastName');}
	set lastName(v:string) {this.set('lastName',v);}

	get firstName():string {return this.get('firstName');}
	set firstName(v:string) {this.set('firstName',v);}

	get address():string {return this.get('address');}
	set address(v:string) {this.set('address',v);}

	get zipCode():string {return this.get('zipCode');}
	set zipCode(v:string) {this.set('zipCode',v);}

	get city():string {return this.get('city');}
	set city(v:string) {this.set('city',v);}

	get class():string {return this.get('class');}
	set class(v:string) {this.set('class',v);}

	get primaryTeacher():string {return this.get('primaryTeacher');}
	set primaryTeacher(v:string) {this.set('primaryTeacher',v);}

	get telephone():string {return this.get('telephone');}
	set telephone(v:string) {this.set('telephone',v);}

	get email():string {return this.get('email');}
	set email(v:string) {this.set('email',v);}


}

