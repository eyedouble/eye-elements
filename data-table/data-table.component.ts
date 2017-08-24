import { Component, Input, forwardRef, Renderer, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => DataTableComponent ),
      multi: true
    }
  ]
})
export class DataTableComponent implements OnInit {

    headersObs = new Subject<string[]>();
    dataObs = new Subject<object[]>();
    public headers;
    public data;


    @Input() label = 'switch';
    @Input('value') _value = [];
    onChange: any = () => { };
    onTouched: any = () => { };

    constructor( private element: ElementRef, private renderer: Renderer ) {
        console.debug ( this._value, )

        // this.headers = Observable.create ( (e: [object]) => this.headers = e );

    }

    get value() {
        console.log( this._value);
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.setHeaders ( this._value );
        this.setData ( this._value );
        console.log( this._value );
        this.onChange(val);
        this.onTouched();
    }

    ngOnInit ( ) {
        console.log( 'oninit' );
        this.headersObs.subscribe ( response => {
            console.log( typeof response );
            this.headers = response;
        });
        this.dataObs.subscribe ( response => {
            this.data = response;
        });
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    writeValue(value) {
        if (value) {
          this.value = value;
        }
    }




    setHeaders ( value ) {
        if ( typeof value[0] !== 'undefined' ) {
            console.log( Object.keys ( value[0] ) )
            this.headersObs.next ( Object.keys ( value[0] ) );

            // setTimeout ( () => {
            //     this.headers.next ( [ 'kak', 'kak2', 'kak3', 'kak4', 'kak5'] )
            // }, 2000 )
        }
    }

    setData ( value ) {

        this.dataObs.next ( value );
    }



    selectAll ( ) {
        // this._value.push( { name: 'name IV', val1: 'kak', val2: 166 } );
        for ( const entry of this._value ) {
            entry.selected = entry.selected ? false : true;
        }
        this.dataObs.next ( this._value );
    }

    select ( i ) {
        this._value[i].selected = this._value[i].selected ? false : true;
        this.dataObs.next ( this._value );
    }

	// pick( colour ) {
	// 	this.value = colour;
	// 	let event = new CustomEvent('change', {bubbles: true});
 //    	this.renderer.invokeElementMethod(this.element.nativeElement, 'dispatchEvent', [event]);
	// }

}
