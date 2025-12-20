"use client";

import {
  Code,
  Terminal,
  BarChart3,
  Zap,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
} from "lucide-react";

export const postMeta = {
  slug: "k6-load-testing-guide",
  title: "Master K6 Load Testing: A Complete Guide",
  excerpt:
    "Learn how to perform comprehensive load testing with K6 and analyze performance metrics for your APIs.",
  date: "2024-12-20",
  author: "Gyanaprakash Khandual",
};

export default function K6LoadTestingPost() {
  return (
    <article className="min-h-screen text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-4xl px-6 py-12 mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Performance Testing
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Master K6 Load Testing: A Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>By {postMeta.author}</span>
            <span>•</span>
            <span>{postMeta.date}</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Load testing is crucial for ensuring your APIs can handle real-world
            traffic. K6 is a modern, developer-friendly load testing tool that
            makes performance testing simple and efficient. In this
            comprehensive guide, you'll learn how to set up K6, write effective
            load tests, and analyze results to optimize your application's
            performance.
          </p>
        </section>

        {/* Prerequisites */}
        <section className="mb-12">
          <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            <Zap className="w-8 h-8 text-yellow-500" />
            Prerequisites
          </h2>
          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    Go installed:
                  </strong>{" "}
                  K6 requires Go runtime environment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    K6 installed:
                  </strong>{" "}
                  Install via package manager or download from k6.io
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    Basic API knowledge:
                  </strong>{" "}
                  Understanding of REST APIs and HTTP methods
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            <Terminal className="w-8 h-8 text-blue-500" />
            Installation
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                macOS
              </h3>
              <pre className="p-4 overflow-x-auto text-green-400 bg-gray-900 rounded-lg dark:bg-black">
                <code>brew install k6</code>
              </pre>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Windows
              </h3>
              <pre className="p-4 overflow-x-auto text-green-400 bg-gray-900 rounded-lg dark:bg-black">
                <code>choco install k6</code>
              </pre>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Linux
              </h3>
              <pre className="p-4 overflow-x-auto text-green-400 bg-gray-900 rounded-lg dark:bg-black">
                <code>sudo apt-get install k6</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Writing Your First Test */}
        <section className="mb-12">
          <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            <Code className="w-8 h-8 text-purple-500" />
            Writing Your First Load Test
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Create a file named{" "}
            <code className="px-2 py-1 text-sm bg-gray-100 rounded dark:bg-gray-800">
              load-test.js
            </code>{" "}
            with the following content:
          </p>
          <pre className="p-6 overflow-x-auto text-sm leading-relaxed text-gray-100 bg-gray-900 rounded-lg dark:bg-black">
            <code>{`import http from 'k6/http';
import { check } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

const BASE_URL = 'https://github.com/GyanaprakashKhandual';
const AUTH_TOKEN = 'VRIMeS35VY7rmxIJeQIAKPLAsCspOzmE9Kcrb9XOoZAukmcT7qZvRDFWdTqbiOnt';
const ABOUT_US_ID = 'profile';

export const options = {
    stages: [
        { duration: '30s', target: 100, name: 'GET /profile' },
        { duration: '30s', target: 100, name: 'GET /profile/:id' },
        { duration: '30s', target: 100, name: 'GET /profile/:id/update' },
        { duration: '30s', target: 100, name: 'GET /profile/create' },
    ],
};

export default function () {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${AUTH_TOKEN}\`,
    };

    const stage = __ENV.STAGE || '1';

    if (stage === '1') {
        const res1 = http.get(\`\${BASE_URL}\`, { headers });
        check(res1, {
            'GET /profile Status 200-299': (r) => r.status >= 200 && r.status < 300,
        });
    } else if (stage === '2') {
        const res2 = http.get(\`\${BASE_URL}/\${ABOUT_US_ID}\`, { headers });
        check(res2, {
            'GET /profile/:id Status 200-299': (r) => r.status >= 200 && r.status < 300,
        });
    } else if (stage === '3') {
        const res3 = http.get(\`\${BASE_URL}/\${ABOUT_US_ID}/update\`, { headers });
        check(res3, {
            'GET /profile/:id/update Status 200-299': (r) => r.status >= 200 && r.status < 300,
        });
    } else if (stage === '4') {
        const res4 = http.get(\`\${BASE_URL}/create\`, { headers });
        check(res4, {
            'GET /profile/create Status 200-299': (r) => r.status >= 200 && r.status < 300,
        });
    }
}

export function handleSummary(data) {
    const metrics = data.metrics;
    const totalRequests = metrics.http_reqs.values.count || 0;
    const failedRequests = (metrics.http_req_failed?.values?.rate || 0) * totalRequests;

    const customSummary = \`
API TEST RESULTS

GET \${BASE_URL}
Success Rate: \${(1 - (metrics.http_req_failed?.values?.rate || 0)) * 100}%
Pass Rate: \${metrics.checks.values.passed ? ((metrics.checks.values.passed / metrics.checks.values.count) * 100).toFixed(2) : "0"}%
Response Time: Avg \${metrics.http_req_duration.values.avg.toFixed(2)} ms | Min \${metrics.http_req_duration.values.min.toFixed(2)} ms | Max \${metrics.http_req_duration.values.max.toFixed(2)} ms | Med \${metrics.http_req_duration.values.med.toFixed(2)} ms
Total Requests: \${totalRequests} | Failed: \${failedRequests}
\`;

    return {
        stdout: textSummary(data, { indent: ' ', enableColors: true }) + '\\n' + customSummary,
    };
}`}</code>
          </pre>
        </section>

        {/* Running the Test */}
        <section className="mb-12">
          <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            <Terminal className="w-8 h-8 text-green-500" />
            Running the Test
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Execute your load test using the following command:
          </p>
          <pre className="p-4 overflow-x-auto text-green-400 bg-gray-900 rounded-lg dark:bg-black">
            <code>k6 run load-test.js</code>
          </pre>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            For stage-specific testing:
          </p>
          <pre className="p-4 overflow-x-auto text-green-400 bg-gray-900 rounded-lg dark:bg-black">
            <code>k6 run -e STAGE=2 load-test.js</code>
          </pre>
        </section>

        {/* Converting Results to JSON */}
        <section className="mb-12">
          <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            <Code className="w-8 h-8 text-indigo-500" />
            Converting Results to JSON
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            After running your test, copy the terminal output and use Claude or
            any code assistant to convert it into structured JSON format. Here's
            the expected structure:
          </p>
          <pre className="p-6 overflow-x-auto text-sm leading-relaxed text-gray-100 bg-gray-900 rounded-lg dark:bg-black">
            <code>{`{
  "loadTestResults": {
    "testDate": "2024-12-09",
    "environment": "production",
    "baseUrl": "https://github.com/GyanaprakashKhandual",
    "routes": [
      {
        "routeName": "GitHubProfileRoute",
        "performance": {
          "avgResponseTime": 3777.68,
          "minResponseTime": 0.0,
          "medResponseTime": 2520.48,
          "maxResponseTime": 60000.34,
          "p90ResponseTime": 8190.0,
          "p95ResponseTime": 9610.0
        },
        "results": {
          "successRate": 99.05,
          "passRate": 0.0,
          "totalRequests": 2861,
          "failedRequests": 27
        },
        "apis": [
          {
            "method": "GET",
            "url": "https://github.com/GyanaprakashKhandual",
            "name": "Get GitHub Profile",
            "successRate": 99.05,
            "avgResponseTime": 3777.68,
            "minResponseTime": 0.0,
            "maxResponseTime": 60000.34,
            "totalRequests": 2861,
            "failedRequests": 27
          }
        ]
      }
    ]
  }
}`}</code>
          </pre>
        </section>

        {/* Visualizing Results */}
        <section className="mb-12">
          <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            <BarChart3 className="w-8 h-8 text-orange-500" />
            Visualizing Results
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Once you have the JSON data, you can create beautiful HTML reports
            or Excel sheets. Here are your options:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border border-blue-200 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
              <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                HTML/CSS/JS Report
              </h3>
              <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                Create interactive, visual reports with charts and graphs using
                HTML, CSS, and JavaScript.
              </p>
              <a
                href="https://github.com/GyanaprakashKhandual/Optimization-PISL-Infra-Backend/blob/master/public/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Template →
              </a>
            </div>
            <div className="p-6 border border-green-200 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
              <h3 className="flex items-center gap-2 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                Excel Spreadsheet
              </h3>
              <p className="mb-3 text-sm text-gray-700 dark:text-gray-300">
                Generate Excel sheets for detailed analysis, data manipulation,
                and sharing with stakeholders.
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Use libraries like SheetJS or ExcelJS
              </span>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-12">
          <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            <TrendingUp className="w-8 h-8 text-red-500" />
            Understanding Key Metrics
          </h2>
          <div className="space-y-4">
            <div className="p-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <Clock className="flex-shrink-0 w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                    Response Time
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Average, minimum, median, and maximum time taken for
                    requests. Lower is better.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 w-5 h-5 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                    Success Rate
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Percentage of requests that completed successfully. Aim for
                    99%+ in production.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <XCircle className="flex-shrink-0 w-5 h-5 mt-1 text-red-500" />
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                    Failed Requests
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Number of requests that failed due to timeouts, errors, or
                    connection issues.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <TrendingUp className="flex-shrink-0 w-5 h-5 mt-1 text-purple-500" />
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                    P90/P95 Response Time
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    90th and 95th percentile response times. Critical for
                    understanding worst-case scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            <Zap className="w-8 h-8 text-yellow-500" />
            Best Practices
          </h2>
          <div className="p-6 border border-yellow-200 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">
                  1.
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    Start small:
                  </strong>{" "}
                  Begin with low virtual users and gradually increase load
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">
                  2.
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    Test production-like environments:
                  </strong>{" "}
                  Use staging that mirrors production
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">
                  3.
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    Monitor backend systems:
                  </strong>{" "}
                  Watch database, CPU, memory during tests
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">
                  4.
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    Test realistic scenarios:
                  </strong>{" "}
                  Simulate actual user behavior patterns
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">
                  5.
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">
                    Regular testing:
                  </strong>{" "}
                  Make load testing part of your CI/CD pipeline
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Conclusion
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Load testing with K6 is essential for building robust, scalable
            applications. By following this guide, you can identify performance
            bottlenecks, optimize your APIs, and ensure your application
            delivers excellent performance under heavy load.
          </p>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Remember to analyze your results carefully, convert them into
            actionable insights using JSON formatting, and create visual reports
            that help communicate performance metrics to your team. Happy
            testing!
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Written by {postMeta.author} • {postMeta.date}
            </p>
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="#"
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                Share
              </a>
              <a
                href="#"
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                Bookmark
              </a>
              <a
                href="#"
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                Report
              </a>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
