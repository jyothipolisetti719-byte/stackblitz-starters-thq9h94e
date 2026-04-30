import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedModule = 'dashboard';

  modules = [
    { key: 'dashboard', name: 'Dashboard', icon: '🏠' },
    { key: 'assessment', name: 'Assessment', icon: '📝' },
    { key: 'behavioral', name: 'Behavioural Simulator', icon: '🤖' },
    { key: 'descriptive', name: 'Descriptive', icon: '✍️' },
    { key: 'results', name: 'Results', icon: '📊' },
    { key: 'chart', name: 'Unified Chart', icon: '📈' },
    { key: 'userDashboard', name: 'User Dashboard', icon: '👤' },
    { key: 'vmo', name: 'VMO View', icon: '👥' },
    { key: 'login', name: 'Login', icon: '🔐' },
    { key: 'register', name: 'Register', icon: '🆕' }
  ];

  stats = [
    { title: 'Total Users', value: '1248', sub: '12% this month', icon: '👥' },
    { title: 'Active Assessments', value: '86', sub: 'Live now', icon: '💻' },
    { title: 'Passed', value: '742', sub: '59%', icon: '✅' },
    { title: 'Failed', value: '368', sub: '29%', icon: '❌' },
    { title: 'In Progress', value: '138', sub: '10%', icon: '⏱️' }
  ];

  getTitle() {
    const module = this.modules.find(m => m.key === this.selectedModule);
    return module ? module.name : 'Dashboard';
  }
}