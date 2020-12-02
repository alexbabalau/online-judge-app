import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

export class RouteParameterRetrieverObservable{
    private _parameterValue:string = '';
    private _paramsSubscription:Subscription = null;


    private setInitialParameterValue():void{
        this._parameterValue = this._route.snapshot.params[this._parameterName];
        console.log(this._route);
    }

    private hasParameterChanged(params:Params):boolean{
        return params[this._parameterName] !== this._parameterValue;
    }


    private handleChangedRoute(params:Params):void{
        if(this.hasParameterChanged(params)){
            this.updateParameter(params);
        }
    }

    private updateParameter(params: Params) {
        this._parameterValue = params[this._parameterName];
        this._notifyChange();
    }

    private listenToParameterChanges():void{
        this._paramsSubscription = this._route.params.subscribe(
            this.handleChangedRoute.bind(this)
        );
    }

    private constructor(private _route:ActivatedRoute,
        private _parameterName:string,
        private _notifyChange:() => void = () => {}){
        this.setInitialParameterValue();
        this.listenToParameterChanges();
    }

    public static fromRouteAndParameterName(route:ActivatedRoute, parameterName:string):RouteParameterRetrieverObservable{
        return new RouteParameterRetrieverObservable(route, parameterName);
    }

    public static fromRouteParameterNameAndNotifyChange(route:ActivatedRoute, parameterName:string, notifyChange:() => void):RouteParameterRetrieverObservable{
        return new RouteParameterRetrieverObservable(route, parameterName, notifyChange);
    }

    get parameterValue():string{
        return this._parameterValue;
    }

    public destroy(){
        this._paramsSubscription.unsubscribe();
    }

}