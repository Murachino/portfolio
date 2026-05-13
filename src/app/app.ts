import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly experiences = [
    {
      role: 'Automation Tester',
      company: 'Cybersystems Technologies',
      duration: '1 Year',
      period: '2024 - Present',
      description:
        'Test website and application services to ensure functionality and performance. Develop and validate backend APIs, identify and document defects, and contribute to continuous integration and testing pipelines.',
      technologies: ['MongoDB', 'DynamoDB', 'Postman', 'Swagger', 'SoapUI', 'JUnit', 'Jenkins', 'MySQL']
    },
    {
      role: 'Help Desk DevOps',
      company: 'Cybersystems Technologies',
      duration: '1 Year',
      period: '2023 - 2024',
      description:
        'Monitored and tested website and application services, developed and tested backend APIs, and provided technical support. Used Putty for server monitoring and FileZilla for file deployment.',
      technologies: ['MongoDB', 'DynamoDB', 'Postman', 'Swagger', 'SoapUI', 'JUnit', 'Jenkins', 'Angular', 'Figma', 'Putty', 'FileZilla']
    },
    {
      role: 'Help Desk Technician',
      company: 'Cybersystems Technologies',
      duration: '2 Years',
      period: '2021 - 2023',
      description:
        'Provided first-line technical support to end-users via phone, email, and remote access. Troubleshot hardware and software issues, managed support tickets, and ensured timely resolution of technical problems.',
      technologies: ['Windows 7-10', 'macOS', 'Linux', 'TCP/IP', 'DNS', 'DHCP', 'VPN', 'Hardware Support', 'Antivirus & Security']
    }
  ];

  protected readonly skillGroups = [
    { title: 'Operating Systems', items: ['Windows 7-10', 'macOS', 'Linux'] },
    { title: 'Networking', items: ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'Network Troubleshooting'] },
    { title: 'Databases', items: ['MongoDB', 'DynamoDB', 'MySQL'] },
    { title: 'API & Testing Tools', items: ['Postman', 'Swagger', 'SoapUI', 'JUnit', 'Jenkins'] },
    { title: 'Development', items: ['Angular', 'Figma', 'Backend APIs', 'Continuous Integration'] },
    { title: 'Server & Deployment', items: ['Putty', 'FileZilla', 'Server Monitoring', 'Port Configuration'] },
    { title: 'Hardware & Support', items: ['Desktops', 'Laptops', 'Mobile Devices', 'Printers', 'Hardware Troubleshooting'] },
    { title: 'Security', items: ['Antivirus Software', 'Security Software', 'User Account Management'] }
  ];

  protected readonly education = [
    { title: 'CompTIA Security+', year: 'In Progress', provider: 'Boston City College', type: 'Certification' },
    { title: 'CompTIA Server+', year: 'In Progress', provider: 'Boston City College', type: 'Certification' },
    { title: 'CompTIA Cloud+', year: '2025', provider: 'Boston City College', type: 'Certification' },
    { title: 'CompTIA N+', year: '2024', provider: 'Boston City College', type: 'Certification' },
    { title: 'CompTIA A+', year: '2023', provider: 'Boston City College', type: 'Certification' },
    { title: 'Financial Independence', year: '2022', provider: 'Boston City College', type: 'Qualification' },
    { title: 'Matric Certificate', year: '2020', provider: 'Miriyavhavha Tech Sec School', type: 'Secondary Education' }
  ];
}
