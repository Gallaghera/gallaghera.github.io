(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Xiww:function(t,e,n){"use strict";n.r(e),n.d(e,"JsonFormatterModule",(function(){return dt}));var r=n("ofXK"),i=n("tyNb"),o=n("fXoL"),s=n("HDdC"),a=n("DH7j"),l=n("lJxs"),u=n("XoHu"),h=n("Cfvw");function c(t,e){return new s.a(n=>{const r=t.length;if(0===r)return void n.complete();const i=new Array(r);let o=0,s=0;for(let a=0;a<r;a++){const l=Object(h.a)(t[a]);let u=!1;n.add(l.subscribe({next:t=>{u||(u=!0,s++),i[a]=t},error:t=>n.error(t),complete:()=>{o++,o!==r&&u||(s===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=i[n],t),{}):i),n.complete())}}))}})}const d=new o.q("NgValueAccessor"),p={provide:d,useExisting:Object(o.S)(()=>g),multi:!0};let g=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.D),o.Jb(o.l))},t.\u0275dir=o.Eb({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(t,e){1&t&&o.Tb("change",(function(t){return e.onChange(t.target.checked)}))("blur",(function(){return e.onTouched()}))},features:[o.yb([p])]}),t})();const m={provide:d,useExisting:Object(o.S)(()=>_),multi:!0},f=new o.q("CompositionEventMode");let _=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(r.n)()?Object(r.n)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.D),o.Jb(o.l),o.Jb(f,8))},t.\u0275dir=o.Eb({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&o.Tb("input",(function(t){return e._handleInput(t.target.value)}))("blur",(function(){return e.onTouched()}))("compositionstart",(function(){return e._compositionStart()}))("compositionend",(function(t){return e._compositionEnd(t.target.value)}))},features:[o.yb([m])]}),t})(),y=(()=>{class t{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.Eb({type:t}),t})();function b(){throw new Error("unimplemented")}class C extends y{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null,this._rawValidators=[],this._rawAsyncValidators=[]}get validator(){return b()}get asyncValidator(){return b()}}let v=(()=>{class t extends class{constructor(t){this._cd=t}get ngClassUntouched(){return!!this._cd.control&&this._cd.control.untouched}get ngClassTouched(){return!!this._cd.control&&this._cd.control.touched}get ngClassPristine(){return!!this._cd.control&&this._cd.control.pristine}get ngClassDirty(){return!!this._cd.control&&this._cd.control.dirty}get ngClassValid(){return!!this._cd.control&&this._cd.control.valid}get ngClassInvalid(){return!!this._cd.control&&this._cd.control.invalid}get ngClassPending(){return!!this._cd.control&&this._cd.control.pending}}{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(C,2))},t.\u0275dir=o.Eb({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&o.Bb("ng-untouched",e.ngClassUntouched)("ng-touched",e.ngClassTouched)("ng-pristine",e.ngClassPristine)("ng-dirty",e.ngClassDirty)("ng-valid",e.ngClassValid)("ng-invalid",e.ngClassInvalid)("ng-pending",e.ngClassPending)},features:[o.wb]}),t})();function V(t){return null==t||0===t.length}const w=new o.q("NgValidators"),E=new o.q("NgAsyncValidators"),O=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class A{static min(t){return e=>{if(V(e.value)||V(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(V(e.value)||V(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return V(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return V(t.value)||O.test(t.value)?null:{email:!0}}static minLength(t){return e=>{if(V(e.value))return null;const n=e.value?e.value.length:0;return n<t?{minlength:{requiredLength:t,actualLength:n}}:null}}static maxLength(t){return e=>{const n=e.value?e.value.length:0;return n>t?{maxlength:{requiredLength:t,actualLength:n}}:null}}static pattern(t){if(!t)return A.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(V(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(S);return 0==e.length?null:function(t){return N(function(t,e){return e.map(e=>e(t))}(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(S);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if(Object(a.a)(e))return c(e,null);if(Object(u.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return c(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return c(t=1===t.length&&Object(a.a)(t[0])?t[0]:t,null).pipe(Object(l.a)(t=>e(...t)))}return c(t,null)}(function(t,e){return e.map(e=>e(t))}(t,e).map(M)).pipe(Object(l.a)(N))}}}function S(t){return null!=t}function M(t){const e=Object(o.qb)(t)?Object(h.a)(t):t;if(!Object(o.pb)(e))throw new Error("Expected validator to return Promise or Observable.");return e}function N(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function D(t){return t.validate?e=>t.validate(e):t}function k(t){return t.validate?e=>t.validate(e):t}const T={provide:d,useExisting:Object(o.S)(()=>x),multi:!0};let x=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.D),o.Jb(o.l))},t.\u0275dir=o.Eb({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,e){1&t&&o.Tb("change",(function(t){return e.onChange(t.target.value)}))("input",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},features:[o.yb([T])]}),t})();const P={provide:d,useExisting:Object(o.S)(()=>I),multi:!0};let j=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac}),t})(),I=(()=>{class t{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(C),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this._throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}_throwNameError(){throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.D),o.Jb(o.l),o.Jb(j),o.Jb(o.r))},t.\u0275dir=o.Eb({type:t,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,e){1&t&&o.Tb("change",(function(){return e.onChange()}))("blur",(function(){return e.onTouched()}))},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[o.yb([P])]}),t})();const G={provide:d,useExisting:Object(o.S)(()=>J),multi:!0};let J=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.D),o.Jb(o.l))},t.\u0275dir=o.Eb({type:t,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(t,e){1&t&&o.Tb("change",(function(t){return e.onChange(t.target.value)}))("input",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},features:[o.yb([G])]}),t})();const F='\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',L='\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });';class W{static controlParentException(){throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      "+F)}static ngModelGroupException(){throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${L}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`)}static missingFormException(){throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       "+F)}static groupParentException(){throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      "+L)}static arrayParentException(){throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });')}static disabledAttrWarning(){console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")}static ngModelWarning(t){console.warn(`\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${"formControl"===t?"FormControlDirective":"FormControlName"}#use-with-ngmodel\n    `)}}const R={provide:d,useExisting:Object(o.S)(()=>U),multi:!0};let U=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=o.rb}set compareWith(t){if("function"!=typeof t)throw new Error("compareWith must be a function, but received "+JSON.stringify(t));this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=function(t,e){return null==t?""+e:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.D),o.Jb(o.l))},t.\u0275dir=o.Eb({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&o.Tb("change",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},inputs:{compareWith:"compareWith"},features:[o.yb([R])]}),t})();const $={provide:d,useExisting:Object(o.S)(()=>B),multi:!0};let B=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=o.rb}set compareWith(t){if("function"!=typeof t)throw new Error("compareWith must be a function, but received "+JSON.stringify(t));this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(e.hasOwnProperty("selectedOptions")){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),i=this._getOptionValue(r.value);n.push(i)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.D),o.Jb(o.l))},t.\u0275dir=o.Eb({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&o.Tb("change",(function(t){return e.onChange(t.target)}))("blur",(function(){return e.onTouched()}))},inputs:{compareWith:"compareWith"},features:[o.yb([$])]}),t})();function q(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function z(t,e){let n;throw n=t.path.length>1?`path: '${t.path.join(" -> ")}'`:t.path[0]?`name: '${t.path}'`:"unspecified name attribute",new Error(`${e} ${n}`)}function Z(t){return null!=t?A.compose(t.map(D)):null}function H(t){return null!=t?A.composeAsync(t.map(k)):null}const X=[g,J,x,U,B,I];function Y(t){const e=Q(t)?t.validators:t;return Array.isArray(e)?Z(e):e||null}function K(t,e){const n=Q(e)?e.asyncValidators:t;return Array.isArray(n)?H(n):n||null}function Q(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class tt{constructor(t,e){this.validator=t,this.asyncValidator=e,this._onCollectionChange=()=>{},this.pristine=!0,this.touched=!1,this._onDisabledChange=[]}get parent(){return this._parent}get valid(){return"VALID"===this.status}get invalid(){return"INVALID"===this.status}get pending(){return"PENDING"==this.status}get disabled(){return"DISABLED"===this.status}get enabled(){return"DISABLED"!==this.status}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this.validator=Y(t)}setAsyncValidators(t){this.asyncValidator=K(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status="PENDING";const e=M(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>this.setErrors(e,{emitEvent:t}))}}_cancelExistingSubscription(){this._asyncValidationSubscription&&this._asyncValidationSubscription.unsubscribe()}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof nt?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof rt&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.n,this.statusChanges=new o.n}_calculateStatus(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Q(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}}class et extends tt{constructor(t=null,e,n){super(Y(e),K(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),this._initObservables()}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_clearChangeFns(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=()=>{}}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class nt extends tt{constructor(t,e,n){super(Y(e),K(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof et?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){let e=!1;return this._forEachChild((n,r)=>{e=e||this.contains(r)&&t(n)}),e}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class rt extends tt{constructor(t,e,n){super(Y(e),K(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof et?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error("Cannot find form control at index "+t)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const it=new o.q("NgModelWithFormControlWarning"),ot={provide:C,useExisting:Object(o.S)(()=>st)};let st=(()=>{class t extends C{constructor(t,e,n,r){super(),this._ngModelWarningConfig=r,this.update=new o.n,this._ngModelWarningSent=!1,this._rawValidators=t||[],this._rawAsyncValidators=e||[],this.valueAccessor=function(t,e){if(!e)return null;Array.isArray(e)||z(t,"Value accessor was not provided as an array for form control with");let n=void 0,r=void 0,i=void 0;return e.forEach(e=>{var o;e.constructor===_?n=e:(o=e,X.some(t=>o.constructor===t)?(r&&z(t,"More than one built-in value accessor matches form control with"),r=e):(i&&z(t,"More than one custom value accessor matches form control with"),i=e))}),i||r||n||(z(t,"No valid value accessor for form control with"),null)}(this,n)}set isDisabled(t){W.disabledAttrWarning()}ngOnChanges(e){var n,r,i,s;this._isControlChanged(e)&&(s=this,(i=this.form)||z(s,"Cannot find control with"),s.valueAccessor||z(s,"No value accessor for form control with"),i.validator=A.compose([i.validator,s.validator]),i.asyncValidator=A.composeAsync([i.asyncValidator,s.asyncValidator]),s.valueAccessor.writeValue(i.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&q(t,e)})}(i,s),function(t,e){t.registerOnChange((t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)})}(i,s),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&q(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(i,s),s.valueAccessor.setDisabledState&&i.registerOnDisabledChange(t=>{s.valueAccessor.setDisabledState(t)}),s._rawValidators.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(()=>i.updateValueAndValidity())}),s._rawAsyncValidators.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(()=>i.updateValueAndValidity())}),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object(o.rb)(e,n.currentValue)}(e,this.viewModel)&&("formControl",n=t,this,r=this._ngModelWarningConfig,Object(o.T)()&&"never"!==r&&((null!==r&&"once"!==r||n._ngModelWarningSentOnce)&&("always"!==r||this._ngModelWarningSent)||(W.ngModelWarning("formControl"),n._ngModelWarningSentOnce=!0,this._ngModelWarningSent=!0)),this.form.setValue(this.model),this.viewModel=this.model)}get path(){return[]}get validator(){return Z(this._rawValidators)}get asyncValidator(){return H(this._rawAsyncValidators)}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(w,10),o.Jb(E,10),o.Jb(d,10),o.Jb(it,8))},t.\u0275dir=o.Eb({type:t,selectors:[["","formControl",""]],inputs:{isDisabled:["disabled","isDisabled"],form:["formControl","form"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[o.yb([ot]),o.wb,o.xb]}),t._ngModelWarningSentOnce=!1,t})(),at=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)}}),t})(),lt=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let r=null,i=null,o=void 0;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(r=null!=e.validators?e.validators:null,i=null!=e.asyncValidators?e.asyncValidators:null,o=null!=e.updateOn?e.updateOn:void 0):(r=null!=e.validator?e.validator:null,i=null!=e.asyncValidator?e.asyncValidator:null)),new nt(n,{asyncValidators:i,updateOn:o,validators:r})}control(t,e,n){return new et(t,e,n)}array(t,e,n){const r=t.map(t=>this._createControl(t));return new rt(r,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof et||t instanceof nt||t instanceof rt?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac}),t})(),ut=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:it,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},providers:[lt,j],imports:[at]}),t})();const ht=[{path:"",component:(()=>{class t{constructor(t){this.formBuilder=t,this.jsonInput=new et("{}"),this.jsonOutput=new et("{}")}ngOnInit(){this.inputJSON=new et,this.outputJSON=new et,this.inputJSON.valueChanges.subscribe(t=>{try{const e=JSON.parse(t),n=JSON.stringify(e,null,"\t");this.outputJSON.setValue(n),this.error=""}catch(e){this.error=e.message}})}copy(){navigator.permissions.query({name:"clipboard-write"}).then(t=>{"granted"!==t.state&&"prompt"!==t.state||navigator.clipboard.writeText(this.outputJSON.value)})}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(lt))},t.\u0275cmp=o.Db({type:t,selectors:[["app-json-formatter"]],decls:17,vars:3,consts:[["color","primary",1,"section"],[1,"columns"],[1,"column"],["for","inputJSON",1,"label"],["id","inputJSON","placeholder","{}","rows","10",1,"textarea",3,"formControl"],["for","outputJSON",1,"label"],["id","test"],["id","outputJSON","placeholder","{}","rows","10","title","Click to copy",1,"textarea",3,"formControl","click"],["id","ad-section",1,"hero","is-dark","is-bold"],[1,"hero-body"],["id","ad-wrapper has-text-white"]],template:function(t,e){1&t&&(o.Mb(0,"section",0),o.Mb(1,"div",1),o.Mb(2,"div",2),o.Mb(3,"label",3),o.Zb(4,"Input"),o.Lb(),o.Kb(5,"textarea",4),o.Mb(6,"span"),o.Zb(7),o.Lb(),o.Lb(),o.Mb(8,"div",2),o.Mb(9,"label",5),o.Zb(10,"Output"),o.Lb(),o.Mb(11,"div",6),o.Mb(12,"textarea",7),o.Tb("click",(function(){return e.copy()})),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(13,"section",8),o.Mb(14,"div",9),o.Mb(15,"media",10),o.Zb(16,"Ads go here..."),o.Lb(),o.Lb(),o.Lb()),2&t&&(o.zb(5),o.Vb("formControl",e.inputJSON),o.zb(2),o.ac(e.error),o.zb(5),o.Vb("formControl",e.outputJSON))},directives:[_,v,st],styles:['textarea[_ngcontent-%COMP%]{resize:vertical}#ad-section[_ngcontent-%COMP%]{align-items:center}#ad-wrapper[_ngcontent-%COMP%]{display:block;width:25rem;height:5rem}#outputJSON[_ngcontent-%COMP%]{cursor:copy}#test[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#test[_ngcontent-%COMP%]:after{content:"click to copy";position:absolute;pointer-events:none;font-size:.5rem;opacity:.6}']}),t})()}];let ct=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[i.d.forChild(ht)],i.d]}),t})(),dt=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[r.b,ct,ut]]}),t})()}}]);