import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../Portfolio.css'

const githubUser = 'Whyuugl'

function Portfolio() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=30`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setRepos(data)
        }
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch repos')
        setLoading(false)
      })
  }, [])

  return (
    <div className="site">
      <div className="bg-glow" aria-hidden="true" />

      <main className="container portfolio-main">
        <header className="portfolio-header">
          <div className="portfolio-header-top">
            <Link to="/" className="back-link">← Back to Profile</Link>
            <span className="section-tag">Archive / GitHub</span>
          </div>
          <h1>All Projects</h1>
          <p className="intro-text">
            Every repository, experiment, and system pushed to my GitHub.
          </p>
        </header>

        {loading && <p className="loading">Loading projects from GitHub...</p>}
        {error && <p className="error">{error}</p>}

        <div className="repo-grid">
          {repos.map((repo, i) => (
            <Link
              to={`/project/${repo.name}`}
              key={repo.id}
              className="repo-card"
              style={{ animationDelay: `${Math.min(i, 12) * 0.04}s` }}
            >
              <div className="repo-header">
                <span className="repo-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{repo.name}</h3>
              </div>
              <p>{repo.description || 'No description provided.'}</p>
              <div className="repo-meta">
                {repo.language && <span className="repo-lang">{repo.language}</span>}
                <span className="repo-stars">★ {repo.stargazers_count}</span>
                <span className="repo-forks">⑂ {repo.forks_count}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="container site-footer">
        <p>(c) {new Date().getFullYear()} Wahyu Galang Ramadhan Rumampuk</p>
        <p className="footer-note">Designed & built from scratch</p>
      </footer>
    </div>
  )
}

export default Portfolio
