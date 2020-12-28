import { Injectable } from '@angular/core';
import { Test } from './test';
import { Problem } from './problem';
import { ProblemBuilder } from './problem-builder';

@Injectable({providedIn:'root'})
export class ProblemService{
    private _sampleProblem = new ProblemBuilder()
    .withId(0)
    .withTitle('Algoritmul lui Euclid')
    .withDescription(`Cel mai mare divizor comun dintre doua numere naturale a si b
        este cel mai mare numar natural pozitiv d care divide ambele numere.
        Dandu-se T perechi de numere naturale (a, b), sa se calculeze cel mai mare divizor
        comun al numerelor din fiecare pereche in parte.`)
    .withInputFormat(`Fisierul de intrare euclid2.in contine pe prima linie numarul T de perechi.
        Urmatoarele T linii contin cate doua numere naturale a si b.`)
    .withOutputFormat(`In fisierul de iesire euclid2.out se vor scrie T linii.
        A i-a linie din acest fisier contine cel mai mare divizor comun al numerelor
        din perechea de pe linia i+1 din fisierul de intrare.</p>`)
    .addConstraint(`<p>1 <= T <= 100.000</p>`)
    .addConstraint(`<p>Pentru fiecare pereche, 2 <= a, b <= 2 * 10^9</p>`)
    .addExample(new Test(`3<br>12 42<br>21 7<br>9 10<br>`, `6<br>7<br>1<br>`))
    .addExample(new Test(`3<br>12 42<br>21 7<br>9 10<br>`, `6<br>7<br>1<br>`))
    .withExampleExplanations('<p>Cel mai mare divizor comun al numerelor 12 si 42 este 6</p>')
    .withTimeLimitInMiliseconds(250)
    .withMemoryLimitInMegabytes(2)
    .withTutorial(`Cel mai mare divizor comun dintre doua numere a si b se poate calcula iterativ, 
        printr-o simpla parcurgere a tuturor numerelor de la 2 la minim(a, b). 
        Aceasta rezolvare se gaseste aici si obtine 30 de puncte.
        Pentru a imbunatati timpul de rulare putem folosi algoritmul lui Euclid prin scaderi, 
        ceea ce duce la obtinerea a 60 de puncte, sau prin impartiri, 
        solutie ce obtine punctajul maxim`)
    .build()
    
    private _problems = [
        this._sampleProblem,
        this._sampleProblem,
        this._sampleProblem,
        this._sampleProblem,
        this._sampleProblem,
        this._sampleProblem,
        this._sampleProblem,
        this._sampleProblem
    ];

    public getProblem(problemId:number):Problem{
        return this._problems.filter(problem => problem.id === problemId)[0];
    }

    public getProblemTutorial(problemId:number):string{
        return this._problems[problemId].tutorial;
    }

    public getAllProblems():Problem[]{
        return this._problems;
    }

    public addProblem(problem:Problem):void{
        this._problems.push(problem);
    }
}