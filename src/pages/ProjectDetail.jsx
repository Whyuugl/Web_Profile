import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import '../App.css'
import '../ProjectDetail.css'

const githubUser = 'Whyuugl'

function ProjectDetail() {
  const { name } = useParams()
  const [result, setResult] = useState(null)
  const currentResult = result?.name === name ? result : null
  const repo = currentResult?.repo
  const langs = currentResult?.langs ?? {}
  const readme = currentResult?.readme ?? ''
  const loading = !currentResult

  useEffect(() => {
    let active = true
    Promise.all([
      fetch(`https://api.github.com/repos/${githubUser}/${name}`).then(r => r.json()),
      fetch(`https://api.github.com/repos/${githubUser}/${name}/languages`).then(r => r.json()).catch(() => ({})),
      fetch(`https://api.github.com/repos/${githubUser}/${name}/readme`, {
        headers: { Accept: 'application/vnd.github.v3.raw' },
      })
        .then((r) => (r.ok ? r.text() : ''))
        .catch(() => ''),
    ]).then(([repoData, langData, readmeText]) => {
      if (active) {
        setResult({
          name,
          repo: repoData?.message ? null : repoData,
          langs: langData,
          readme: readmeText,
        })
      }
    }).catch(() => {
      if (active) {
        setResult({ name, repo: null, langs: {}, readme: '', error: 'Failed to load project.' })
      }
    })

    return () => {
      active = false
    }
  }, [name])

  const totalBytes = Object.values(langs).reduce((a, b) => a + b, 0) || 1
  const langEntries = Object.entries(langs).sort((a, b) => b[1] - a[1]).slice(0, 6)
  const pct = (bytes) => ((bytes / totalBytes) * 100).toFixed(1)

  return (
    <div className="site">
      <div className="bg-glow" aria-hidden="true" />

      <main className="container detail-main">
        <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>

        {loading && <p className="loading">Loading project...</p>}

        {!loading && !repo && <p className="error">{currentResult.error || 'Project not found.'}</p>}

        {repo && (
          <>
            <header className="detail-header">
              <span className="section-tag">Project Detail</span>
              <h1>{repo.name}</h1>
              <p className="detail-desc">{repo.description || 'No description provided.'}</p>
              <div className="detail-badges">
                {repo.language && <span className="badge">{repo.language}</span>}
                <span className="badge">★ {repo.stargazers_count}</span>
                <span className="badge">⑂ {repo.forks_count}</span>
                {repo.license?.spdx_id &&<span className="badge">{repo.license.spdx_id}</span>}
                <span className="badge">updated {new Date(repo.updated_at).getFullYear()}</span>
              </div>
            </header>

            {langEntries.length > 0 && (
              <section className="detail-section">
                <span className="section-tag">Languages</span>
                <div className="lang-bar">
                  {langEntries.map(([lang, bytes]) => (
                    <span
                      key={lang}
                      className="lang-segment"
                      style={{ '--w': `${pct(bytes)}%` }}
                      title={`${lang} ${pct(bytes)}%`}
                    />
                  ))}
                </div>
                <div className="lang-legend">
                  {langEntries.map(([lang, bytes]) => (
                    <span key={lang} className="lang-item">
                      <i aria-hidden="true" />
                      {lang}
                      <em>{pct(bytes)}%</em>
                    </span>
                  ))}
                </div>
              </section>
            )}

            {repo.topics?.length > 0 && (
              <section className="detail-section">
                <span className="section-tag">Topics</span>
                <div className="topic-list">
                  {repo.topics.map((t) => <span key={t} className="topic">{t}</span>)}
                </div>
              </section>
            )}

            <section className="detail-section readme-section">
              <span className="section-tag">Project Guide</span>
              <div className="readme-content">
                {readme
                  ? <ReactMarkdown>{readme}</ReactMarkdown>
                  : <p>No README available.</p>}
              </div>
            </section>

            <div className="detail-actions">
              <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn btn-primary">
                View on GitHub →
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  Live Demo
                </a>
              )}
            </div>
          </>
        )}
      </main>

      <footer className="container site-footer">
        <p>(c) {new Date().getFullYear()} Wahyu Galang Ramadhan Rumampuk</p>
        <p className="footer-note">Designed & built from scratch</p>
      </footer>
    </div>
  )
}

export default ProjectDetail
