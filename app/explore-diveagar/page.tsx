import Image from 'next/image';
import { Anchor, Camera, Landmark, Sailboat, Shell, Waves } from 'lucide-react';
import { CtaBand } from '@/components/cta';
import { images, pageMetadata } from '@/lib/site-data';

export const metadata = pageMetadata(
  'Explore Diveagar',
  'Diveagar beach, fishing settlement, turtle festival season, Murud-Janjira Fort, coastal drives, temples and nearby activities around Betelnut Resort.',
  '/explore-diveagar'
);

const experiences = [
  {
    title: 'Diveagar Beach',
    text: 'The current site presents Diveagar as a golden-sand beach destination and a weekend getaway on the Konkan strip.',
    icon: Waves
  },
  {
    title: 'Fishing Settlement',
    text: 'Explore the local fishing settlement at the northern end of the beach.',
    icon: Anchor
  },
  {
    title: 'Turtle Festival Season',
    text: 'The existing copy mentions annual turtle festival season and migratory seabirds near the southern end of the beach.',
    icon: Shell
  },
  {
    title: 'Murud-Janjira Fort',
    text: 'Plan a day trip to the historic sea fort by ferry from the region.',
    icon: Landmark
  },
  {
    title: 'Coastal Drive',
    text: 'The road toward Shrivardhan is described as a scenic drive with sunset viewpoints.',
    icon: Camera
  },
  {
    title: 'Seasonal Water Sports',
    text: 'Jet ski, banana boat, parasailing and dolphin-watching cruises are described as local options, not guaranteed resort-operated activities.',
    icon: Sailboat
  }
];

export default function ExploreDiveagarPage() {
  return (
    <>
      <section className="section">
        <div className="container section-head">
          <p className="eyebrow">Explore Diveagar</p>
          <h1>A beach getaway with temples, fort trips and coastal nature.</h1>
          <p className="lead">
            Diveagar’s appeal is its slower coastal rhythm: beach walks, local settlements, temple visits, seasonal wildlife, water
            sports and ferry trips to historic places around the Raigad coast.
          </p>
        </div>
      </section>

      <section className="section compact band">
        <div className="container split">
          <div className="media tall">
            <Image src={images.beach} alt="Diveagar beach near Betelnut Resort" fill priority sizes="(max-width: 980px) 100vw, 50vw" />
          </div>
          <div className="section-head">
            <p className="eyebrow">A Perfect Weekend Getaway</p>
            <h2>Three to four hours from Pune and Mumbai.</h2>
            <p className="lead">
              The current website describes Diveagar as an ideal Konkan getaway around 3 to 4 hours from Pune and Mumbai, known after
              the discovery of a golden mask of Lord Ganesha and located at one end of the triple Raigad beaches.
            </p>
            <p className="form-note">
              Exact travel time varies by starting point, route and season. Beach distance and “beachfront” wording should be confirmed
              before being used in prominent marketing copy.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid three">
          {experiences.map(({ title, text, icon: Icon }) => (
            <article className="card facility-card" key={title}>
              <div className="card-body">
                <Icon size={28} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="container section-head">
          <p className="eyebrow">Temple Run</p>
          <h2>Roop Narayan Mandir and Suvarna Ganesh Mandir.</h2>
          <p className="lead">
            The existing site highlights Roop Narayan Mandir for its 13th-century connection and Vishnu sculpture, and Suvarna Ganesh
            Mandir for its gold Ganesha sculpture. Visitors should check local timings before travelling.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
