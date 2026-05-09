/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

const WHATSAPP = "https://wa.me/2250707089160";
const PHONE_DISPLAY = "+225 07 07 08 91 60";

export const metadata: Metadata = {
  title: "Produits de nettoyage — Activ'propreté",
  description:
    "Vente de produits de nettoyage et d'entretien professionnels à Yamoussoukro : détergents, désinfectants, matériel et accessoires.",
};

const CATEGORIES = [
  {
    title: "Détergents & désinfectants",
    desc: "Produits multi-surfaces, dégraissants, désinfectants haute performance pour usages professionnels et domestiques.",
    img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Entretien des sols",
    desc: "Cires, décapants, protecteurs de sols pour carrelage, parquet, marbre et linoléum.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Produits sanitaires",
    desc: "Détartrants, gels WC, savons antibactériens et papier hygiénique en gros.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Matériel & accessoires",
    desc: "Balais, serpillières, chariots, raclettes, gants, microfibres et équipements de protection.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=900&auto=format&fit=crop&q=80",
  },
];

export default function ProduitsPage() {
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
            <a href="/produits" className="text-brand">Produits</a>
            <a href="/formation" className="hover:text-brand">Formation</a>
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
            Nos produits
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight lg:text-5xl">
            Produits de nettoyage
            <br /> et d&rsquo;entretien
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80">
            Activ&rsquo;propreté commercialise une gamme complète de produits
            professionnels pour les particuliers, entreprises, hôtels, cliniques
            et collectivités. Qualité éprouvée, prix accessibles, livraison à
            Yamoussoukro et partout en Côte d&rsquo;Ivoire.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-slate-100"
            >
              Demander un devis
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

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-brand">Notre gamme</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
            Des produits adaptés
            <br /> à chaque besoin
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Besoin d&rsquo;un produit spécifique ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
            Contactez-nous pour un devis personnalisé. Tarifs dégressifs pour les
            commandes professionnelles.
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
