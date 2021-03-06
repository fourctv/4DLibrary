import { FourDModel } from 'js44d';

export class Books extends FourDModel {

	public static kTABLE:string = 'Books';
	public static kID:string = 'Books.ID';
	public static ktitle:string = 'Books.title';
	public static kdescription:string = 'Books.description';
	public static kphoto:string = 'Books.photo';
	public static kpurchaseDate:string = 'Books.purchaseDate';
	public static kauthor:string = 'Books.author';

	tableName:string = 'Books';
	tableNumber:number = 1;
	primaryKey_:string = 'ID';
	fields:Array<any> = [
		{name:'ID', longname:'Books.ID', type:'number', readonly:true, indexed:true, unique:true},
		{name:'title', longname:'Books.title', type:'string', length:255, indexed:true},
		{name:'description', longname:'Books.description', type:'string'},
		{name:'photo', longname:'Books.photo', type:'picture'},
		{name:'purchaseDate', longname:'Books.purchaseDate', type:'Date'},
		{name:'author', longname:'Books.author', type:'string', length:255, indexed:true}
	];

	get ID():number {return this.get('ID');}
	set ID(v:number) {this.set('ID',v);}

	get title():string {return this.get('title');}
	set title(v:string) {this.set('title',v);}

	get description():string {return this.get('description');}
	set description(v:string) {this.set('description',v);}

	get photo():string {return this.get('photo');}
	set photo(v:string) {this.set('photo',v);}

	get purchaseDate():Date {return this.get('purchaseDate');}
	set purchaseDate(v:Date) {this.set('purchaseDate',v);}

	get author():string {return this.get('author');}
	set author(v:string) {this.set('author',v);}


}

