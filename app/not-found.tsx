import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-grid grid min-h-[100dvh] place-items-center px-4 py-16">
      <section className="panel panel-rule w-full max-w-4xl overflow-hidden" aria-labelledby="not-found-title">
        <div className="grid md:grid-cols-12">
          <div className="border-b border-[rgb(var(--line)/0.12)] p-8 md:col-span-5 md:border-b-0 md:border-r md:p-12">
            <p className="eyebrow">Missing frame / 404</p>
            <p className="display mt-10 text-8xl leading-none text-[rgb(var(--accent))] md:text-9xl">404</p>
          </div>
          <div className="p-8 md:col-span-7 md:p-12">
            <h1 id="not-found-title" className="display text-5xl leading-[0.95] text-[rgb(var(--text))] md:text-7xl">Page not found</h1>
            <p className="mt-6 max-w-md text-sm leading-8 text-[rgb(var(--muted))]">This frame is not part of the current research record. 返回开场，继续浏览研究、项目与学术经历。</p>
            <Link className="button-primary mt-8" href="/">Return to opening frame <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
