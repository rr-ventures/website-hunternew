import Link from 'next/link';

const regions = ['Newcastle', 'Maitland', 'Lake Macquarie', 'Port Stephens', 'Hunter Valley'];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-20">
      <div className="section-shell py-10 space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
          {regions.map((region) => (
            <span key={region} className="rounded-full border border-white/15 px-3 py-1">
              {region}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <Link href="tel:0466911617" className="hover:text-white underline">
            0466 911 617
          </Link>
          <Link href="mailto:hello@hunternew.com" className="hover:text-white underline">
            hello@hunternew.com
          </Link>
        </div>
        <p className="text-xs text-white/60">
          General information only. Not financial advice. No guarantees. Service-area only.
        </p>
      </div>
    </footer>
  );
}
