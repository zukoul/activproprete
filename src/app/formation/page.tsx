/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

const WHATSAPP = "https://wa.me/2250707089160";
const PHONE_DISPLAY = "+225 07 07 08 91 60";

export const metadata: Metadata = {
  title: "Formation propreté & hygiène — Activ'propreté",
  description:
    "Formations professionnelles en propreté et hygiène à Yamoussoukro : protocoles de nettoyage, hygiène en milieu sensible, sécurité au travail.",
};

const PROGRAMMES = [
  {
    title: "Hygiène & nettoyage de base",
    duration: "2 jours",
    desc: "Bonnes pratiques, produits, dosage, sécurité des manipulations. Idéal pour agents débutants ou personnel d'entreprise.",
  },
  {
    title: "Protocoles en milieu sensible",
    duration: "3 jours",
    desc: "Hôpitaux, cliniques, laboratoires. Bionettoyage, désinfection, gestion des biocontaminations.",
  },
  {
    title: "Hygiène hôtelière",
    duration: "2 jours",
    desc: "Standards hôteliers, traitement des chambres, espaces communs, blanchisserie. Adapté aux équipes des structures touristiques.",
  },
  {
    title: "Encadrement & supervision",
    duration: "5 jours",
    desc: "Pour chefs d'équipe : planification, contrôle qualité, management d'équipe, relation client.",
  },
];

const BENEFITS = [
  "Formateurs certifiés et expérimentés",
  "Contenu théorique + pratique sur site",
  "Attestation de formation délivrée",
  "Sessions inter ou intra-entreprise",
  "Programmes adaptés à votre secteur",
  "Suivi post-formation inclus",
];

export default function FormationPage() {
  return (
    <>
      {/* HEADER */}
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Activ'propreté" className="h-16 w-16 object-contain" />
            <div className="hidden text-[10px] uppercase tracking-wider text-slate-500 sm:block">
              Entreprise de nettoyage
              <br />
              à Yamoussoukro
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="/" className="hover:text-brand">Accueil</a>
            <a href="/#services" className="hover:text-brand">Services</a>
            <a href="/produits" className="hover:text-brand">Produits</a>
            <a href="/formation" className="text-brand">Formation</a>
            <a href="/#equipe" className="hover:text-brand">Équipe</a>
            <a href="/#contact" className="hover:text-brand">Contact</a>
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
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-sm font-medium text-white/70">
            Nos formations
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">
            Formation propreté
            <br /> et hygiène
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80">
            Activ&rsquo;propreté forme vos agents et collaborateurs aux meilleures
            pratiques d&rsquo;hygiène et de nettoyage. Programmes adaptés aux
            entreprises, hôtels, cliniques et collectivités, animés par des
            formateurs expérimentés.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-slate-100"
            >
              S&rsquo;inscrire à une session
            </a>
            <a
              href="/#contact"
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-brand">Programmes</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Nos modules
            <br /> de formation
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PROGRAMMES.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {p.duration}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium text-brand">Pourquoi nous</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                Une formation
                <br /> qui fait la différence
              </h2>
              <p className="mt-5 max-w-md text-sm text-slate-600">
                Nos sessions allient théorie et pratique, sur des cas réels,
                pour que vos équipes appliquent immédiatement ce qu&rsquo;elles
                apprennent.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-slate-700 shadow-sm"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Prêt à former vos équipes ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
            Contactez-nous pour un programme sur mesure adapté à votre activité
            et au niveau de vos collaborateurs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              WhatsApp / {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm">
          © {new Date().getFullYear()} Activ&rsquo;propreté — Une activité du groupe Agiref.
          <br />
          <a href="/" className="mt-2 inline-block text-slate-400 hover:text-white">
            ← Retour à l&rsquo;accueil
          </a>
        </div>
      </footer>
    </>
  );
}
