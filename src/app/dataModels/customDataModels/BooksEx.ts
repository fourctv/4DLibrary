import { Books } from '../DB/Books';
import { Loans } from '../DB/Loans';
import { LoansEx } from './LoansEx';

export class BooksEx extends Books {
    fields: Array<any> = [
        { name: 'isLoaned', formula: 'BookisOut'},
        { name: 'loansList', subTable: new LoansEx(), joinPK: Books.kID, joinFK: Loans.kbook_Id }
    ].concat(new Books().fields);    

    // calculated fields
    get isLoaned(): string { return this.get('isLoaned'); }
    set isLoaned(v: string) { this.set('isLoaned', v); }

    // children records
    get loansList(): Array<LoansEx> {
        return this.get('loansList');
    }
    set loansList(v: Array<LoansEx>) { this.set('loansList', v); }}