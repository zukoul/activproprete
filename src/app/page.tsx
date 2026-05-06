/* eslint-disable @next/next/no-img-element */

const IMG = {
  office: "/office.jpg",
  hotel: "/hotel.jpg",
  residence: "/villa.jpg",
  affordable:
    "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=900&auto=format&fit=crop&q=80",
  team1: "/team1.jpg",
  team2: "/team2.jpg",
  team3: "/team3.jpg",
  welcome: "/welcome.jpg",
  testimonial:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  blog1:
    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80",
  blog2:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80",
  blog3:
    "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?w=600&auto=format&fit=crop&q=80",
};

const WHATSAPP = "https://wa.me/2250707089160";
const PHONE_DISPLAY = "+225 07 07 08 91 60";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L10 15l-5.3 2.8 1-5.9L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function Check() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-light text-brand">
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 10l4 4 8-8" />
      </svg>
    </span>
  );
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Logo Activ'propreté"
      className={className}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <LogoMark className="h-16 w-16 object-contain" />
            <div className="hidden text-[10px] uppercase tracking-wider text-slate-500 sm:block">
              Entreprise de nettoyage
              <br />
              à Yamoussoukro
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#" className="text-brand">Accueil</a>
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#equipe" className="hover:text-brand">Équipe</a>
            <a href="#blog" className="hover:text-brand">Blog</a>
            <a href="#contact" className="hover:text-brand">Contact</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Devis gratuit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative isolate overflow-hidden bg-cover"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundPosition: "70% center",
        }}
      >
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25 sm:via-black/45 sm:to-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium text-white/90">
              Un nettoyage de qualité au juste prix.
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-sm lg:text-6xl">
              Nettoyage professionnel,
              <br /> efficace et minutieux
              <br /> à Yamoussoukro
            </h1>
            <p className="mt-6 max-w-md text-base text-white/85">
              Activ&rsquo;propreté intervient pour les bureaux, hôtels, cliniques,
              résidences, écoles, banques et chantiers en Côte d&rsquo;Ivoire.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Demander un devis
              </a>
              <a
                href="#services"
                className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Voir nos services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — Nous offrons toujours le meilleur service */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Nous offrons toujours
            <br /> le meilleur service
          </h2>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-900">Nos services</p>
            <p className="text-sm text-slate-600">
              Nous adaptons chaque prestation à vos besoins. Bureaux, hôtels,
              cliniques, résidences, piscines, chantiers, écoles ou banques —
              nous intervenons partout en Côte d&rsquo;Ivoire.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Nettoyage de bureaux",
              desc: "Entretien régulier ou ponctuel de vos espaces de travail : open-space, salles de réunion, sanitaires.",
              img: IMG.office,
              highlighted: false,
            },
            {
              title: "Hôtels & Cliniques",
              desc: "Protocoles d&rsquo;hygiène stricts pour chambres, espaces communs, blocs et zones sensibles.",
              img: IMG.hotel,
              highlighted: true,
            },
            {
              title: "Résidences & Villas",
              desc: "Ménage complet de votre domicile, vitres, sols, sanitaires — entretien hebdomadaire ou ponctuel.",
              img: IMG.residence,
              highlighted: false,
            },
          ].map((s) => (
            <article key={s.title} className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
              <div className="overflow-hidden rounded-xl">
                <img src={s.img} alt={s.title} className="h-56 w-full object-cover" />
              </div>
              <div className="px-2 py-5">
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: s.desc }} />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-block rounded-md px-5 py-2 text-sm font-semibold transition ${
                    s.highlighted
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Réserver
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            aria-label="Suivant"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-md transition hover:bg-brand-dark"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* AFFORDABLE — Des services de qualité au juste prix */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium text-brand">
              Solutions de nettoyage abordables
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Un service de qualité,
              <br /> à un prix juste
            </h2>
            <p className="mt-5 max-w-md text-sm text-slate-600">
              Nous proposons des prestations complètes, adaptées à votre besoin
              et à votre budget. Devis gratuit en moins de 24h.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Demander un devis
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={IMG.affordable} alt="Service de nettoyage" className="h-96 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* EXPERT TEAM */}
      <section id="equipe" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Un nettoyage efficace
            <br /> demande une équipe experte
          </h2>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-900">Notre équipe</p>
            <p className="text-sm text-slate-600">
              Des agents formés et motivés, encadrés par des superviseurs
              expérimentés, pour une propreté irréprochable au quotidien.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Aïcha Koffi", role: "Superviseure", img: IMG.team1 },
            { name: "Awa Diabaté", role: "Cheffe d'équipe", img: IMG.team2 },
            { name: "Fatou Diallo", role: "Agente senior", img: IMG.team3 },
          ].map((m, i) => (
            <article key={i} className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
              <div className="overflow-hidden rounded-xl">
                <img src={m.img} alt={m.name} className="h-64 w-full object-cover" />
              </div>
              <div className="px-2 py-5">
                <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
                <p className="text-xs text-slate-500">{m.role}</p>
                <div className="mt-2"><Stars /></div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Membre expérimentée de notre équipe, formée aux protocoles
                  d&rsquo;hygiène et au nettoyage de précision.
                </p>
                <div className="mt-4 flex gap-3 text-slate-400">
                  <a href="#" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="X">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M18.9 2H22l-7.6 8.7L23 22h-7.1l-5.5-7.2L4 22H1l8.1-9.3L1 2h7.3l5 6.6L18.9 2zm-2.5 18h2L7.7 4H5.6l10.8 16z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.8h-2.6v-4.5c0-1.1-.4-1.8-1.4-1.8s-1.6.7-1.8 1.4c-.1.3-.1.6-.1.9v4h-2.6V9.7h2.6v1.2c.4-.6 1-1.4 2.4-1.4 1.8 0 3.1 1.2 3.1 3.6v5.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WELCOME / ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img src={IMG.welcome} alt="Notre équipe en intervention" className="h-[440px] w-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Bienvenue chez
              <br /> Activ&rsquo;propreté !
            </h2>
            <p className="mt-5 max-w-md text-sm text-slate-600">
              Basée à Yamoussoukro, notre entreprise met son expertise au service
              des particuliers comme des professionnels. Satisfaction garantie.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4">
              {[
                "Agents formés et vérifiés",
                "Tarifs accessibles",
                "Disponible sous 24h",
                "Devis gratuit",
                "Produits adaptés",
                "Toute la Côte d'Ivoire",
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <Check />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Réserver
              </a>
              <a
                href="#contact"
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-brand py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium text-white/80">Nos tarifs</p>
            <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Choisissez la formule
              <br /> qui vous convient
            </h2>
            <div className="mt-8 inline-flex rounded-full bg-white p-1 text-sm font-medium">
              <button className="rounded-full bg-brand px-6 py-2 text-white">
                Mensuel
              </button>
              <button className="rounded-full px-6 py-2 text-slate-700">
                Annuel
              </button>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "FORMULE ESSENTIEL",
                price: "25 000",
                highlighted: false,
                features: [
                  "Dépoussiérage de toutes les surfaces",
                  "Balayage et lavage des sols",
                  "Aspirateur tapis et moquettes",
                  "Nettoyage cuisine standard",
                  "Nettoyage sanitaires",
                  "Vidage des poubelles",
                ],
              },
              {
                name: "FORMULE ENTREPRISE",
                price: "50 000",
                highlighted: true,
                features: [
                  "Tout l'Essentiel inclus",
                  "Désinfection approfondie",
                  "Nettoyage des appareils électroménagers",
                  "Vitrerie intérieure",
                  "Entretien des espaces communs",
                  "Intervention sous 24h",
                ],
              },
              {
                name: "FORMULE PREMIUM",
                price: "100 000",
                highlighted: false,
                features: [
                  "Tout l'Entreprise inclus",
                  "Grand ménage de printemps",
                  "Recommandé pour résidences haut de gamme",
                  "Organisation placards et rangements",
                  "Détachage canapés et tapis",
                  "Nettoyage piscines (option)",
                ],
              },
            ].map((p) => (
              <article
                key={p.name}
                className={`rounded-2xl p-7 shadow-lg ${
                  p.highlighted
                    ? "bg-brand-dark text-white ring-1 ring-white/20"
                    : "bg-white text-slate-900"
                }`}
              >
                <div
                  className={`text-sm font-semibold ${
                    p.highlighted ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {p.name}
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <div className="text-4xl font-bold">{p.price}</div>
                  <div
                    className={`text-sm ${
                      p.highlighted ? "text-white/70" : "text-slate-500"
                    }`}
                  >
                    FCFA / mois
                  </div>
                </div>
                <ul
                  className={`mt-6 space-y-3 text-sm ${
                    p.highlighted ? "text-white/90" : "text-slate-600"
                  }`}
                >
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                          p.highlighted ? "bg-white" : "bg-brand"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 block rounded-md py-2.5 text-center text-sm font-semibold transition ${
                    p.highlighted
                      ? "bg-white text-brand-dark hover:bg-slate-100"
                      : "bg-brand text-white hover:bg-brand-dark"
                  }`}
                >
                  Réserver
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Ce que nos clients
              <br /> disent de nous
            </h2>
            <p className="mt-5 max-w-md text-sm text-slate-600">
              Découvrez les témoignages de nos clients satisfaits, particuliers
              comme professionnels.
            </p>
            <div className="mt-8 flex gap-3">
              <button
                aria-label="Précédent"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Suivant"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <article className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
            <div className="flex items-start gap-5">
              <img
                src={IMG.testimonial}
                alt="Kouassi Yao"
                className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">Kouassi Yao</div>
                    <div className="text-xs text-slate-500">Directeur d&rsquo;hôtel</div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-brand">
                    <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v3a2 2 0 01-2 2v2c2.5 0 4-1.5 4-4V9a2 2 0 00-2-2zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v3a2 2 0 01-2 2v2c2.5 0 4-1.5 4-4V9a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <Stars />
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Service excellent ! L&rsquo;équipe est ponctuelle, sérieuse et
                  laisse nos chambres impeccables. Je recommande vivement
                  Activ&rsquo;propreté à tous les hôteliers de Yamoussoukro.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Conseils &amp; actualités
            <br /> de nos experts
          </h2>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-900">Notre blog</p>
            <p className="text-sm text-slate-600">
              Astuces de nettoyage, conseils d&rsquo;entretien et nouveautés sur
              les services Activ&rsquo;propreté.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Nettoyage écologique : nos pratiques pour préserver l'environnement",
              img: IMG.blog1,
              highlighted: false,
            },
            {
              title: "Comment maintenir la propreté entre deux interventions",
              img: IMG.blog2,
              highlighted: true,
            },
            {
              title: "Les avantages d'un nettoyage professionnel régulier",
              img: IMG.blog3,
              highlighted: false,
            },
          ].map((b, i) => (
            <article key={i} className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
              <div className="overflow-hidden rounded-xl">
                <img src={b.img} alt={b.title} className="h-56 w-full object-cover" />
              </div>
              <div className="px-2 py-5">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Activ&rsquo;propreté &nbsp;|&nbsp; 14 mars 2026
                </div>
                <h3 className="mt-3 text-base font-bold leading-snug text-slate-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Découvrez nos méthodes, nos produits et nos conseils pour
                  garder vos espaces sains et accueillants au quotidien.
                </p>
                <a
                  href="#"
                  className={`mt-5 inline-block rounded-md px-5 py-2 text-sm font-semibold transition ${
                    b.highlighted
                      ? "bg-brand text-white hover:bg-brand-dark"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Lire la suite
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Nous trouver
            </h2>
            <div className="mt-8 space-y-5">
              {[
                {
                  label: "Téléphone / WhatsApp",
                  value: PHONE_DISPLAY,
                  href: WHATSAPP,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  value: "contact@activproprete.ci",
                  href: "mailto:contact@activproprete.ci",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1 0 2 1 2 2v12c0 1-1 2-2 2H4c-1 0-2-1-2-2V6c0-1 1-2 2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 6L12 13 2 6" />
                    </svg>
                  ),
                },
                {
                  label: "Adresse",
                  value: "Yamoussoukro, Côte d'Ivoire",
                  href: undefined,
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
              ].map((c) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{c.label}</div>
                      <div className="text-sm text-slate-600">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block transition hover:opacity-80">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-900">Contactez-nous</p>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Restons en contact
            </h3>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              Une question, un devis, une intervention urgente ? Nous vous
              répondons dans la journée.
            </p>
            <form className="mt-7 space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-brand focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-brand focus:outline-none"
              />
              <textarea
                placeholder="Votre message"
                rows={4}
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark className="h-16 w-16 rounded-md bg-white p-1 object-contain" />
                <div className="text-[10px] uppercase tracking-wider text-slate-400">
                  Entreprise de nettoyage
                  <br />
                  à Yamoussoukro
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                Spécialiste du nettoyage professionnel à Yamoussoukro. Bureaux,
                hôtels, cliniques, résidences, écoles, banques et chantiers.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Entreprise</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-white">À propos</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#equipe" className="hover:text-white">Notre équipe</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Informations</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white">Conditions d&rsquo;utilisation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Newsletter</h4>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            2026 Activ&rsquo;propreté · Yamoussoukro · Côte d&rsquo;Ivoire · Tous droits réservés
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1ebe57]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1s-.7.9-.8 1.1c-.2.2-.3.2-.5.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.6-1.5-.9-2c-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3z" />
          <path d="M20.5 3.5A11.5 11.5 0 003.4 19l-1.4 5 5.2-1.4a11.5 11.5 0 0017.5-9.7 11.4 11.4 0 00-3.4-8.4zM12 21.5a9.5 9.5 0 01-4.8-1.3l-.4-.2-3.1.8.8-3-.2-.4a9.5 9.5 0 1116.7-6.3 9.5 9.5 0 01-9 10.4z" />
        </svg>
      </a>
    </>
  );
}
