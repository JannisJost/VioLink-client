import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Url } from '../url';
import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent implements OnInit {
  url: BehaviorSubject<Url> = new BehaviorSubject<Url>(new Url);
  id: string = '';
  constructor(private route: ActivatedRoute, private urlShortenerService: UrlShortenerService) { }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params["id"]

    })
    this.urlShortenerService.getUrlByID(this.id).subscribe((value) => {
      this.url.next(JSON.parse(value));
    });
  }

  openURL() {
    window.location.href = this.url.value.url.replaceAll("\"", "")
  }
}
