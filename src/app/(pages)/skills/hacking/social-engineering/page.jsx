'use client';

import { useState } from 'react';

const hackingSkills = [
  { name: 'Linux', icon: 'linux', category: 'Operating Systems', exp: 5, projects: 70 },
  { name: 'Bash Scripting', icon: 'bash', category: 'Scripting', exp: 5, projects: 75 },
  { name: 'Python', icon: 'python', category: 'Programming', exp: 5, projects: 80 },
  { name: 'Metasploit', icon: 'metasploit', category: 'Exploitation', exp: 4, projects: 55 },
  { name: 'Burp Suite', icon: 'burpsuite', category: 'Web Security', exp: 4, projects: 60 },
  { name: 'Wireshark', icon: 'wireshark', category: 'Network Analysis', exp: 5, projects: 65 },
  { name: 'Nmap', icon: 'nmap', category: 'Scanning', exp: 5, projects: 70 },
  { name: 'Kali Linux', icon: 'kalilinux', category: 'Operating Systems', exp: 4, projects: 58 },
  { name: 'Aircrack-ng', icon: 'aircrack', category: 'Wireless', exp: 4, projects: 48 },
  { name: 'John the Ripper', icon: 'johnripper', category: 'Password Cracking', exp: 4, projects: 50 },
  { name: 'Hashcat', icon: 'hashcat', category: 'Password Cracking', exp: 4, projects: 52 },
  { name: 'Hydra', icon: 'hydra', category: 'Brute Force', exp: 4, projects: 45 },
  { name: 'SQLmap', icon: 'sqlmap', category: 'SQL Injection', exp: 4, projects: 50 },
  { name: 'Nikto', icon: 'nikto', category: 'Vulnerability Scanning', exp: 3, projects: 40 },
  { name: 'OWASP ZAP', icon: 'owaspzap', category: 'Web Security', exp: 4, projects: 55 },
  { name: 'Ghidra', icon: 'ghidra', category: 'Reverse Engineering', exp: 3, projects: 35 },
  { name: 'IDA Pro', icon: 'idapro', category: 'Reverse Engineering', exp: 3, projects: 32 },
  { name: 'Ettercap', icon: 'ettercap', category: 'MITM Attacks', exp: 3, projects: 38 },
  { name: 'Snort', icon: 'snort', category: 'IDS', exp: 3, projects: 36 },
  { name: 'Suricata', icon: 'suricata', category: 'IDS', exp: 3, projects: 34 },
  { name: 'Metterpreter', icon: 'meterpreter', category: 'Exploitation', exp: 4, projects: 48 },
  { name: 'Social Engineering Toolkit', icon: 'set', category: 'Social Engineering', exp: 3, projects: 32 },
  { name: 'BeEF', icon: 'beef', category: 'Browser Exploitation', exp: 3, projects: 30 },
  { name: 'Volatility', icon: 'volatility', category: 'Forensics', exp: 3, projects: 28 },
  { name: 'Autopsy', icon: 'autopsy', category: 'Forensics', exp: 3, projects: 26 },
  { name: 'Censys', icon: 'censys', category: 'OSINT', exp: 3, projects: 38 },
  { name: 'Shodan', icon: 'shodan', category: 'OSINT', exp: 4, projects: 52 },
  { name: 'The Harvester', icon: 'harvester', category: 'OSINT', exp: 4, projects: 45 },
  { name: 'Maltego', icon: 'maltego', category: 'OSINT', exp: 3, projects: 40 },
  { name: 'Gobuster', icon: 'gobuster', category: 'Directory Enumeration', exp: 4, projects: 48 },
  { name: 'DirBuster', icon: 'dirbuster', category: 'Directory Enumeration', exp: 3, projects: 40 },
  { name: 'Masscan', icon: 'masscan', category: 'Port Scanning', exp: 3, projects: 35 },
  { name: 'Openvas', icon: 'openvas', category: 'Vulnerability Scanner', exp: 3, projects: 38 },
  { name: 'Nessus', icon: 'nessus', category: 'Vulnerability Scanner', exp: 4, projects: 48 }
];

