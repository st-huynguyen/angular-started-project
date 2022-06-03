import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  features: string[] = [
    'Components',
    'Data binding',
    'Built-in directives and structural directives',
    'Dependency injection',
    'Routing and navigation',
    'Reactive form and validation',
    'Use HTTP Client to communicate with API',
    'Use Angular material icons',
  ];
  constructor() {}

  ngOnInit(): void {}
}
