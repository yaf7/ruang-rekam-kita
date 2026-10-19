import {
  FloatingHearts,
  ParticleCanvas,
  ScrollAnimator,
  Nav,
  GalleryCardClient,
  ScrollGallery,
} from "./components";

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <ParticleCanvas />
      <FloatingHearts />
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      {/* Navigation */}
      <Nav />

      <ScrollAnimator>
        {/* ==================== HERO SECTION ==================== */}
        <section className="hero-section" id="home">
          <div className="hero-title-wrapper">
            <h1 className="hero-title">
              Ruang Rekam
              <br />
              Kita
            </h1>
          </div>
          <p className="hero-subtitle">Kenangan yang tak akan pudar</p>
          <div className="hero-divider" />
          <p className="hero-tagline">
            Di antara puncak gunung dan langit senja, kita menemukan ruang yang
            hanya milik kita berdua. Setiap langkah, setiap tawa, setiap
            momen — terekam di sini, selamanya.
          </p>
          <div className="scroll-indicator">scroll</div>
        </section>

        {/* ==================== QUOTE BANNER ==================== */}
        <div className="quote-banner animate-on-scroll">
          <p className="quote-text">
            &ldquo;Setiap <span>puncak</span> yang kita capai bersama, bukan
            hanya tentang ketinggian — tapi tentang{" "}
            <span>kedalaman</span> yang kita bawa naik.&rdquo;
          </p>
        </div>

        {/* ==================== MAIN GALLERY ==================== */}
        <section className="section" id="galeri">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Momen Berdua</span>
            <h2 className="section-title">Galeri Kenangan</h2>
            <div className="section-divider" />
          </div>

          <div className="gallery-grid animate-on-scroll">
            <GalleryCardClient
              src="/foto/foto-kita-2.jpg"
              alt="Kita berdua di gunung saat senja"
              title="Senja di Puncak"
              caption="Cahaya terakhir hari itu, berdua"
              featured
            />
            <GalleryCardClient
              src="/foto/foto-kita-3.webp"
              alt="Kita berdua saat mendaki malam"
              title="Petualangan Malam"
              caption="Gelap yang justru membuat kita lebih dekat"
            />
            <GalleryCardClient
              src="/foto/foto-kita-1.jpg"
              alt="Bayangan kita berdua"
              title="Bayangan"
              caption="Bahkan siluet kita selalu berdampingan"
            />
          </div>
        </section>

        {/* ==================== RITA'S GALLERY ==================== */}
        <section className="section">
          <div className="gallery-row animate-on-scroll">
            <div className="gallery-row-header">
              <span className="gallery-row-icon">·</span>
              <h3 className="gallery-row-title">Rita</h3>
              <div className="gallery-row-line" />
            </div>
            <ScrollGallery>
              <GalleryCardClient
                src="/foto/foto-rita-1.JPG"
                alt="Rita di puncak gunung"
                title="Di Puncak"
                caption="Lebih tinggi dari awan"
              />
              <GalleryCardClient
                src="/foto/foto-rita-2.JPG"
                alt="Rita berpose"
                title="Jeda Sejenak"
                caption="Momen tenang di tengah perjalanan"
              />
              <GalleryCardClient
                src="/foto/foto-rita-3.JPG"
                alt="Rita saat pendakian"
                title="Langkah Demi Langkah"
                caption="Terus melangkah, terus naik"
              />
              <GalleryCardClient
                src="/foto/foto-rita-4.JPG"
                alt="Rita di jalur pendakian"
                title="Menikmati Perjalanan"
                caption="Bukan tentang sampai, tapi menikmati"
              />
              <GalleryCardClient
                src="/foto/foto-rita-5.JPG"
                alt="Rita dengan pemandangan"
                title="Di Atas Awan"
                caption="Antara langit dan bumi"
              />
            </ScrollGallery>
          </div>
        </section>

        {/* ==================== YAFA'S GALLERY ==================== */}
        <section className="section">
          <div className="gallery-row animate-on-scroll">
            <div className="gallery-row-header">
              <span className="gallery-row-icon">·</span>
              <h3 className="gallery-row-title">Yafa</h3>
              <div className="gallery-row-line" />
            </div>
            <ScrollGallery>
              <GalleryCardClient
                src="/foto/foto-yafa-1.JPG"
                alt="Yafa di jalur pendakian"
                title="Memimpin Jalan"
                caption="Selalu di depan, membuka jalan"
              />
              <GalleryCardClient
                src="/foto/foto-yafa-2.JPG"
                alt="Yafa istirahat"
                title="Ketenangan"
                caption="Tenang di setiap ketinggian"
              />
            </ScrollGallery>
          </div>
        </section>

        {/* ==================== TIMELINE ==================== */}
        <section className="section" id="perjalanan">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Jejak Langkah</span>
            <h2 className="section-title">Perjalanan</h2>
            <div className="section-divider" />
          </div>

          <div className="timeline animate-on-scroll">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-time">Awal</div>
                <div className="timeline-title">
                  Rencana yang Jadi Nyata
                </div>
                <div className="timeline-desc">
                  Dari obrolan santai &ldquo;kapan kita ke gunung?&rdquo;
                  akhirnya jadi rencana nyata. Kita siapkan segalanya
                  bersama, dari packing sampai mental.
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-time">Mendaki</div>
                <div className="timeline-title">
                  Langkah Demi Langkah
                </div>
                <div className="timeline-desc">
                  Setiap tanjakan terasa lebih ringan karena tidak
                  dilalui sendiri. Langkah demi langkah, bersama.
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-time">Malam</div>
                <div className="timeline-title">Pendakian Malam</div>
                <div className="timeline-desc">
                  Headlamp jadi satu-satunya cahaya. Di kegelapan itu,
                  justru kita makin dekat.
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-time">Puncak</div>
                <div className="timeline-title">Di Atas Segalanya</div>
                <div className="timeline-desc">
                  Sampai di puncak, dunia terasa milik berdua.
                  Angin dingin, pemandangan tanpa batas, dan momen
                  yang tak akan terlupakan.
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-time">Senja</div>
                <div className="timeline-title">Golden Hour</div>
                <div className="timeline-desc">
                  Senja dari puncak gunung. Langit berubah warna,
                  dan semua terasa tepat di momen itu.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== LOVE LETTER ==================== */}
        <section className="section" id="surat">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Dari Hati</span>
            <h2 className="section-title">Surat</h2>
            <div className="section-divider" />
          </div>

          <div className="love-letter-wrapper animate-on-scroll">
            <div className="love-letter">
              <p className="love-letter-text">
                Untuk kamu yang selalu jadi alasan terkuat untuk terus
                melangkah —
                <br />
                <br />
                Mendaki gunung bersamamu mengajarkanku banyak hal.
                Bahwa <em>perjalanan panjang</em> jadi terasa singkat kalau
                berdua. Bahwa <em>tanjakan paling curam</em> bisa dilalui
                selama kita saling genggam. Bahwa <em>puncak tertinggi</em>{" "}
                bukan tentang ketinggian, tapi tentang siapa yang ada di
                sampingmu saat kamu sampai.
                <br />
                <br />
                Kamu adalah pemandangan terindah yang pernah kutemui — bukan
                di puncak mana pun, tapi{" "}
                <em>di setiap langkah yang kita lalui bersama</em>.
                <br />
                <br />
                Terima kasih sudah jadi rumah di tengah perjalanan, jadi
                hangat di tengah dinginnya malam gunung, dan jadi alasan
                untuk selalu ingin pulang — kepadamu.
              </p>
              <div className="love-letter-signature">
                — Selamanya
              </div>
            </div>
          </div>
        </section>

        {/* ==================== QUOTE BANNER 2 ==================== */}
        <div className="quote-banner animate-on-scroll">
          <p className="quote-text">
            &ldquo;Aku tidak butuh puncak tertinggi, selama di puncak mana
            pun, kamu ada di <span>sampingku</span>.&rdquo;
          </p>
        </div>

        {/* ==================== FOOTER ==================== */}
        <footer className="footer">
          <p className="footer-text">
            Ruang Rekam Kita
          </p>
          <p className="footer-date">
            Terekam, untuk selamanya
          </p>
        </footer>
      </ScrollAnimator>
    </>
  );
}
