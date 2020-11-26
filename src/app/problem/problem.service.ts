import { Injectable } from '@angular/core';
import { Example } from './example';
import { Problem } from './problem';
import { ProblemBuilder } from './problem-builder';

@Injectable({providedIn:'root'})
export class ProblemService{
    private _problems = [
        new ProblemBuilder()
        .withTitle('Algoritmul lui Euclid')
        .withDescription(`Cel mai mare divizor comun dintre doua numere naturale a si b
            este cel mai mare numar natural pozitiv d care divide ambele numere.
            Dandu-se T perechi de numere naturale (a, b), sa se calculeze cel mai mare divizor
            comun al numerelor din fiecare pereche in parte.`)
        .withInputFormat(`Fisierul de intrare euclid2.in contine pe prima linie numarul T de perechi.
            Urmatoarele T linii contin cate doua numere naturale a si b.`)
        .withOutputFormat(`In fisierul de iesire euclid2.out se vor scrie T linii.
            A i-a linie din acest fisier contine cel mai mare divizor comun al numerelor
            din perechea de pe linia i+1 din fisierul de intrare.`)
        .addConstraint(`1 <= T <= 100.000`)
        .addConstraint(`Pentru fiecare pereche, 2 <= a, b <= 2 * 10^9`)
        .addExample(new Example(`3<br>12 42<br>21 7<br>9 10<br>`, `6<br>7<br>1<br>`))
        .addExample(new Example(`3<br>12 42<br>21 7<br>9 10<br>`, `6<br>7<br>1<br>`))
        .withExampleExplanations('Cel mai mare divizor comun al numerelor 12 si 42 este 6')
        .withTimeLimitInMiliseconds(250)
        .withMemoryLimitInMegabytes(2)
        .build()
    ];

    public getProblem(id:number):Problem{
        return this._problems[id];
    }

}