// SVG Icons for Hacking Skills
const SkillIcon = ({ icon }) => {
  const icons = {
    linux: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v12M6 12h12" />
        <path d="M9 9l3 3 3-3M9 15l3-3 3 3" />
      </svg>
    ),
    bash: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8l3 3-3 3M12 8h6" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" />
        <path d="M8 8h3v3H8zM13 8h3v3h-3zM8 13h8v3H8z" />
      </svg>
    ),
    metasploit: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    burpsuite: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2 2 4-4" />
        <path d="M12 3v3M12 18v3" />
      </svg>
    ),
    wireshark: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12c0-3 2-6 5-8m13 8c0-3-2-6-5-8" />
        <path d="M3 12c0 3 2 6 5 8m13-8c0 3-2 6-5 8" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    nmap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6l3 3-3 3-3-3 3-3z" />
        <path d="M12 15l3-3-3-3-3 3 3 3z" />
      </svg>
    ),
    kalilinux: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8c0-2 1-4 3-5h10c2 1 3 3 3 5v8c0 2-1 4-3 5H7c-2-1-3-3-3-5V8z" />
        <path d="M8 12l3 3 4-4" />
      </svg>
    ),
    aircrack: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    johnripper: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 8h12v8H6z" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
        <path d="M10 4l2-2 2 2M10 20l2 2 2-2" />
      </svg>
    ),
    hashcat: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M7 10h10M7 14h10" />
        <circle cx="5" cy="9" r="1" fill="currentColor" />
        <circle cx="19" cy="9" r="1" fill="currentColor" />
      </svg>
    ),
    hydra: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 7h7l-5 4 2 7-7-5-7 5 2-7-5-4h7l3-7z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    sqlmap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
        <path d="M12 12h6" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    nikto: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6h4" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    owaspzap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l3-3 3 3-3 3-3-3z" />
        <path d="M15 12l3-3 3 3-3 3-3-3z" />
        <path d="M9 12h6" />
      </svg>
    ),
    ghidra: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 5h18M3 12h18M3 19h18" />
        <path d="M6 5v14M12 5v14M18 5v14" />
        <circle cx="9" cy="12" r="1" fill="currentColor" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    idapro: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 19 8 19 20 5 20 5 4 12 2" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    ettercap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12c0 5 4 9 9 9s9-4 9-9-4-9-9-9-9 4-9 9z" />
        <path d="M9 9l3 3 3-3M9 15l3-3 3 3" />
      </svg>
    ),
    snort: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18v12H3z" />
        <path d="M6 10l3 3 4-4" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
    suricata: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    meterpreter: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12l4-4 4 4-4 4-4-4z" />
        <path d="M13 12l4-4 4 4-4 4-4-4z" />
        <path d="M8 12h5" />
      </svg>
    ),
    set: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9l3 3 3-3M9 15l3-3 3 3" />
      </svg>
    ),
    beef: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M9 6v12" />
        <circle cx="6" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
    volatility: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 18c3-3 6-6 9-9s6-3 9 0" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    autopsy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6h18v12H3z" />
        <path d="M6 9h12M6 12h12M6 15h8" />
        <circle cx="5" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
    censys: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    shodan: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 12l3-3 3 3-3 3-3-3z" />
        <path d="M15 12l3-3 3 3-3 3-3-3z" />
        <path d="M9 6l3-3 3 3-3 3-3-3zM9 18l3 3 3-3-3-3-3 3z" />
      </svg>
    ),
    harvester: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 8l4-4 4 4-4 4-4-4z" />
        <path d="M16 8l4-4 4 4-4 4-4-4z" />
        <path d="M4 16l4-4 4 4-4 4-4-4zM16 16l4-4 4 4-4 4-4-4z" />
      </svg>
    ),
    maltego: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="8" r="4" />
        <circle cx="12" cy="16" r="4" />
        <path d="M8 12l4 4M16 12l-4 4" />
      </svg>
    ),
    gobuster: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M6 9h12M6 12h12M6 15h8" />
      </svg>
    ),
    dirbuster: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 5h16v3H4zM4 11h16v3H4zM4 17h10v3H4z" />
        <circle cx="17" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    masscan: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M8 8l8 8M16 8l-8 8" />
      </svg>
    ),
    openvas: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    nessus: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M4 10h16M8 5v14M16 5v14" />
        <circle cx="6" cy="7" r="1" fill="currentColor" />
      </svg>
    )
  };
  return <div className="w-6 h-6">{icons[icon] || icons.linux}</div>;
};

export default function HackingSkillsTable() {
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedSkills = [...hackingSkills].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    if (typeof aVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    
    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Hacking & Security Skills
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Advanced penetration testing, exploitation, forensics, and network security techniques
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-slate-800/50">
                <tr>
                  <th 
                    onClick={() => handleSort('name')}
                    className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <span>Skill</span>
                      {sortField === 'name' && (
                        <span className="text-red-600 dark:text-red-400">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort('category')}
                    className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <span>Category</span>
                      {sortField === 'category' && (
                        <span className="text-red-600 dark:text-red-400">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort('exp')}
                    className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <span>Experience</span>
                      {sortField === 'exp' && (
                        <span className="text-red-600 dark:text-red-400">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                  <th 
                    onClick={() => handleSort('projects')}
                    className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase cursor-pointer dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <span>Projects</span>
                      {sortField === 'projects' && (
                        <span className="text-red-600 dark:text-red-400">
                          {sortDirection === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                {sortedSkills.map((skill, index) => (
                  <tr 
                    key={skill.name}
                    className="transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50"
                    style={{ animationDelay: `${index * 0.02}s` }}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center text-gray-700 transition-colors dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300">
                          <SkillIcon icon={skill.icon} />
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-slate-800 dark:text-slate-300">
                        {skill.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-slate-800">
                            <div
                              style={{ width: `${(skill.exp / 5) * 100}%` }}
                              className="h-full transition-all bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 duration-600"
                            />
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap">
                          {skill.exp} yrs
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          {skill.projects}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-slate-400">+</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
          <div className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 rounded-xl">
            <div className="text-sm text-gray-600 dark:text-slate-400">Total Skills</div>
            <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {hackingSkills.length}
            </div>
          </div>
          <div className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 rounded-xl">
            <div className="text-sm text-gray-600 dark:text-slate-400">Total Projects</div>
            <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {hackingSkills.reduce((sum, skill) => sum + skill.projects, 0)}+
            </div>
          </div>
          <div className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-slate-800 rounded-xl">
            <div className="text-sm text-gray-600 dark:text-slate-400">Avg Experience</div>
            <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {(hackingSkills.reduce((sum, skill) => sum + skill.exp, 0) / hackingSkills.length).toFixed(1)} yrs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}