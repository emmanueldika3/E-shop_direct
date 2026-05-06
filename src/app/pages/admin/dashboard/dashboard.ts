import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Counter } from '../../../components/common/counter/counter';
import { Button } from '../../../components/ui/button/button';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, Counter, Button],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  public isEnabled = true;
  public isEnabledBox2 = true;
  public pageName = "This is my Dashboard";
  public imageUrl = "https://img.freepik.com/free-photo/cute-kitten-sitting-staring-playful-fluffy-looking-camera-generated-by-artificial-intelligence_188544-113029.jpg?semt=ais_hybrid&w=740";


  getClasses() {
    return {
      "box": this.isEnabled,
      "box2": this.isEnabledBox2
    }
  }

  public count: number = 0;

  getCount(value: number) { 
    this.count = value;
  }

}
