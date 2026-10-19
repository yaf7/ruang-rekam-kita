import {
  FloatingHearts,
  ParticleCanvas,
  ScrollAnimator,
  Nav,
  GalleryCardClient,
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



        {/* ==================== MAIN GALLERY — MASONRY ==================== */}
        <section className="section" id="galeri">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Momen Berdua</span>
            <h2 className="section-title">Galeri Kenangan</h2>
            <div className="section-divider" />
          </div>

          <div className="masonry-gallery animate-on-scroll">
            <div className="masonry-item masonry-tall">
              <GalleryCardClient
                src="/foto/foto-kita-2.jpg"
                alt="Kita berdua di gunung saat senja"
                title="Senja di Puncak"
                caption="Cahaya terakhir hari itu, berdua"
              />
            </div>
            <div className="masonry-item masonry-short">
              <GalleryCardClient
                src="/foto/foto-kita-3.webp"
                alt="Kita berdua saat mendaki malam"
                title="Petualangan Malam"
                caption="Gelap yang justru membuat kita lebih dekat"
              />
            </div>
            <div className="masonry-item masonry-medium">
              <GalleryCardClient
                src="/foto/foto-kita-1.jpg"
                alt="Bayangan kita berdua"
                title="Bayangan"
                caption="Bahkan siluet kita selalu berdampingan"
              />
            </div>
          </div>
        </section>

        {/* ==================== RITA — EDITORIAL GRID ==================== */}
        <section className="section">
          <div className="editorial-section animate-on-scroll">
            <div className="editorial-header">
              <div className="editorial-line" />
              <h3 className="editorial-name">Rita</h3>
              <div className="editorial-line" />
            </div>
            <div className="editorial-grid">
              <div className="editorial-item editorial-item-large">
                <GalleryCardClient
                  src="/foto/foto-rita-1.JPG"
                  alt="Rita di puncak gunung"
                  title="Di Puncak"
                  caption="Lebih tinggi dari awan"
                />
              </div>
              <div className="editorial-item">
                <GalleryCardClient
                  src="/foto/foto-rita-2.JPG"
                  alt="Rita berpose"
                  title="Jeda Sejenak"
                  caption="Momen tenang di tengah perjalanan"
                />
              </div>
              <div className="editorial-item">
                <GalleryCardClient
                  src="/foto/foto-rita-3.JPG"
                  alt="Rita saat pendakian"
                  title="Langkah Demi Langkah"
                  caption="Terus melangkah, terus naik"
                />
              </div>
              <div className="editorial-item editorial-item-wide">
                <GalleryCardClient
                  src="/foto/foto-rita-4.JPG"
                  alt="Rita di jalur pendakian"
                  title="Menikmati Perjalanan"
                  caption="Bukan tentang sampai, tapi menikmati"
                />
              </div>
              <div className="editorial-item">
                <GalleryCardClient
                  src="/foto/foto-rita-5.JPG"
                  alt="Rita dengan pemandangan"
                  title="Di Atas Awan"
                  caption="Antara langit dan bumi"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== YAFA — SIDE BY SIDE ==================== */}
        <section className="section">
          <div className="editorial-section animate-on-scroll">
            <div className="editorial-header">
              <div className="editorial-line" />
              <h3 className="editorial-name">Yafa</h3>
              <div className="editorial-line" />
            </div>
            <div className="duo-grid">
              <div className="duo-item">
                <GalleryCardClient
                  src="/foto/foto-yafa-1.JPG"
                  alt="Yafa di jalur pendakian"
                  title="Memimpin Jalan"
                  caption="Selalu di depan, membuka jalan"
                />
              </div>
              <div className="duo-item">
                <GalleryCardClient
                  src="/foto/foto-yafa-2.JPG"
                  alt="Yafa istirahat"
                  title="Ketenangan"
                  caption="Tenang di setiap ketinggian"
                />
              </div>
            </div>
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



        {/* ==================== FOOTER ==================== */}
        <footer className="footer">
          <p className="footer-text">
            Ruang Rekam Kita
          </p>
          <p className="footer-date">
            Developed by Deyafa Arsetya
          </p>
        </footer>
      </ScrollAnimator>
    </>
  );
}
