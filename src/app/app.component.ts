import { Component, OnInit, ViewChildren, QueryList, ViewChild, AfterViewInit, ElementRef, Renderer,ChangeDetectorRef  } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { MatRadioButton } from '@angular/material';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  public questions = [
    {
     "id":"2",
     "category":"Charactor",
     "questions":[
        {
           "id":"22",
           "question":"How do I update WordPress?",
           "commentsRequired":["26"],
           "option":[
              {
                 "id":"24",
                 "option_name":"Option1"
              },
              {
                 "id":"25",
                 "option_name":"Option2"
              },
              {
                 "id":"26",
                 "option_name":"Option3"
              },
              {
                 "id":"27",
                 "option_name":"Option4"
              },
              {
                 "id":"28",
                 "option_name":"Option5"
              }
           ]
        },
        {
           "id":"29",
           "question":"How do I update WordPress2?",
           
           "commentsRequired":["49","50"],
           "option":[
              {
                 "id":"46",
                 "option_name":"Option1"
              },
              {
                 "id":"47",
                 "option_name":"Option2"
              },
              {
                 "id":"48",
                 "option_name":"Option3"
              },
              {
                 "id":"49",
                 "option_name":"Option4"
              },
              {
                 "id":"50",
                 "option_name":"Option5"
              }
           ]
        },
        {
           "id":"33",
           "question":"How do I update WordPress3?",
           
           "commentsRequired":[],
           "option":[
              {
                 "id":"66",
                 "option_name":"Option1"
              },
              {
                 "id":"67",
                 "option_name":"Option2"
              },
              {
                 "id":"68",
                 "option_name":"Option3"
              },
              {
                 "id":"69",
                 "option_name":"Option4"
              },
              {
                 "id":"70",
                 "option_name":"Option5"
              }
           ]
        },
        {
           "id":"37",
           "question":"How do I update WordPress4?",
           
           "commentsRequired":[],
           "option":[
              {
                 "id":"86",
                 "option_name":"Option1"
              },
              {
                 "id":"87",
                 "option_name":"Option2"
              },
              {
                 "id":"88",
                 "option_name":"Option3"
              },
              {
                 "id":"89",
                 "option_name":"Option4"
              },
              {
                 "id":"90",
                 "option_name":"Option5"
              }
           ]
        },
        {
           "id":"41",
           "question":"How do I update WordPress5?",
           
           "commentsRequired":[],
           "option":[
              {
                 "id":"106",
                 "option_name":"Option1"
              },
              {
                 "id":"107",
                 "option_name":"Option2"
              },
              {
                 "id":"108",
                 "option_name":"Option3"
              },
              {
                 "id":"109",
                 "option_name":"Option4"
              },
              {
                 "id":"110",
                 "option_name":"Option5"
              }
           ]
        }
     ]
  }
  ];
  step = 0;
  error: string;
  public ans : any = [];
  isSelected : boolean = false;
  isSelectedVal : string;
  curOptionIndex : string;

  optsel : number;

  firstOptionId: number;

  //@ViewChild('.model_inner_wrap', {static: false}) cur_radio : ElementRef;
  //@ViewChild('qwrap', { static: false }) qwrap : ElementRef;
  //@ViewChildren(MatRadioButton) rbuttons;

  @ViewChild('questionForm', {static: false}) myForm: NgForm;

  constructor(
    private _el: ElementRef,
    private render: Renderer,
    private cdRef:ChangeDetectorRef
    ) { 
      
    }
    ngAfterViewInit() : void{

    }

  ngOnInit() {
  }

  setStep(index: number, cid: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    return false;
  }

  prevStep() {
    this.step--;
    return false;
  }

  onSubmitQuestions(form) : void {
      //if(form.value){

        console.log(form.value);

      //}

  }


  questionRadioChange(event: MatRadioChange, k: number,qid) {
    //console.log(event.source.name, event.value);.first.nativeElement.children[0].className
    //console.log(event.source._changeDetector._view.parent.parent);
    if(event.source.name != ''){
      this.isSelectedVal= event.source.name;
      this.isSelected = true;
      this.curOptionIndex = qid;
     
      this.optsel = k;


     // let el = <HTMLElement>this._el.nativeElement.querySelector('#cmt' + qid);
      
      if(k == 2){
        //console.log(k)
        // let elemt = document.getElementById('cmt22'); 
        // console.log(elemt)
        // elemt.removeAttribute('required');
        // console.log(el.innerText)
        // el.removeAttribute('required')
        // console.log(el)
        //.setAttribute('required', 'true')
        //console.log(this.myForm)
        //console.log(this.myForm.form.controls)
        //this.myForm.form.get('comment_bx').setValidators([Validators.required]);
        //this.myForm.form.get('comment_bx').updateValueAndValidity();

      }
      
      //console.log(el);

    }
  } 
  ngAfterViewChecked()
{

  this.cdRef.detectChanges();
}


  // optionRadioChange(event: MdRadioChange) {
  //   this.filter['property'] = event.value;
  //   console.log(this.filter);
  // }

}
