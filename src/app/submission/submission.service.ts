import { Injectable } from '@angular/core';
import { ProblemBuilder } from '../problem/problem-builder';
import { SourceCodeBuilder } from './source-code-builder';
import { Submission } from './submission';
import { SubmissionBuilder } from './submission-builder';

@Injectable({providedIn:'root'})
export class SubmissionService{
    private _submission:Submission[] = [
        new SubmissionBuilder()
        .withTimeInMiliseconds(46)
        .withMemoryInMegaBytes(1)
        .withDate(new Date())
        .withSourceCode(new SourceCodeBuilder()
            .withCode(
            `
            #include<fstream>
            using namespace std;
            ifstream f("euclid2.in");
            ofstream g("euclid2.out");
            int t;
            int Euclid_algorithm(int a,int b)
            {
                int r=a%b;
                while(r!=0)
                {
                    a=b;
                    b=r;
                    r=a%b;
                }
                return(b);
            }
            void read_numbers_and_process()
            {
                f>>t;
                int i,val1,val2;
                for(i=0;i<t;i++)
                {
                    f>>val1;
                    f>>val2;
                    g<<Euclid_algorithm(val1,val2)<<"\\n";
                }
            }
            int main()
            {
                read_numbers_and_process();
            }`)
            .withLanguage('cpp')
            .withSizeInBytes(1024)
            .build())
        .withProblem(new ProblemBuilder()
            .withTitle('Algoritmul lui Euclid')
            .build())
        .withScore(100)
        .build()
    ];

    constructor(){}

    public get(submissionId:number):Submission{
        return this._submission[submissionId];
    }
    
}