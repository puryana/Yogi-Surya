//jquery-click-scroll
//Updated for dynamic routing & modern dropdowns

$(document).ready(function() {
    // Array dari section 1 sampai 6
    var sectionArray = [1, 2, 3, 4, 5, 6];

    // 1. Fungsi untuk menyorot (highlight) menu saat halaman di-scroll
    $(document).scroll(function() {
        var docScroll = $(document).scrollTop();
        var offsetLengkap = docScroll + 85; 

        $.each(sectionArray, function(index, value) {
            var targetSection = $('#section_' + value);
            
            // Memastikan section ada di halaman
            if (targetSection.length) {
                var offsetSection = targetSection.offset().top;
                var heightSection = targetSection.outerHeight();

                // Jika posisi scroll sedang berada di area section ini
                if (offsetLengkap >= offsetSection && offsetLengkap < (offsetSection + heightSection)) {
                    $('.navbar-nav .nav-link, .dropdown-item').removeClass('active');
                    $('.navbar-nav .nav-link, .dropdown-item').addClass('inactive');
                    
                    // Highlight link yang href-nya cocok dengan section yang sedang dilihat
                    $('a[href="#section_' + value + '"]').removeClass('inactive').addClass('active');
                }
            }
        });
    });

    // 2. Fungsi Smooth Scroll saat link diklik
    $('.click-scroll').click(function(e) {
        var target = $(this).attr('href');
        
        // Cek jika href valid dan dimulai dengan '#'
        if (target && target.startsWith('#') && $(target).length) {
            e.preventDefault();
            var offsetClick = $(target).offset().top - 75;
            
            $('html, body').animate({
                'scrollTop': offsetClick
            }, 300);
        }
    });

    // Inisialisasi awal saat halaman dimuat
    $('.navbar-nav .nav-link:link').addClass('inactive');
    $('a[href="#section_1"]').addClass('active').removeClass('inactive');
});