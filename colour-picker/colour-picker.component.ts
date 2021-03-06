import { Component, Input, forwardRef, Renderer, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => ColourPickerComponent ),
      multi: true
    }
  ]
})
export class ColourPickerComponent implements ControlValueAccessor {

	@Input() label = 'switch';
	@Input('value') _value = false;
	onChange: any = () => { };
	onTouched: any = () => { };

	constructor( private element: ElementRef, private renderer: Renderer ) {
		console.debug ( this._value, )
	}

  	get value() {  		
		return this._value;
	}

	set value(val) {		
		this._value = val;
		this.onChange(val);
		this.onTouched();
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

	pick( colour ) {
		this.value = colour;		
		let event = new CustomEvent('change', {bubbles: true});
    	this.renderer.invokeElementMethod(this.element.nativeElement, 'dispatchEvent', [event]);
	}



	swatches = [
		"hards",
		"red",
		"pink",
		"purple",
		"deepPurple",
		"indigo",
		"blue",
		"lightBlue",
		"cyan",
		"teal",
		"green",
		"lightGreen",
		"lime",
		"yellow",
		"amber",
		"orange",
		"deepOrange",
		"brown",
		"grey",
		"blueGrey"			  
	];

	

	colours = {				
		"hards":[
		  	{ "name": "black",  "hex" :"#000000" },
		  	{ "name" : "white", "hex": "#FFFFFF" }
		],
		"red": [
		    { "name":"50", "hex":"#ffebee" },
		    { "name":"100", "hex":"#ffcdd2" },
		    { "name":"200", "hex":"#ef9a9a" },
		    { "name":"300", "hex":"#e57373" },
		    { "name":"400", "hex":"#ef5350" },
		    { "name":"500", "hex":"#f44336" },
		    { "name":"600", "hex":"#e53935" },
		    { "name":"700", "hex":"#d32f2f" },
		    { "name":"800", "hex":"#c62828" },
		    { "name":"900", "hex":"#b71c1c" },
		    { "name":"A100", "hex":"#ff8a80" },
		    { "name":"A200", "hex":"#ff5252" },
		    { "name":"A400", "hex":"#ff1744" },
		    { "name":"A700", "hex":"#d50000" }			  
		],
		"pink": [
		    { "name":"50", "hex":"#fce4ec" },
		    { "name":"100", "hex":"#f8bbd0" },
		    { "name":"200", "hex":"#f48fb1" },
		    { "name":"300", "hex":"#f06292" },
		    { "name":"400", "hex":"#ec407a" },
		    { "name":"500", "hex":"#e91e63" },
		    { "name":"600", "hex":"#d81b60" },
		    { "name":"700", "hex":"#c2185b" },
		    { "name":"800", "hex":"#ad1457" },
		    { "name":"900", "hex":"#880e4f" },
		    { "name":"A100", "hex":"#ff80ab" },
		    { "name":"A200", "hex":"#ff4081" },
		    { "name":"A400", "hex":"#f50057" },
		    { "name":"A700", "hex":"#c51162" }			  
		],
		"purple": [
			{ "name":"50", "hex":"#f3e5f5" },
			{ "name":"100", "hex":"#e1bee7" },
			{ "name":"200", "hex":"#ce93d8" },
			{ "name":"300", "hex":"#ba68c8" },
			{ "name":"400", "hex":"#ab47bc" },
			{ "name":"500", "hex":"#9c27b0" },
			{ "name":"600", "hex":"#8e24aa" },
			{ "name":"700", "hex":"#7b1fa2" },
			{ "name":"800", "hex":"#6a1b9a" },
			{ "name":"900", "hex":"#4a148c" },
			{ "name":"A100", "hex":"#ea80fc" },
			{ "name":"A200", "hex":"#e040fb" },
			{ "name":"A400", "hex":"#d500f9" },
			{ "name":"A700", "hex":"#aa00ff" }			  
		],
		"deepPurple": [
		    { "name":"50", "hex":"#ede7f6" },
		    { "name":"100", "hex":"#d1c4e9" },
		    { "name":"200", "hex":"#b39ddb" },
		    { "name":"300", "hex":"#9575cd" },
		    { "name":"400", "hex":"#7e57c2" },
		    { "name":"500", "hex":"#673ab7" },
		    { "name":"600", "hex":"#5e35b1" },
		    { "name":"700", "hex":"#512da8" },
		    { "name":"800", "hex":"#4527a0" },
		    { "name":"900", "hex":"#311b92" },
		    { "name":"A100", "hex":"#b388ff" },
		    { "name":"A200", "hex":"#7c4dff" },
		    { "name":"A400", "hex":"#651fff" },
		    { "name":"A700", "hex":"#6200ea" }			  
		],
		"indigo": [
		    { "name":"50", "hex":"#e8eaf6" },
		    { "name":"100", "hex":"#c5cae9" },
		    { "name":"200", "hex":"#9fa8da" },
		    { "name":"300", "hex":"#7986cb" },
		    { "name":"400", "hex":"#5c6bc0" },
		    { "name":"500", "hex":"#3f51b5" },
		    { "name":"600", "hex":"#3949ab" },
		    { "name":"700", "hex":"#303f9f" },
		    { "name":"800", "hex":"#283593" },
		    { "name":"900", "hex":"#1a237e" },
		    { "name":"A100", "hex":"#8c9eff" },
		    { "name":"A200", "hex":"#536dfe" },
		    { "name":"A400", "hex":"#3d5afe" },
		    { "name":"A700", "hex":"#304ffe" }			  
		],
		"blue": [
		    { "name":"50", "hex":"#e3f2fd" },
		    { "name":"100", "hex":"#bbdefb" },
		    { "name":"200", "hex":"#90caf9" },
		    { "name":"300", "hex":"#64b5f6" },
		    { "name":"400", "hex":"#42a5f5" },
		    { "name":"500", "hex":"#2196f3" },
		    { "name":"600", "hex":"#1e88e5" },
		    { "name":"700", "hex":"#1976d2" },
		    { "name":"800", "hex":"#1565c0" },
		    { "name":"900", "hex":"#0d47a1" },
		    { "name":"A100", "hex":"#82b1ff" },
		    { "name":"A200", "hex":"#448aff" },
		    { "name":"A400", "hex":"#2979ff" },
		    { "name":"A700", "hex":"#2962ff" }
		],
		"lightBlue": [
		    { "name":"50", "hex":"#e1f5fe" },
		    { "name":"100", "hex":"#b3e5fc" },
		    { "name":"200", "hex":"#81d4fa" },
		    { "name":"300", "hex":"#4fc3f7" },
		    { "name":"400", "hex":"#29b6f6" },
		    { "name":"500", "hex":"#03a9f4" },
		    { "name":"600", "hex":"#039be5" },
		    { "name":"700", "hex":"#0288d1" },
		    { "name":"800", "hex":"#0277bd" },
		    { "name":"900", "hex":"#01579b" },
		    { "name":"A100", "hex":"#80d8ff" },
		    { "name":"A200", "hex":"#40c4ff" },
		    { "name":"A400", "hex":"#00b0ff" },
		    { "name":"A700", "hex":"#0091ea" }
		],
		"cyan": [
		    { "name":"50", "hex":"#e0f7fa" },
		    { "name":"100", "hex":"#b2ebf2" },
		    { "name":"200", "hex":"#80deea" },
		    { "name":"300", "hex":"#4dd0e1" },
		    { "name":"400", "hex":"#26c6da" },
		    { "name":"500", "hex":"#00bcd4" },
		    { "name":"600", "hex":"#00acc1" },
		    { "name":"700", "hex":"#0097a7" },
		    { "name":"800", "hex":"#00838f" },
		    { "name":"900", "hex":"#006064" },
		    { "name":"A100", "hex":"#84ffff" },
		    { "name":"A200", "hex":"#18ffff" },
		    { "name":"A400", "hex":"#00e5ff" },
		    { "name":"A700", "hex":"#00b8d4" }
		],
		"teal": [
		    { "name":"50", "hex":"#e0f2f1" },
		    { "name":"100", "hex":"#b2dfdb" },
		    { "name":"200", "hex":"#80cbc4" },
		    { "name":"300", "hex":"#4db6ac" },
		    { "name":"400", "hex":"#26a69a" },
		    { "name":"500", "hex":"#009688" },
		    { "name":"600", "hex":"#00897b" },
		    { "name":"700", "hex":"#00796b" },
		    { "name":"800", "hex":"#00695c" },
		    { "name":"900", "hex":"#004d40" },
		    { "name":"A100", "hex":"#a7ffeb" },
		    { "name":"A200", "hex":"#64ffda" },
		    { "name":"A400", "hex":"#1de9b6" },
		    { "name":"A700", "hex":"#00bfa5" }
		],
		"green": [
		    { "name":"50", "hex":"#e8f5e9" },
		    { "name":"100", "hex":"#c8e6c9" },
		    { "name":"200", "hex":"#a5d6a7" },
		    { "name":"300", "hex":"#81c784" },
		    { "name":"400", "hex":"#66bb6a" },
		    { "name":"500", "hex":"#4caf50" },
		    { "name":"600", "hex":"#43a047" },
		    { "name":"700", "hex":"#388e3c" },
		    { "name":"800", "hex":"#2e7d32" },
		    { "name":"900", "hex":"#1b5e20" },
		    { "name":"A100", "hex":"#b9f6ca" },
		    { "name":"A200", "hex":"#69f0ae" },
		    { "name":"A400", "hex":"#00e676" },
		    { "name":"A700", "hex":"#00c853" }
		],
		"lightGreen": [
		    { "name":"50", "hex":"#f1f8e9" },
		    { "name":"100", "hex":"#dcedc8" },
		    { "name":"200", "hex":"#c5e1a5" },
		    { "name":"300", "hex":"#aed581" },
		    { "name":"400", "hex":"#9ccc65" },
		    { "name":"500", "hex":"#8bc34a" },
		    { "name":"600", "hex":"#7cb342" },
		    { "name":"700", "hex":"#689f38" },
		    { "name":"800", "hex":"#558b2f" },
		    { "name":"900", "hex":"#33691e" },
		    { "name":"A100", "hex":"#ccff90" },
		    { "name":"A200", "hex":"#b2ff59" },
		    { "name":"A400", "hex":"#76ff03" },
		    { "name":"A700", "hex":"#64dd17" }
		],
		"lime": [
		    { "name":"50", "hex":"#f9fbe7" },
		    { "name":"100", "hex":"#f0f4c3" },
		    { "name":"200", "hex":"#e6ee9c" },
		    { "name":"300", "hex":"#dce775" },
		    { "name":"400", "hex":"#d4e157" },
		    { "name":"500", "hex":"#cddc39" },
		    { "name":"600", "hex":"#c0ca33" },
		    { "name":"700", "hex":"#afb42b" },
		    { "name":"800", "hex":"#9e9d24" },
		    { "name":"900", "hex":"#827717" },
		    { "name":"A100", "hex":"#f4ff81" },
		    { "name":"A200", "hex":"#eeff41" },
		    { "name":"A400", "hex":"#c6ff00" },
		    { "name":"A700", "hex":"#aeea00" }
		],
		"yellow": [
		    { "name":"50", "hex":"#fffde7" },
		    { "name":"100", "hex":"#fff9c4" },
		    { "name":"200", "hex":"#fff59d" },
		    { "name":"300", "hex":"#fff176" },
		    { "name":"400", "hex":"#ffee58" },
		    { "name":"500", "hex":"#ffeb3b" },
		    { "name":"600", "hex":"#fdd835" },
		    { "name":"700", "hex":"#fbc02d" },
		    { "name":"800", "hex":"#f9a825" },
		    { "name":"900", "hex":"#f57f17" },
		    { "name":"A100", "hex":"#ffff8d" },
		    { "name":"A200", "hex":"#ffff00" },
		    { "name":"A400", "hex":"#ffea00" },
		    { "name":"A700", "hex":"#ffd600" }
		],
		"amber": [
		    { "name":"50", "hex":"#fff8e1" },
		    { "name":"100", "hex":"#ffecb3" },
		    { "name":"200", "hex":"#ffe082" },
		    { "name":"300", "hex":"#ffd54f" },
		    { "name":"400", "hex":"#ffca28" },
		    { "name":"500", "hex":"#ffc107" },
		    { "name":"600", "hex":"#ffb300" },
		    { "name":"700", "hex":"#ffa000" },
		    { "name":"800", "hex":"#ff8f00" },
		    { "name":"900", "hex":"#ff6f00" },
		    { "name":"A100", "hex":"#ffe57f" },
		    { "name":"A200", "hex":"#ffd740" },
		    { "name":"A400", "hex":"#ffc400" },
		    { "name":"A700", "hex":"#ffab00" }
		],
		"orange": [
		    { "name":"50", "hex":"#fff3e0" },
		    { "name":"100", "hex":"#ffe0b2" },
		    { "name":"200", "hex":"#ffcc80" },
		    { "name":"300", "hex":"#ffb74d" },
		    { "name":"400", "hex":"#ffa726" },
		    { "name":"500", "hex":"#ff9800" },
		    { "name":"600", "hex":"#fb8c00" },
		    { "name":"700", "hex":"#f57c00" },
		    { "name":"800", "hex":"#ef6c00" },
		    { "name":"900", "hex":"#e65100" },
		    { "name":"A100", "hex":"#ffd180" },
		    { "name":"A200", "hex":"#ffab40" },
		    { "name":"A400", "hex":"#ff9100" },
		    { "name":"A700", "hex":"#ff6d00" }
		],
		"deepOrange": [
		    { "name":"50", "hex":"#fbe9e7" },
		    { "name":"100", "hex":"#ffccbc" },
		    { "name":"200", "hex":"#ffab91" },
		    { "name":"300", "hex":"#ff8a65" },
		    { "name":"400", "hex":"#ff7043" },
		    { "name":"500", "hex":"#ff5722" },
		    { "name":"600", "hex":"#f4511e" },
		    { "name":"700", "hex":"#e64a19" },
		    { "name":"800", "hex":"#d84315" },
		    { "name":"900", "hex":"#bf360c" },
		    { "name":"A100", "hex":"#ff9e80" },
		    { "name":"A200", "hex":"#ff6e40" },
		    { "name":"A400", "hex":"#ff3d00" },
		    { "name":"A700", "hex":"#dd2c00" }
		],
		"brown": [
		    { "name":"50", "hex":"#efebe9" },
		    { "name":"100", "hex":"#d7ccc8" },
		    { "name":"200", "hex":"#bcaaa4" },
		    { "name":"300", "hex":"#a1887f" },
		    { "name":"400", "hex":"#8d6e63" },
		    { "name":"500", "hex":"#795548" },
		    { "name":"600", "hex":"#6d4c41" },
		    { "name":"700", "hex":"#5d4037" },
		    { "name":"800", "hex":"#4e342e" },
		    { "name":"900", "hex":"#3e2723" }
		],
		"grey": [
		    { "name":"50", "hex":"#fafafa" },
		    { "name":"100", "hex":"#f5f5f5" },
		    { "name":"200", "hex":"#eeeeee" },
		    { "name":"300", "hex":"#e0e0e0" },
		    { "name":"400", "hex":"#bdbdbd" },
		    { "name":"500", "hex":"#9e9e9e" },
		    { "name":"600", "hex":"#757575" },
		    { "name":"700", "hex":"#616161" },
		    { "name":"800", "hex":"#424242" },
		    { "name":"900", "hex":"#212121" }
		],
		"blueGrey": [
		    { "name":"50", "hex":"#eceff1" },
		    { "name":"100", "hex":"#cfd8dc" },
		    { "name":"200", "hex":"#b0bec5" },
		    { "name":"300", "hex":"#90a4ae" },
		    { "name":"400", "hex":"#78909c" },
		    { "name":"500", "hex":"#607d8b" },
		    { "name":"600", "hex":"#546e7a" },
		    { "name":"700", "hex":"#455a64" },
		    { "name":"800", "hex":"#37474f" },
		    { "name":"900", "hex":"#263238" }
		]
	};

}
