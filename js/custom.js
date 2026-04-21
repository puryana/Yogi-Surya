(function ($) {
  
  "use strict";

    // 1. MENU MOBILE COLLAPSE
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // 2. CUSTOM LINK SMOOTH SCROLL
    $('.smoothscroll').click(function(e){
      e.preventDefault();
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').outerHeight() || 75; // Memastikan tinggi navbar terbaca dengan benar
  
      if(elWrapped.length) {
        var offsetTop = elWrapped.offset().top;
        var totalScroll = offsetTop - header_height;
  
        $('body,html').animate({
          scrollTop: totalScroll
        }, 500); // Waktu scroll dibuat 500ms agar lebih elegan
      }
    });

    // 3. ANIMASI TIMELINE (Diperbaiki agar Ultra-Smooth)
    $(window).on('scroll', function() {
      var timelineContainer = $('#vertical-scrollable-timeline');
      
      // Jalankan hanya jika elemen timeline ada di halaman
      if (timelineContainer.length) {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        // Titik pemicu (trigger point) adalah bagian tengah layar
        var triggerPoint = scrollTop + (windowHeight * 0.5);
        
        var timelineOffset = timelineContainer.offset().top;
        var timelineHeight = timelineContainer.height();
        
        // Hitung tinggi garis progres yang seharusnya
        var progressHeight = triggerPoint - timelineOffset;
        
        // Batasi agar garis tidak tembus ke atas atau ke bawah
        if (progressHeight < 0) progressHeight = 0;
        if (progressHeight > timelineHeight) progressHeight = timelineHeight;
        
        // Terapkan tinggi ke garis progres biru secara real-time
        timelineContainer.find('.inner').css('height', progressHeight + 'px');
        
        // Cek setiap item (li) untuk menyalakan ikon jika dilewati garis
        timelineContainer.find('li').each(function() {
          var itemOffset = $(this).offset().top;
          
          // Jika garis sudah mencapai atau melewati ikon ini, nyalakan!
          if (triggerPoint >= itemOffset) {
            $(this).addClass('active');
          } else {
            $(this).removeClass('active');
          }
        });
      }
    });
  
  })(window.jQuery);

  // --- NAVBAR HIDE ON SCROLL DOWN, SHOW ON SCROLL UP (MOBILE ONLY) ---
$(function() {
    "use strict";
    
    // Hanya jalankan logika ini di HP (di bawah 992px)
    if ($(window).width() < 992) {
        var lastScrollTop = 0;
        var navbar = $('.navbar');
        var navbarHeight = navbar.outerHeight();

        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            
            // Hindari pemicu scroll yang sangat kecil
            if (Math.abs(lastScrollTop - st) <= 5) return;

            // Jika di-scroll ke bawah dan sudah melewati navbar
            if (st > lastScrollTop && st > navbarHeight){
                // Hilangkan navbar (geser ke atas)
                navbar.css('transform', 'translateY(-' + navbarHeight + 'px)');
            } else {
                // Jika di-scroll ke atas, munculkan kembali
                navbar.css('transform', 'translateY(0px)');
            }
            lastScrollTop = st;
        });
    }
});