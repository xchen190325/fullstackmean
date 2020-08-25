import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AppNewsComponent {

	mArticles:Array<any>;
	mSources:Array<any>;
	
	constructor(private newsapi:NewsApiService){
		console.log('app component constructor called');         
	}

	ngOnInit() {
        //load articles
	    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
		//load news sources
		this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);	
    }


	searchArticles(source){
		console.log("selected source is: "+source);
		this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}
  
}
