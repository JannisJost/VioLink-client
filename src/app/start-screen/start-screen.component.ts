import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent {
  generatedUrl: BehaviorSubject<string> = new BehaviorSubject<string>("");
  hasCopied: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private urlservice: UrlShortenerService) {

  }
  categorysaveform = new FormGroup({
    category_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  get CategoryName() {
    return this.categorysaveform.get('category_name');
  }
  getShortUrl() {
    this.urlservice.getShortUrl(this.CategoryName?.value ?? "").subscribe(value => {
      this.generatedUrl.next(value);
    });
  }
  copyToClipboard() {
    let selBox = document.createElement('textarea');

    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.generatedUrl.value;

    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();

    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.hasCopied.next(true);
  }
}
