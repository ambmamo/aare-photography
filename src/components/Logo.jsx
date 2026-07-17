// Wordmark: "aare.photography" with the dot in accent (mirrors mockup logo).
export default function Logo({ href = '#home' }) {
  return (
    <a href={href} className="logo" aria-label="Aare Photography — home">
      aare<span>.</span>photography
    </a>
  )
}
