<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="app-shell">
    <header class="main-header">
      <div class="header-inner">
        <div class="brand">
          <h1>Espacio Nagare</h1>
          <p>Shorin Ryu Shin Shun Kan &middot; Puerto Madryn</p>
        </div>
        <nav class="main-nav">
          <ul>
            <li class="has-submenu">
              <a href="#historia">Historia</a>
              <ul class="submenu">
                <li><a href="#nuestro-dojo">Nuestro dojo</a></li>
                <li><a href="#karate-okinawense">El karate okinawense</a></li>
              </ul>
            </li>
            <li><a href="#disciplina">Disciplina</a></li>
            <li><a href="#katas">Katas</a></li>
            <li><a href="#fotos">Fotos</a></li>
            <li><a href="#horarios">Horarios</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section id="historia" class="panel hero">
        <div>
          <p class="eyebrow">Tradicion okinawense</p>
          <h2>Historia viva del Shorin Ryu</h2>
          <p>
            Espacio Nagare mantiene la linea tecnica del maestro Roberto Miyashiro dentro de la escuela
            Shin Shun Kan. Nuestro dojo honra el legado de los pioneros del karate okinawense en la Patagonia.
          </p>
        </div>
      </section>

      <section id="nuestro-dojo" class="panel two-column">
        <article>
          <h3>Nuestro dojo</h3>
          <p>
            Un espacio sobrio, respetuoso y silencioso donde cada alumno puede entrenar a su ritmo.
            Valoramos la convivencia, el saludo sincero y el trabajo constante sobre kihon, kata y kumite
            tradicional para construir caracter.
          </p>
        </article>
        <article>
          <h3>Sensei</h3>
          <p>
            El sensei Roberto Miyashiro dirige la sede Puerto Madryn, compartiendo decadas de practica directa
            con los maestros de Okinawa y transmitiendo la esencia del estilo con paciencia y disciplina.
          </p>
        </article>
      </section>

      <section id="karate-okinawense" class="panel">
        <h3>El karate okinawense</h3>
        <p>
          La escuela recibe la influencia directa de Shorin Ryu: posturas naturales, defensa circular y
          maxima eficiencia en cada tecnica. Conservamos los valores del budo, utilizando el entrenamiento
          como via para pulir el espiritu y fortalecer el cuerpo.
        </p>
      </section>

      <section id="disciplina" class="panel two-column">
        <div>
          <h3>Disciplina</h3>
          <p>
            La practica diaria incluye meditacion corta, repaso de etiqueta y estudio de principios como
            makoto (sinceridad) y chinkuchi (control total del cuerpo).
          </p>
        </div>
        <ul class="rules">
          <li>Respeto absoluto dentro y fuera del tatami.</li>
          <li>Cuidado del uniforme y del espacio comun.</li>
          <li>Puntualidad y compromiso con los companeros.</li>
          <li>Escuchar y responder siempre con &ldquo;oss&rdquo;.</li>
        </ul>
      </section>

      <section id="katas" class="panel">
        <h3>Katas fundamentales</h3>
        <div class="kata-grid">
          <article>
            <h4>Fukyugata Ichi / Ni</h4>
            <p>Primer contacto con la linea tecnica, enfasis en respiracion y desplazamientos lineales.</p>
          </article>
          <article>
            <h4>Pinan Shodan / Nidan / Sandan / Yondan / Godan</h4>
            <p>Secuencia estrategica que desarrolla vision lateral, cambios de ritmo y control de distancia.</p>
          </article>
          <article>
            <h4>Naihanchi Shodan / Nidan</h4>
            <p>Trabajo interno, cadera estable y defensa a corta distancia.</p>
          </article>
          <article>
            <h4>Kusanku / Passai / Gojushiho</h4>
            <p>Kata avanzados que integran todo el sistema de Shorin Ryu y su energia explosiva.</p>
          </article>
        </div>
      </section>

      <section id="fotos" class="panel gallery">
        <h3>Momentos del dojo</h3>
        <p>Entrenamientos, seminarios y viajes a Okinawa que inspiran nuestra practica diaria.</p>
        <div class="photo-grid">
          <div class="photo-card">Entrenamiento diario</div>
          <div class="photo-card">Seminario con sensei Miyashiro</div>
          <div class="photo-card">Examenes de grado</div>
          <div class="photo-card">Practica al aire libre</div>
        </div>
      </section>

      <section id="horarios" class="panel schedule">
        <h3>Horarios</h3>
        <table>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Adultos</th>
              <th>Infantiles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lunes y Miercoles</td>
              <td>20:00 - 21:30</td>
              <td>18:30 - 19:30</td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>19:30 - 21:00</td>
              <td>18:00 - 19:00</td>
            </tr>
            <tr>
              <td>Sabado (practica abierta)</td>
              <td colspan="2">10:00 - 12:00</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-content">
        <div>
          <h4>Conecta con Espacio Nagare</h4>
          <p>Seguinos para conocer novedades, seminarios y vivencias del dojo.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/shinshukan.puertomadryn" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/karate.shinshukan.puertomadryn/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
        <div class="map-wrapper">
          <iframe
            title="Ubicacion Espacio Nagare"
            src="https://www.google.com/maps?q=Espacio+Nagare+Puerto+Madryn&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <a class="map-link" href="https://maps.app.goo.gl/cpFsoNtV1qYiQ52H6" target="_blank" rel="noreferrer">
            Abrir en Google Maps
          </a>
        </div>
      </div>
      <p class="footer-note">&copy; {{ currentYear }} Espacio Nagare &middot; Shin Shun Kan Puerto Madryn</p>
    </footer>
  </div>
</template>
