// Lighthouse CI config — runs on every PR via .github/workflows/lighthouse.yml
// Audits a representative slice of routes against a local `next start` server.
// Mode is mobile (what Google ranks against). 3 runs per URL for stability.
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'Ready',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/services',
        'http://localhost:3000/work',
        'http://localhost:3000/work/eliminent',
        'http://localhost:3000/contact',
      ],
      numberOfRuns: 3,
    },
    assert: {
      // Soft thresholds — warn don't fail. Tighten over time.
      assertions: {
        'categories:performance': ['warn', { minScore: 0.85 }],
        'categories:accessibility': ['warn', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.95 }],

        // Off — these are infra concerns Vercel handles, not measurable on `next start`.
        'uses-http2': 'off',
        'uses-text-compression': 'off',
        'uses-long-cache-ttl': 'off',
        'is-on-https': 'off',
        'redirects-http': 'off',
        'csp-xss': 'off',
      },
    },
    upload: {
      // Free ephemeral storage (7-day retention). Each run prints a URL to the full HTML report.
      target: 'temporary-public-storage',
    },
  },
};
