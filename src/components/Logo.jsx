// Wordmark: "aarekunle.photography" with the dot in accent (mirrors mockup logo).
export default function Logo({ href = '#home' }) {
  return (
    <a href={href} className="logo" aria-label="Aarekunle Photography — home">
      aarekunle<span>.</span>photography
    </a>
  )
}
