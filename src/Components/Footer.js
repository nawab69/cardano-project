import React from 'react'

function Footer() {
  return (
    <React.Fragment>
      <footer id='footer'>
        <div className='container'></div>
      </footer>

      <a
        href='#'
        className='back-to-top d-flex align-items-center justify-content-center'
      >
        <i className='bi bi-arrow-up-short'></i>
      </a>

      <script
        src='../assets/vendor/purecounter/purecounter_vanilla.js'
        async
      ></script>
      <script src='../assets/vendor/aos/aos.js' async></script>
      <script
        src='../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
        async
      ></script>
      <script
        src='../assets/vendor/glightbox/js/glightbox.min.js'
        async
      ></script>
      <script
        src='../assets/vendor/isotope-layout/isotope.pkgd.min.js'
        async
      ></script>
      <script src='../assets/vendor/swiper/swiper-bundle.min.js' async></script>
      <script src='../assets/vendor/typed.js/typed.min.js' async></script>
      <script
        src='../assets/vendor/waypoints/noframework.waypoints.js'
        async
      ></script>
      <script src='../assets/vendor/php-email-form/validate.js' async></script>

      <script src='../assets/js/main.js' async></script>

      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
        crossorigin='anonymous'
      ></link>
    </React.Fragment>
  )
}

export default Footer
