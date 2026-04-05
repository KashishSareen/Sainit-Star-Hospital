const footer = document.querySelector('.footer');

footer.innerHTML = `   <footer
      class="bg-white border-t border-teal-100 pt-12 pb-6 relative overflow-hidden"
    >
      <!-- Decorative Gradient Element -->
      <div
        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          <!-- Column 1 - Logo + Info -->
          <div>
            <img src="/images/starlogo.jpg" alt="logo" class="h-12 mb-4" />

            <p class="text-sm text-gray-600 leading-relaxed">
              Ground Floor, New Link Rd, near Oshiwara Depot,<br />
              Patliputra, Goregaon West 400104<br />
              Mumbai, Maharashtra
            </p>

            <div class="mt-4 text-sm text-gray-700">
              <p>
                <span class="font-semibold">Phone:</span>
                <a
                  href="tel:+919167916660"
                  class="text-teal-600 hover:text-teal-700 transition"
                >
                  +91 91679 16660
                </a>
              </p>
              <p class="mt-2">
                <span class="font-semibold">Email:</span>
                <a
                  href="mailto:care@sainitstarhospital.com"
                  class="text-teal-600 hover:text-teal-700 transition"
                >
                  care@sainitstarhospital.com
                </a>
              </p>
            </div>

            <!-- Social Media Links -->
            <div class="mt-6">
              <h4 class="text-sm font-semibold text-gray-800 mb-3">
                Follow Us
              </h4>
              <div class="flex gap-3">
          
              <a
  href="https://wa.me/919167916660"
  target="_blank"
  class="w-9 h-9 rounded-full bg-teal-100 hover:bg-teal-600 text-teal-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
>
  <i class="fab fa-whatsapp text-2xl"></i>
</a>
                <a
                  href="https://www.instagram.com/sainit_star_hospital/"
                  class="w-9 h-9 rounded-full bg-teal-100 hover:bg-teal-600 text-teal-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <i class="fab fa-instagram text-2xl"></i>
                </a>
                    
              </div>
            </div>
          </div>

          <!-- Column 2 - Useful Links -->
          <div>
            <h3
              class="text-lg font-semibold text-gray-800 mb-4 relative inline-block"
            >
              Useful Links
              <!-- <span class="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 rounded-full mt-1"></span> -->
            </h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="./index.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Home</a
                >
              </li>
              <li>
                <a
                  href="./index.html#about"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  About us</a
                >
              </li>
              <li>
                <a
                  href="./index.html#services"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Services</a
                >
              </li>
              <li>
                <a
                  href="./index.html#contact"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Contact</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Sainit+Star+Multispeciality+Hospital/@19.1526116,72.835942,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b700264bc63d:0x68853bb098a81547!8m2!3d19.1526116!4d72.835942!16s%2Fg%2F11ms45_02t?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
                  class="hover:text-teal-600 transition flex items-center gap-2" target="_blank"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Google Profile</a
                >
              </li>
            </ul>
          </div>

          <!-- Column 3 - Services -->
          <div>
            <h3
              class="text-lg font-semibold text-gray-800 mb-4 relative inline-block"
            >
              Our Services
              <!-- <span class="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 rounded-full mt-1"></span> -->
            </h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="./Emergency.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  24/7 Emergency & Trauma Care</a
                >
              </li>
              <li>
                <a
                  href="./Diagnostics.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Advanced Diagnostic Services</a
                >
              </li>
              <li>
                <a
                  href="./Cardiology.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Cardiology</a
                >
              </li>
              <li>
                <a
                  href="./Cosmetology.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Cosmetology</a
                >
              </li>
              <li>
                <a
                  href="./Dentistry.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Dentistry</a
                >
              </li>
              <li>
                <a
                  href="./Diabetology.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Diabetology</a
                >
              </li>
              <li>
                <a
                  href="./ENT.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  ENT</a
                >
              </li>
              <li>
                <a
                  href="./Laparoscopic.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  General & Laparoscopic Surgery</a
                >
              </li>
            </ul>
          </div>

          <!-- Column 4 - More Services -->
          <div>
            <h3
              class="text-lg font-semibold text-gray-800 mb-4 relative inline-block"
            >
              More Services
              <!-- <span class="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 rounded-full mt-1"></span> -->
            </h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="./Medicine.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  General Medicine</a
                >
              </li>
              <li>
                <a
                  href="./Physician.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  General Physician</a
                >
              </li>
              <li>
                <a
                  href="./Surgery.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  General Surgery</a
                >
              </li>
              <li>
                <a
                  href="./Gynaecology.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Gynaecology</a
                >
              </li>
           
              <li>
                <a
                  href="./Orthopedics.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Orthopedics & Joint Care</a
                >
              </li>
              <li>
                <a
                  href="./Pediatric.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Pediatric Care</a
                >
              </li>
              <li>
                <a
                  href="./Physiotherapy.html"
                  class="hover:text-teal-600 transition flex items-center gap-2"
                  ><i class="fas fa-chevron-right text-teal-500 text-xs"></i>
                  Physiotherapy</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Line -->
        <div class="border-t border-teal-100 mt-10 pt-6 text-center">
          <p class="text-sm text-teal-600">
            Designed & developed by ReferIndia
          </p>
        </div>
      </div>
    </footer>`