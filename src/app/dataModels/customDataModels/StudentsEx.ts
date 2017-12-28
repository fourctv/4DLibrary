import { Students } from '../DB/Students';
import { Loans } from '../DB/Loans';
import { LoansEx } from './LoansEx';

export class StudentsEx extends Students {
    fields: Array<any> = [
        { name: 'loansList', subTable: new LoansEx(), joinPK: Students.kID, joinFK: Loans.kstudent_Id }
    ].concat(new Students().fields);    

    // children records
    get loansList(): Array<LoansEx> {
        return this.get('loansList');
    }
    set loansList(v: Array<LoansEx>) { this.set('loansList', v); }}