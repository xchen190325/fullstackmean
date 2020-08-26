import { Router } from '@angular/router'
import { NewsApiService } from './news-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class AppNewsComponent {

	isAuthenticated = false;
  private userSub: Subscription;
	mArticles:Array<any>;
	mSources:Array<any>;
	willComment:boolean = false;


	constructor(private newsapi: NewsApiService,
		private authService: AuthService,
		private route:Router) {
		console.log('app component constructor called');         
	}
	printcon() { 
		console.log('hello world')
	}
	ngOnInit() {
        //load articles
	    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
		//load news sources
		this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);	
		this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
	}
	onComment() { 
		if (this.willComment) {
			this.willComment = false;
		} else { 
			this.willComment = true;
		}
		
		console.log(this.willComment);
	};

	onLogin() { 
		this.route.navigate(['auth'])
	}
	onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }


	searchArticles(source){
		console.log("selected source is: "+source);
		this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}


  
}
