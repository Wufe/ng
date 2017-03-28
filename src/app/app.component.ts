import { Component } from '@angular/core';

type Stage = {
	done: boolean;
	title: string;
};

@Component({
	selector: 'app-root',
	template: `
		<div class="container">
			<div class="row header">
				<header>
					<h1>Learning path</h1>
				</header>
			</div>
			<div class="row">
				<div class="col-md-offset-1 col-md-10">
					<ul class="list-group" *ngFor="let stage of stages">
						<li class="well well-sm list-group-item">
							<div>
								<input type="checkbox" [checked]="stage.done" /> <span class="stage-item">{{ stage.title }}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-md-offset-7 col-md-4 form form-inline">
					<div class="form-group">
						<input id="addStage" [(ngModel)]="stageInput" class="form-control" (keyup.enter)="onEnter()" placeholder="Aggiungi una tappa" />
						<button class="btn btn-info" (click)="onEnter()">Aggiungi</button>
					</div>
				</div>
			</div>
		</div>
		
		
		`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Test!';
	color: string = "navy";
	
	stages: Stage[] = [
		{
			done: true,
			title: "Folder Structure"
		}
	];
	
	stageInput = "";
	
	onEnter(){
		console.log( this.stageInput );
		this.stages = [
			...this.stages,
			{
				done: false,
				title: this.stageInput
			}
		];
		this.stageInput = "";
	}
	
}
