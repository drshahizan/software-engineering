/**
 * Credits
 * Isotope with paging: https://codepen.io/TimRizzo/details/ervrRq
 * CSS3 animation effects for Magnific Popup: https://codepen.io/dimsemenov/pen/GAIkt
 */

$(document).ready(function () {

    /*************** Gallery ******************/
    
    var itemSelector = ".tm-gallery-item"; 
    var responsiveIsotope = [ [480, 4], [720, 6] ];
    var itemsPerPageDefault = 8;
    var itemsPerPage = defineItemsPerPage();
    var currentNumberPages = 1;
    var currentPage = 1;
    var currentFilter = '*';
    var filterValue = "";
    var pageAttribute = 'data-page';
    var pagerClass = 'isotope-pager';    
    var $container = $('.tm-gallery-container').isotope({ 
        itemSelector: itemSelector
    });

    function adjustGalleryLayout(currentPopup) {
        if(currentPopup == 'gallery') {
            // layout Isotope after each image loads
            $container.imagesLoaded().progress( function() {
                $container.isotope('layout');
            });
        }  
    }

    /************** Popup *****************/   

    $('#inline-popups').magnificPopup({
        delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function() {
                adjustGalleryLayout($.magnificPopup.instance.content.attr('id'));        
            }
        },
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        showCloseBtn: false
    });

    $('.tm-close-popup').on( "click", function() {
        $.magnificPopup.close();
    });

    var popupInstance = $.magnificPopup.instance;

    $('.tm-btn-next').on("click", function(e) {                          
        popupInstance.next();
        adjustGalleryLayout(popupInstance.content.attr('id'));       
    });

    $('.tm-btn-contact').on("click", function(e) {
        popupInstance.goTo(4); 
    })

    // update items based on current filters
    function changeFilter(selector) { $container.isotope({ filter: selector }); }

    // grab all checked filters and goto page on fresh isotope output
    function goToPage(n) {
        currentPage = n;
        var selector = itemSelector;
        var exclusives = [];
        
        if(currentFilter != '*') {
            exclusives.push(selector + '.' + currentFilter);
        }    

        // smash all values back together for 'and' filtering
        filterValue = exclusives.length ? exclusives.join('') : '*';

        // add page number to the string of filters
        var wordPage = currentPage.toString();
        filterValue += ('.'+wordPage);
        changeFilter(filterValue);
    }

    // determine page breaks based on window width and preset values
    function defineItemsPerPage() {
        var pages = itemsPerPageDefault;

        for( var i = 0; i < responsiveIsotope.length; i++ ) {
            if( $(window).width() <= responsiveIsotope[i][0] ) {
                pages = responsiveIsotope[i][1];
                break;
            }
        }
        return pages;
    }

    function setPagination() {
    
        var SettingsPagesOnItems = function(){
            var itemsLength = $container.children(itemSelector).length;
            var pages = Math.ceil(itemsLength / itemsPerPage);
            var item = 1;
            var page = 1;
            var selector = itemSelector;
            var exclusives = [];
                
                if(currentFilter != '*') {
                    exclusives.push(selector + '.' + currentFilter);
                }                

                // smash all values back together for 'and' filtering
                filterValue = exclusives.length ? exclusives.join('') : '*';
                
                // find each child element with current filter values
                $container.children(filterValue).each(function(){
                    // increment page if a new one is needed
                    if( item > itemsPerPage ) {
                        page++;
                        item = 1;
                    }
                    // add page number to element as a class
                    wordPage = page.toString();
                    
                    var classes = $(this).attr('class').split(' ');
                    var lastClass = classes[classes.length-1];
                    // last class shorter than 4 will be a page number, if so, grab and replace
                    if(lastClass.length < 4){
                        $(this).removeClass();
                        classes.pop();
                        classes.push(wordPage);
                        classes = classes.join(' ');
                        $(this).addClass(classes);
                    } else {
                        // if there was no page number, add it
                       $(this).addClass(wordPage); 
                    }
                    item++;
                });
            currentNumberPages = page;
        }();
        
        // create page number navigation
        var CreatePagers = function() {
            
            var $isotopePager = ( $('.'+pagerClass).length == 0 ) ? $('<div class="'+pagerClass+' tm-paging"></div>') : $('.'+pagerClass);

            $isotopePager.html('');
            if(currentNumberPages > 1){
                for( var i = 0; i < currentNumberPages; i++ ) {
                    var $pager = '';

                    if(currentPage == i+1) {
                        $pager = $('<a href="javascript:void(0);" class="pager active tm-paging-link" '+pageAttribute+'="'+(i+1)+'"></a>');
                    } else {
                        $pager = $('<a href="javascript:void(0);" class="pager tm-paging-link" '+pageAttribute+'="'+(i+1)+'"></a>');
                    }
                        
                    $pager.html(i+1);

                    $pager.click(function(){
                        $('.tm-paging-link').removeClass('active');
                        $(this).addClass('active');
                        var page = $(this).eq(0).attr(pageAttribute);
                        goToPage(page);
                    });
                    $pager.appendTo($isotopePager);
                }
            }
            $container.after($isotopePager);
        }();
    }

    setPagination();
    goToPage(1);

    //event handlers
    $('.tm-gallery-link').click(function(e) {        
        var filter = $(this).data('filter');        
        currentFilter = filter;
        setPagination();
        goToPage(1);
        $('.tm-gallery-link').removeClass('active');
        $(e.target).addClass('active');
    })

    //Handle window resize
    $(window).resize(function(){
        itemsPerPage = defineItemsPerPage();
        setPagination();
        goToPage(1);
    });

    /************** Video background *********/

    function setVideoSize() {
        const vidWidth = 1280;
        const vidHeight = 720;
        const maxVidHeight = 400;
        let windowWidth = window.innerWidth;
        let newVidWidth = windowWidth;
        let newVidHeight = windowWidth * vidHeight / vidWidth;
        let marginLeft = 0;
        let marginTop = 0;
    
        if (newVidHeight < maxVidHeight) {
            newVidHeight = maxVidHeight;
            newVidWidth = newVidHeight * vidWidth / vidHeight;
        }
    
        if(newVidWidth > windowWidth) {
            marginLeft = -((newVidWidth - windowWidth) / 2);
        }
    
        if(newVidHeight > maxVidHeight) {
            marginTop = -((newVidHeight - $('#tm-video-container').height()) / 2);
        }
    
        const tmVideo = $('#tm-video');
    
        tmVideo.css('width', newVidWidth);
        tmVideo.css('height', newVidHeight);
        tmVideo.css('margin-left', marginLeft);
        tmVideo.css('margin-top', marginTop);
    }

    setVideoSize();

    // Set video background size based on window size
    let timeout;
    window.onresize = function () {
        clearTimeout(timeout);
        timeout = setTimeout(setVideoSize, 100);

        adjustIntroImg();
    };

    // Play/Pause button for video background      
    const btn = $("#tm-video-control-button");

    btn.on("click", function (e) {
        const video = document.getElementById("tm-video");
        $(this).removeClass();

        if (video.paused) {
            video.play();
            $(this).addClass("fas fa-pause");
        } else {
            video.pause();
            $(this).addClass("fas fa-play");
        }
    });


    // Adjust intro image based on the screen size
    adjustIntroImg();

    function adjustIntroImg() {
        var img = 'img/';

        if(window.innerWidth > 650) {
            img += 'intro.jpg';
        } else {
            img += 'intro-big.jpg';
        }

        $('.tm-intro-img').attr('src', img);
    }
});