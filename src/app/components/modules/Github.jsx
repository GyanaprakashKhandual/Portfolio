'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Code, Cloud, Loader } from 'lucide-react';

const GithubComponent = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('stars');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/GyanaprakashKhandual/repos');

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();

        // Sort repositories
        const sortedData = data.sort((a, b) => {
          if (sortBy === 'stars') return (b.stargazers_count || 0) - (a.stargazers_count || 0);
          if (sortBy === 'forks') return (b.forks_count || 0) - (a.forks_count || 0);
          if (sortBy === 'updated') return new Date(b.updated_at) - new Date(a.updated_at);
          return 0;
        });

        setRepos(sortedData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [sortBy]);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-100 text-yellow-800',
      TypeScript: 'bg-blue-100 text-blue-800',
      Python: 'bg-green-100 text-green-800',
      React: 'bg-cyan-100 text-cyan-800',
      'C++': 'bg-pink-100 text-pink-800',
      Java: 'bg-orange-100 text-orange-800',
      HTML: 'bg-red-100 text-red-800',
      CSS: 'bg-indigo-100 text-indigo-800',
      PHP: 'bg-purple-100 text-purple-800',
      Ruby: 'bg-red-200 text-red-900',
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className=" bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-amber-200 relative overflow-hidden"
    >
      {/* Cloud decorative elements */}
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 right-0 opacity-10 text-amber-600"
      >
        <Cloud className="w-24 h-24 sm:w-32 sm:h-32" />
      </motion.div>
      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 left-0 opacity-10 text-orange-600"
      >
        <Cloud className="w-20 h-20 sm:w-28 sm:h-28" />
      </motion.div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Github className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
            GitHub Repositories
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Explore all my public repositories and projects
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSortBy('stars')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${sortBy === 'stars'
                  ? ' bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-amber-200 hover:bg-gray-50'
                }`}
            >
              ⭐ Stars
            </button>
            <button
              onClick={() => setSortBy('forks')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${sortBy === 'forks'
                  ? ' bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-amber-200 hover:bg-gray-50'
                }`}
            >
              <GitFork className="inline w-4 h-4 mr-1" />
              Forks
            </button>
            <button
              onClick={() => setSortBy('updated')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${sortBy === 'updated'
                  ? ' bg-linear-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-amber-200 hover:bg-gray-50'
                }`}
            >
              📅 Recent
            </button>
          </div>
          <a
            href="https://github.com/GyanaprakashKhandual"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold transition-all text-sm sm:text-base"
          >
            <Github className="w-5 h-5" />
            View Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Loader className="w-12 h-12 text-amber-600" />
            </motion.div>
            <p className="mt-4 text-gray-600 font-semibold">Fetching repositories...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center"
          >
            <p className="text-red-700 font-semibold mb-2">Error loading repositories</p>
            <p className="text-red-600 text-sm">{error}</p>
          </motion.div>
        )}

        {/* Repositories Grid */}
        {!loading && repos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ translateY: -8 }}
                className="bg-white rounded-2xl p-6 border border-amber-100 hover:border-amber-300 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Repo Header */}
                <div className="mb-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group"
                  >
                    <Code className="w-5 h-5 text-amber-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                  </a>
                </div>

                {/* Description */}
                {repo.description && (
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                    {repo.description}
                  </p>
                )}

                {/* Language */}
                {repo.language && (
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getLanguageColor(repo.language)}`}>
                      {repo.language}
                    </span>
                  </div>
                )}

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                    <span className="font-semibold">{repo.stargazers_count || 0}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4 text-orange-600" />
                    <span className="font-semibold">{repo.forks_count || 0}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Updated: {formatDate(repo.updated_at)}
                  </div>
                </div>

                {/* Visit Button */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2  bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-4 py-3 rounded-lg font-semibold transition-all text-sm sm:text-base"
                >
                  Visit Repository
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && repos.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Github className="w-16 h-16 text-amber-300 mx-auto mb-4" />
            <p className="text-gray-600 font-semibold text-lg">No repositories found</p>
          </motion.div>
        )}

        {/* Stats Summary */}
        {!loading && repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 pt-8 border-t-2 border-amber-200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <p className="text-amber-600 font-bold text-2xl sm:text-3xl">{repos.length}</p>
                <p className="text-gray-600 font-semibold text-sm">Total Repositories</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <p className="text-amber-600 font-bold text-2xl sm:text-3xl">
                  {repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)}
                </p>
                <p className="text-gray-600 font-semibold text-sm">Total Stars</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <p className="text-amber-600 font-bold text-2xl sm:text-3xl">
                  {repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0)}
                </p>
                <p className="text-gray-600 font-semibold text-sm">Total Forks</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default GithubComponent;