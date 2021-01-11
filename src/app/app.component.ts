import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cardápio Online';
  githubIcon = faGithub
}
