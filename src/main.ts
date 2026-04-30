import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="layout">

  <aside class="sidebar">
    <h2>C.O.R.E</h2>

    <p *ngFor="let item of modules"
       (click)="selectedModule = item.key"
       [class.active]="selectedModule === item.key">
      {{ item.icon }} {{ item.name }}
    </p>
  </aside>

  <main class="main">

    <div class="header">
      <div>
        <h1>{{ getTitle() }}</h1>
        <p>{{ getDescription() }}</p>
      </div>
      <div class="user">Admin User</div>
    </div>

    <!-- Dashboard -->
    <section *ngIf="selectedModule === 'dashboard'">
      <div class="cards">
        <div class="card" *ngFor="let item of stats">
          <div>{{ item.icon }}</div>
          <h2>{{ item.value }}</h2>
          <p>{{ item.title }}</p>
          <small>{{ item.sub }}</small>
        </div>
      </div>

      <div class="top">
        <div class="panel">
          <h3>AI Smart Insights</h3>
          <p>Linux Intermediate users are scoring low.</p>
          <p>Descriptive section average score is low.</p>
          <p>5 users are eligible for retake.</p>
        </div>

        <div class="panel">
          <h3>Live Monitoring</h3>
          <p>Jyothi - Active</p>
          <p>Rahul - Idle</p>
          <p>Sneha - Disconnected</p>
        </div>

        <div class="panel">
          <h3>Risk & Alerts</h3>
          <p>Idle users detected</p>
          <p>Login failures found</p>
          <p>Session expiring soon</p>
        </div>
      </div>
    </section>

    <!-- Assessment -->
    <section *ngIf="selectedModule === 'assessment'" class="panel">
      <h3>Assessment Module</h3>
      <p>This module controls the complete candidate assessment flow.</p>

      <div class="module-grid">
        <div class="mini-card">MCQ Questions</div>
        <div class="mini-card">Descriptive Answers</div>
        <div class="mini-card">Transcript Analysis</div>
        <div class="mini-card">Decision Making</div>
      </div>

      <p><b>Note:</b> Decision Making module is planned but not fully developed yet.</p>
    </section>

    <!-- Behavioural Simulator -->
    <section *ngIf="selectedModule === 'behavioral'" class="panel">
      <h3>Behavioural Simulator</h3>
      <p>This module provides AI-based real-time scenarios.</p>
      <p>User response is evaluated based on communication, decision making, and problem solving.</p>

      <div class="scenario-box">
        <b>Example Scenario:</b>
        <p>A customer is frustrated due to repeated issue. How will you respond?</p>
        <button>Start Scenario</button>
      </div>
    </section>

    <!-- Descriptive -->
    <section *ngIf="selectedModule === 'descriptive'" class="panel">
      <h3>Descriptive Module</h3>
      <p>This module captures short/long written answers from candidates.</p>

      <label>Question:</label>
      <p class="question-box">Explain how you would troubleshoot a failed login issue.</p>

      <textarea placeholder="Type your answer here..."></textarea>
      <button>Save Response</button>
    </section>

    <!-- Footer -->
    <section *ngIf="selectedModule === 'footer'" class="panel">
      <h3>Footer Component</h3>
      <p>Footer is a common bottom section used across the application.</p>
      <p>It can contain copyright details, help links, version number, and support information.</p>
    </section>

    <!-- Header -->
    <section *ngIf="selectedModule === 'header'" class="panel">
      <h3>Header Component</h3>
      <p>Header is a common UI section shown at the top of pages.</p>
      <p>It contains page title, user profile, notifications, and navigation controls.</p>
    </section>

    <!-- Login -->
    <section *ngIf="selectedModule === 'login'" class="panel form">
      <h3>Login Module</h3>
      <input placeholder="Enter email or LDAP">
      <input placeholder="Enter password" type="password">
      <button>Login</button>
    </section>

    <!-- Register -->
    <section *ngIf="selectedModule === 'register'" class="panel form">
      <h3>Register Module</h3>
      <input placeholder="Name">
      <input placeholder="Email / LDAP">
      <select>
        <option>Select Subject</option>
        <option>Linux</option>
        <option>Python</option>
        <option>GCP Basics</option>
        <option>Data Analytics</option>
      </select>
      <select>
        <option>Select Level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <button>Submit for Approval</button>
    </section>

    <!-- Results -->
    <section *ngIf="selectedModule === 'results'" class="panel">
      <h3>Results Module</h3>

      <div class="result-box">
        <h2>Overall Score: 76%</h2>
        <p>Status: <b class="pass-text">Passed</b></p>
        <p>MCQ: 80%</p>
        <p>Descriptive: 70%</p>
        <p>Behavioural Simulator: 78%</p>
      </div>
    </section>

    <!-- Unified Chart -->
    <section *ngIf="selectedModule === 'chart'" class="panel">
      <h3>Unified Chart</h3>
      <p>This module displays complete performance analytics.</p>

      <div class="donut">76%</div>

      <div class="module-grid">
        <div class="mini-card">MCQ 80%</div>
        <div class="mini-card">Descriptive 70%</div>
        <div class="mini-card">Simulator 78%</div>
      </div>
    </section>

    <!-- User Dashboard -->
    <section *ngIf="selectedModule === 'userDashboard'" class="panel">
      <h3>User Dashboard</h3>
      <p>User can select only subject and level. Timing cannot be selected by user.</p>

      <select>
        <option>Select Subject</option>
        <option>Linux</option>
        <option>Python</option>
        <option>GCP Basics</option>
        <option>Data Analytics</option>
      </select>

      <select>
        <option>Select Level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <button>Submit Selection</button>

      <p><b>Coordinator Flow:</b> After subject and level selection, coordinator schedules assessment for a batch of users.</p>
    </section>

    <!-- VMO View -->
    <section *ngIf="selectedModule === 'vmo'" class="panel">
      <h3>VMO View</h3>
      <p>VMO can review candidate performance and assessment status.</p>

      <table>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Level</th>
          <th>Status</th>
          <th>Score</th>
        </tr>
        <tr>
          <td>Jyothi</td>
          <td>Linux</td>
          <td>Intermediate</td>
          <td>Completed</td>
          <td>76%</td>
        </tr>
        <tr>
          <td>Rahul</td>
          <td>Python</td>
          <td>Beginner</td>
          <td>In Progress</td>
          <td>-</td>
        </tr>
      </table>
    </section>

  </main>
</div>
`
})
class AppComponent {
  selectedModule = 'dashboard';

  modules = [
    { key: 'assessment', name: 'Assessment', icon: '📝' },
    { key: 'behavioral', name: 'Behavioural Simulator', icon: '🤖' },
    { key: 'dashboard', name: 'Dashboard', icon: '🏠' },
    { key: 'descriptive', name: 'Descriptive', icon: '✍️' },
    { key: 'footer', name: 'Footer', icon: '⬇️' },
    { key: 'header', name: 'Header', icon: '⬆️' },
    { key: 'login', name: 'Login', icon: '🔐' },
    { key: 'register', name: 'Register', icon: '🆕' },
    { key: 'results', name: 'Results', icon: '📊' },
    { key: 'chart', name: 'Unified Chart', icon: '📈' },
    { key: 'userDashboard', name: 'User Dashboard', icon: '👤' },
    { key: 'vmo', name: 'VMO View', icon: '👥' }
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

  getDescription() {
    return 'CORE assessment platform module view';
  }
}

bootstrapApplication(AppComponent);