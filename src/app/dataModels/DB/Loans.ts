import { FourDModel } from 'js44d';

export class Loans extends FourDModel {

	public static kTABLE:string = 'Loans';
	public static kbook_Id:string = 'Loans.book_Id';
	public static kstudent_Id:string = 'Loans.student_Id';
	public static kborrowDate:string = 'Loans.borrowDate';
	public static kreturnDate:string = 'Loans.returnDate';
	public static kID:string = 'Loans.ID';

	tableName:string = 'Loans';
	tableNumber:number = 2;
	primaryKey_:string = 'ID';
	fields:Array<any> = [
		{name:'book_Id', longname:'Loans.book_Id', type:'number', indexed:true, relatesTo:'Books.ID'},
		{name:'student_Id', longname:'Loans.student_Id', type:'number', indexed:true, relatesTo:'Students.ID'},
		{name:'borrowDate', longname:'Loans.borrowDate', type:'Date'},
		{name:'returnDate', longname:'Loans.returnDate', type:'Date'},
		{name:'ID', longname:'Loans.ID', type:'number', indexed:true, unique:true}
	];

	get book_Id():number {return this.get('book_Id');}
	set book_Id(v:number) {this.set('book_Id',v);}

	get student_Id():number {return this.get('student_Id');}
	set student_Id(v:number) {this.set('student_Id',v);}

	get borrowDate():Date {return this.get('borrowDate');}
	set borrowDate(v:Date) {this.set('borrowDate',v);}

	get returnDate():Date {return this.get('returnDate');}
	set returnDate(v:Date) {this.set('returnDate',v);}

	get ID():number {return this.get('ID');}
	set ID(v:number) {this.set('ID',v);}


}

