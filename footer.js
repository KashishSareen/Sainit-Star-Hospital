const footer = document.querySelector('.footer');

footer.innerHTML = `
<footer style="background: linear-gradient(160deg, #0a1c34 0%, #0D2240 50%, #0f2a4a 100%); position: relative; overflow: hidden;" class="pt-14 pb-6">
  
  <!-- Gold top accent line -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #D4AF37, #f0da8a, #D4AF37);"></div>

  <!-- Decorative background circles -->
  <div style="position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%); border-radius: 50%;"></div>
  <div style="position: absolute; bottom: -80px; left: -80px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%); border-radius: 50%;"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index: 10;">
    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
      
      <!-- Column 1 - Logo + Info -->
      <div>
        <div style="background: white; border-radius: 12px; padding: 6px 10px; display: inline-flex; margin-bottom: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
          <img src="/images/Sainitlogo.jpg" alt="logo" class="h-12" />
        </div>

        <p class="text-sm leading-relaxed" style="color: #c5d0dd;">
          Ground Floor, New Link Rd, near Oshiwara Depot,<br />
          Andheri West 400104<br />
          Mumbai, Maharashtra
        </p>

        <div class="mt-4 text-sm" style="color: #c5d0dd;">
          <p>
            <span class="font-semibold" style="color: #D4AF37;">Phone:</span>
            <a href="tel:+919167916660" class="transition hover:underline" style="color: #e8edf3;">
              +91 91679 16660
            </a>
          </p>
          <p class="mt-2">
            <span class="font-semibold" style="color: #D4AF37;">Email:</span>
            <a href="mailto:care@sainitstarhospital.com" class="transition hover:underline" style="color: #e8edf3;">
              care@sainitstarhospital.com
            </a>
          </p>
        </div>

        <!-- Social Media Links -->
        <div class="mt-6">
          <h4 class="text-sm font-semibold mb-3" style="color: #D4AF37; letter-spacing: 0.05em;">FOLLOW US</h4>
          <div class="flex gap-3">
            <a href="https://wa.me/919167916660" target="_blank"
              class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style="background: rgba(212,175,55,0.15); color: #D4AF37; border: 1px solid rgba(212,175,55,0.3);">
              <i class="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="https://www.instagram.com/sainit_star_hospital/" target="_blank"
              class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style="background: rgba(212,175,55,0.15); color: #D4AF37; border: 1px solid rgba(212,175,55,0.3);">
              <i class="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Column 2 - Useful Links -->
      <div>
        <h3 class="text-lg font-bold mb-5 relative inline-block" style="color: #D4AF37; letter-spacing: 0.04em;">
          USEFUL LINKS
          <span style="display: block; width: 40px; height: 2px; background: linear-gradient(90deg, #D4AF37, transparent); margin-top: 6px; border-radius: 2px;"></span>
        </h3>
        <ul class="space-y-3 text-sm" style="color: #c5d0dd;">
          <li>
            <a href="./index.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Home
            </a>
          </li>
          <li>
            <a href="./index.html#about" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> About us
            </a>
          </li>
          <li>
            <a href="./index.html#services" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Services
            </a>
          </li>
          <li>
            <a href="./index.html#contact" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Contact
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/Sainit+Star+Multispeciality+Hospital/@19.1526116,72.835942,17z" target="_blank"
              class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Google Profile
            </a>
          </li>
        </ul>
      </div>

      <!-- Column 3 - Services -->
      <div>
        <h3 class="text-lg font-bold mb-5 relative inline-block" style="color: #D4AF37; letter-spacing: 0.04em;">
          OUR SERVICES
          <span style="display: block; width: 40px; height: 2px; background: linear-gradient(90deg, #D4AF37, transparent); margin-top: 6px; border-radius: 2px;"></span>
        </h3>
        <ul class="space-y-3 text-sm" style="color: #c5d0dd;">
          <li>
            <a href="./Emergency.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> 24/7 Emergency &amp; Trauma Care
            </a>
          </li>
          <li>
            <a href="./Diagnostics.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Advanced Diagnostic Services
            </a>
          </li>
          <li>
            <a href="./Cardiology.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Cardiology
            </a>
          </li>
          <li>
            <a href="./Cosmetology.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Cosmetology
            </a>
          </li>
          <li>
            <a href="./Dentistry.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Dentistry
            </a>
          </li>
          <li>
            <a href="./Diabetology.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Diabetology
            </a>
          </li>
          <li>
            <a href="./ENT.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> ENT
            </a>
          </li>
          <li>
            <a href="./Laparoscopic.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> General &amp; Laparoscopic Surgery
            </a>
          </li>
        </ul>
      </div>

      <!-- Column 4 - More Services -->
      <div>
        <h3 class="text-lg font-bold mb-5 relative inline-block" style="color: #D4AF37; letter-spacing: 0.04em;">
          MORE SERVICES
          <span style="display: block; width: 40px; height: 2px; background: linear-gradient(90deg, #D4AF37, transparent); margin-top: 6px; border-radius: 2px;"></span>
        </h3>
        <ul class="space-y-3 text-sm" style="color: #c5d0dd;">
          <li>
            <a href="./Medicine.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> General Medicine
            </a>
          </li>
          <li>
            <a href="./Physician.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> General Physician
            </a>
          </li>
          <li>
            <a href="./Surgery.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> General Surgery
            </a>
          </li>
          <li>
            <a href="./Gynaecology.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Gynaecology
            </a>
          </li>
          <li>
            <a href="./Orthopedics.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Orthopedics &amp; Joint Care
            </a>
          </li>
          <li>
            <a href="./Pediatric.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Pediatric Care
            </a>
          </li>
          <li>
            <a href="./Physiotherapy.html" class="flex items-center gap-2 transition-all duration-200 hover:translate-x-1" style="color: #c5d0dd;">
              <i class="fas fa-chevron-right text-xs" style="color: #D4AF37;"></i> Physiotherapy
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Line -->
    <div class="mt-12 pt-6 text-center" style="border-top: 1px solid rgba(212,175,55,0.25);">
      <p class="text-sm" style="color: rgba(197,208,221,0.7);">
        &copy; 2026 Sainit Star Multispeciality Hospital. All rights reserved. &nbsp;|&nbsp;
        <span style="color: #D4AF37;">Designed &amp; developed by ReferIndia</span>
      </p>
    </div>
  </div>
</footer>`;