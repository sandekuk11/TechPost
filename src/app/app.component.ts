import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechPost';
  techList = ['Java', '.NET', 'Hadoop', 'Hive', 'Spark', 'Sqoop', 'Flume'];
}
