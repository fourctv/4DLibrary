import { Loans } from '../DB/Loans';
import { Books } from '../DB/Books';
import { Students } from '../DB/Students';


export class LoansEx extends Loans {
    fields: Array<any> = [
        { name: 'BookTitle', longname: Books.ktitle, type: 'text', related: true },
        { name: 'LastName', longname: Students.klastName, type: 'text', related: true },
        { name: 'FirstName', longname: Students.kfirstName, type: 'text', related: true }
    ].concat(new Loans().fields);

    // related fields
    get BookTitle(): string { return this.get('BookTitle'); }
    set BookTitle(v: string) { this.set('BookTitle', v); }

    get LastName(): string { return this.get('LastName'); }
    set LastName(v: string) { this.set('LastName', v); }

    get FirstName(): string { return this.get('FirstName'); }
    set FirstName(v: string) { this.set('FirstName', v); }

    get StudentName(): string { return this.FirstName + ' ' + this.LastName; }
}