import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="layout">

  <aside class="sidebar">
    <h2>C.O.R.E</h2>
    <p class="active">Dashboard</p>
    <p>Assessments</p>
    <p>Results</p>
    <p>Users</p>
    <p>Reports</p>
  </aside>

  <main class="main">

    <div class="header">
      <h1>CORE Assessment Dashboard</h1>
      <div class="user">Admin User</div>
    </div>

    <!-- Cards -->
    <div class="cards">
      <div class="card" *ngFor="let item of stats">
        <div>{{ item.icon }}</div>
        <h2>{{ item.value }}</h2>
        <p>{{ item.title }}</p>
        <small>{{ item.sub }}</small>
      </div>
    </div>

    <!-- Top Section -->
    <div class="top">

      <div class="panel">
        <h3>AI Smart Insights</h3>
        <p *ngFor="let i of insights">{{ i }}</p>
      </div>

      <div class="panel">
        <h3>Live Monitoring</h3>
        <table>
          <tr>
            <th>User</th>
            <th>Status</th>
          </tr>
          <tr *ngFor="let user of liveUsers" (click)="openUser(user)">
            <td>{{ user.name }}</td>
            <td>
              <span class="badge"
                [ngClass]="{
                  'active-badge': user.status === 'Active',
                  'idle-badge': user.status === 'Idle',
                  'danger-badge': user.status === 'Disconnected'
                }">
                {{ user.status }}
              </span>
            </td>
          </tr>
        </table>
      </div>

      <div class="panel">
        <h3>Alerts</h3>
        <p *ngFor="let alert of alerts">{{ alert }}</p>
      </div>

    </div>

    <!-- Bottom -->
    <div class="bottom">

      <div class="panel">
        <h3>Pass / Fail</h3>
        <div class="donut">59%</div>
      </div>

      <div class="panel">
        <h3>Quick Actions</h3>
        <button>Approve</button>
        <button>Retake</button>
      </div>

      <div class="panel">
        <h3>Notifications</h3>
        <p *ngFor="let n of notifications">{{ n }}</p>
      </div>

    </div>

  </main>
</div>
`
})
class AppComponent implements OnInit {

  stats = [
    { title: 'Total Users', value: '1248', sub: '12% this month', icon: '👥' },
    { title: 'Active Assessments', value: '86', sub: 'Live now', icon: '💻' },
    { title: 'Passed', value: '742', sub: '59%', icon: '✅' },
    { title: 'Failed', value: '368', sub: '29%', icon: '❌' },
    { title: 'In Progress', value: '138', sub: '10%', icon: '⏱️' }
  ];

  insights = [
    'Linux users scoring low',
    'Descriptive section needs improvement',
    '5 users eligible for retake'
  ];

  liveUsers = [
    { name: 'Jyothi', status: 'Active' },
    { name: 'Rahul', status: 'Idle' },
    { name: 'Sneha', status: 'Disconnected' }
  ];

  alerts = [
    'Idle > 5 mins',
    'Login failures detected',
    'Session expired'
  ];

  notifications = [
    'New access request',
    'Assessment completed',
    'System update scheduled'
  ];

  // ✅ Real-time update
  ngOnInit() {
    setInterval(() => {
      if (this.stats.length > 1) {
        this.stats[1].value = Math.floor(Math.random() * 100).toString();
      }
    }, 3000);
  }

  // ✅ Click action
  openUser(user: any) {
    alert(user.name + ' is ' + user.status);
  }

}

bootstrapApplication(AppComponent);