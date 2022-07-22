(function($){

    function init(){

        /* -------------- --------------------- */
        /* ------ ACTIVANDO LOS SLIDERS---------*/
        /* -------------- --------------------- */

        /* Slider de propiedades */

        var $propertieSlider = $("#properties_slider"),
            $sliderListing = $(".property-listing-slider"),
            $developmentSlider = $('.developments-slider'),
            $testimonialSlider = $('.testimonial-slider');


        if($sliderListing.length) {
            $propertieSlider.slick({
                arrows:false,
                dots:true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                touchThreshold:100,
                responsive: [
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        centerMode:true,
                        centerPadding:'25px',
                        dots:false
                    }
                },
                
                ]
            });
        }
        /*  Generando los slider de listing.
            Para generar nuevos sliders se utiliza la estructura basica
            de .section-slider
        */
        
        if($sliderListing.length) {
            
            $sliderListing.each(function(e) {
                var $actualSlider = $(this).find(".section-slider"),
                    $nextArrow = $(this).find(".btn-arrow-next"),
                    $prevArrow = $(this).find(".btn-arrow-prev");
        
                $actualSlider.slick({
                    arrows:true,
                    dots:false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: $nextArrow,
                    nextArrow: $prevArrow,
                    responsive: [
                        {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            centerMode:true,
                            centerPadding:'20px',
                            arrows:false,
                        }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                centerMode:true,
                                centerPadding:'20px',
                                arrows:false,
                            }
                        },
                        
                    ]
                });

            });
        }
        
        /* Slider de develoments */
        if($developmentSlider.length) {
            $developmentSlider.slick({
                arrows:true,
                dots:false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                touchThreshold:100,
                prevArrow: '#developmentSliderPrev',
                nextArrow: '#developmentSliderNext',
                responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        centerMode:true,
                        centerPadding:'20px',
                        arrows:false,
                    }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            centerMode:true,
                            centerPadding:'20px',
                            arrows:false,
                        }
                    },
                    
                ]
            });
        }

        /* Slider testimonials */
        if($testimonialSlider.length) {
            $testimonialSlider.slick({
                arrows:true,
                dots:false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                touchThreshold:100,
                adaptiveHeight:true,
                prevArrow: '#testimonialsPrev',
                nextArrow: '#testimonialsNext',
                
            });
        }

        /* -------------- --------------------- */
        /* ------ ABRIENDO MENU SIDEBAR---------*/
        /* -------------- --------------------- */

         var $toggleBtn = $("#toggleButton"), 
             $body = $("body");
        
        $toggleBtn.click(function(e) {
            $body.toggleClass("is-open");
        });
        
        // ACTIVANDO EL ACORDION
        
        var accordion = document.querySelector('.menu-sidebar'),
            items = accordion.querySelectorAll('.menu-has-children'),
            title = accordion.querySelectorAll('.menu-has-children > a');

        function toggleAccordion() {
            
            var thisItem = this.parentNode;
            
            items.forEach(item => {
                if (thisItem == item ) {
                thisItem.classList.toggle('active');
                return;
                } 
                
                item.classList.remove('active');
            });
        }

        title.forEach(question => question.addEventListener('click', toggleAccordion));

        // CERRANDO EL SIDEBAR CUANDO CLICKEAS EL OVERLAY

        $(document).on('click', '.sidebar-menu-overlay', function(e) {
            e.preventDefault();
            $('body').removeClass('is-open');
        });

        /* -------------- --------------------- */
        /* ------ Creando video-----------------*/
        /* -------------- --------------------- */

        /* CREANDO EL VIDEO */

        var $document = $(document);
        function creaIframeVideo(elBoton){
        var $urlVideo = elBoton.attr('data-video');
            if ($urlVideo !== undefined) {
            var $urlVideo = $urlVideo.toString();
            if ($urlVideo.indexOf('youtube') !== -1) {
                var et = $urlVideo.lastIndexOf('&')
                if(et !== -1){
                $urlVideo = $urlVideo.substring(0, et)
                }
                var embed = $urlVideo.indexOf('embed');
                if (embed !== -1) {
                $urlVideo = 'https://www.youtube.com/watch?v=' + $urlVideo.substring(embed + 6, embed + 17);
                }
                var srcVideo = 'https://www.youtube.com/embed/' + $urlVideo.substring($urlVideo.length - 11, $urlVideo.length) + '?autoplay=1';
            } else if ($urlVideo.indexOf('vimeo') !== -1) { // es un video de Vimeo, EJM: https://vimeo.com/206418873
                var srcVideo = 'https://player.vimeo.com/video/' + $urlVideo.substring(($urlVideo.indexOf('.com') + 5), $urlVideo.length).replace('/', '');
            } else {
            var srcVideo = $urlVideo;
                    }
            return '<video id="video-home" width="100%" autoplay loop="loop" style="max-height: 100%"><source src="' + srcVideo + '" type="video/mp4"></video>';
            } else {
            alert('No video assigned.');
            return false;
            }
        }

        /* REPRODUCIENDO VIDEO */

        $(document).on('click', '.play-video', function(){
            
            
            if($(this).hasClass("active")){

                var vid=document.getElementById("videohome");
                vid.pause();
                $(".play-video").removeClass("active");
                $(this).addClass("active-arrow");

            }else{

                if(!$("#videohome").length){
                    var $iframeVideo = creaIframeVideo($(this));
                    if ($iframeVideo) {
                    var $wrapperVideo = $('#wrapper-video');

                    $wrapperVideo.append($iframeVideo);
                    $wrapperVideo .find("video").attr("id","videohome");
                    }
                }

                $(this).addClass("active");
                $(this).removeClass("active-arrow");
                
                var vid=document.getElementById("videohome");
                    vid.play();
                

            }
        });

        /* -------------- --------------------- */
        /* ---------- Fonts google -------------*/
        /* -------------- --------------------- */

        // WebFont.load({
        //     google: {
        //         families: [
        //             'Open+Sans:300,400,600,700,800&display=swap',
        //             'Montserrat:300,400,600&display=swap'
        //         ]
        //     }
        // });

        /* -------------- --------------------- */
        /* ------ Cargando elementos -----------*/
        /* -------------- --------------------- */

        /* Guardamos los elementos en un array capturando su attributo data-real type */

        var lazyObjects = [].slice.call(document.querySelectorAll("[data-real-type]"));
        
        let lazyObjectObserver = new IntersectionObserver(function(entries, observer) {
            
            entries.forEach(function(entry) {

                 /* Obtenemos el atributp */

                let typeAttr = entry.target.getAttribute('data-real-type');
                
                if (entry.isIntersecting) {
                    
                    /* Verificamos si es imagen o video */

                    if (typeAttr == 'image'){
                        
                         /* Sustituimos src por data-src */

                        let lazyObject = entry.target;
                        lazyObject.src = lazyObject.dataset.src;
                        lazyObject.classList.remove("lazy");
                        lazyObjectObserver.unobserve(lazyObject);

                    } else if (typeAttr == 'video'){

                        /* En los videos igual */

                        for (var source in entry.target.children) {
                            var videoSource = entry.target.children[source];
                            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                            }
                        }
                        
                        /* Cargamos el video */

                        entry.target.load();
                        entry.target.classList.remove("lazy");
                        lazyObjectObserver.unobserve(entry.target);
                    }
                    
                }
            });
        });
        
         /* Llamamos la funcion de carga */
        
        setTimeout(function(){
            lazyObjects.forEach(function(lazyObject) {
                lazyObjectObserver.observe(lazyObject);
            });
        }, 500);


         /* -------------- --------------------- */
        /* ------ Animaciones -----------*/
        /* -------------- --------------------- */

         /* Se hace igual que las imagenes y videos,
            con la diferncia que se se captura el delay de la transicion
            con data-animation-delay
         */

        var dataAnimations = [].slice.call(document.querySelectorAll("[data-animation]"));
        
         let dataAnimationsObserver = new IntersectionObserver(function(entries, observer) {
             entries.forEach(function(entry) {
                 if (entry.isIntersecting) {
                    
                    entry.target.setAttribute("data-animation", "true");
                    
                    let getDelay = entry.target.querySelectorAll('[data-animation-delay]');
                    
                    getDelay.forEach(function(AnimationTarget) {
                        let getDelayValue = AnimationTarget.getAttribute('data-animation-delay');
                        AnimationTarget.style.transitionDelay = getDelayValue + "s";
                    })
                    
                 }
             });
         });

         setTimeout(function(){
            dataAnimations.forEach(function(dataAnimations) {
                dataAnimationsObserver.observe(dataAnimations);
            });
        }, 100);


        /* -------------- --------------------- */
        /* ----- Click scroll a seccion --------*/
        /* -------------- --------------------- */

        let anchorSelector = 'a[href^="#"]';
     
        let anchorList =
            document.querySelectorAll(anchorSelector);
         
        anchorList.forEach(link => {
            link.onclick = function (e) {
     
                e.preventDefault();
         
                let destination =
                    document.querySelector(this.hash);
         
                destination.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
        
        
    }

    window.addEventListener('load', function(){ init();});

})(jQuery);