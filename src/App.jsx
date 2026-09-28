import {
  PROFIL,
  PENGALAMAN,
  KEAHLIAN,
  SERTIFIKAT,
  PENDIDIKAN,
  PENCAPAIAN,
} from "./data.js";

export default function App() {
  return (
    <>
      <nav>
        <div className="inner">
          <span className="brand">{PROFIL.nama}</span>
          <ul>
            <li><a href="#pengalaman">Experience</a></li>
            <li><a href="#keahlian">Skills</a></li>
            <li><a href="#sertifikat">Training</a></li>
            <li><a href="#kontak">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* ================= HEADER ================= */}
        <header className="hero">
          <div className="wrap">
            <h1>{PROFIL.nama}</h1>
            <p className="jabatan">{PROFIL.jabatan}</p>
            <p className="ringkas">{PROFIL.ringkas}</p>
            <div className="baris">
              <span>{PROFIL.lokasi}</span>
              <a href={`mailto:${PROFIL.email}`}>{PROFIL.email}</a>
              <a href={PROFIL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </header>

        {/* ================= EXPERIENCE ================= */}
        <section id="pengalaman">
          <div className="wrap">
            <h2>Work Experience</h2>
            <div className="kerja">
              {PENGALAMAN.map((p) => (
                <div className="item" key={p.perusahaan + p.mulai}>
                  <div className="head">
                    <h3>{p.jabatan}</h3>
                    <span className="waktu">{p.mulai} - {p.selesai}</span>
                  </div>
                  <p className="perusahaan">
                    {p.perusahaan} <span className="lokasi">| {p.lokasi}</span>
                  </p>
                  <ul>
                    {p.poin.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="keahlian">
          <div className="wrap">
            <h2>Technical Expertise</h2>
            <div className="skills">
              {KEAHLIAN.map((k) => (
                <div key={k.judul}>
                  <h3>{k.judul}</h3>
                  <ul>
                    {k.item.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EQUIPMENT ================= */}
        <section>
          <div className="wrap">
            <h2>Equipment and Systems Operated</h2>
            <ul className="daftar">
              {PENCAPAIAN.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= CERTIFICATES ================= */}
        <section id="sertifikat">
          <div className="wrap">
            <h2>Training and Certification</h2>
            <ul className="certs">
              {SERTIFIKAT.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section>
          <div className="wrap">
            <h2>Education</h2>
            <ul className="daftar">
              {PENDIDIKAN.map((e) => (
                <li key={e.sekolah}>
                  {e.sekolah}, {e.lokasi} ({e.tahun})
                </li>
              ))}
              <li>Languages: {PROFIL.bahasa.join(", ")}</li>
            </ul>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="kontak" style={{ borderBottom: "none" }}>
          <div className="wrap kontak">
            <h2>Contact</h2>
            <p>Open to DCS and control room operator roles, both domestic and international.</p>
            <div className="baris">
              <span>Email: <a href={`mailto:${PROFIL.email}`}>{PROFIL.email}</a></span>
              <span>LinkedIn: <a href={PROFIL.linkedin} target="_blank" rel="noreferrer">{PROFIL.linkedin.replace("https://", "")}</a></span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          {PROFIL.nama}, {PROFIL.jabatan}
        </div>
      </footer>
    </>
  );
}
