// "Featured on" strip. NOT mounted yet — per CONTENT.md, only include real
// publications Aare has worked with. Kept here so it's ready to drop in later.
// When enabling, replace `brands` with real outlets and render <LogoStrip /> in App.
const brands = [] // e.g. ['QUARTZ', 'VOGUE', ...]

export default function LogoStrip() {
  if (brands.length === 0) return null
  return (
    <section className="strip reveal">
      <div className="trust">I've been featured on</div>
      <div className="brands">
        {brands.map((b) => (
          <span key={b}>{b}</span>
        ))}
      </div>
    </section>
  )
}
