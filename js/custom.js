var containerArray = $('.quote-cont-1');
var containerHeight = containerArray.height();
var container2Array = $('.quote-cont-2');
var p1Array = $('.pwc-quote-1'); //array of paragraphs
var p1Height;
var p1text
var p2Array = $('.pwc-quote-2');
var p2text = [];
$(document).ready(function () {
    $('.quotes-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
    });
    quotesLoad()
});

$(window).resize(function(){
    quotesLoad()
})


function quotesLoad() {
    if ($(window).width() >= 1024) {
        for (let i = 0; i < p1Array.length; i++) {
            p1Height = $(p1Array[i]).height();
            p1text = $(p1Array[i]).text();
            p1text = p1text.split(' ');
            //separate each word into an array
            if (p1Height > containerHeight) {
                while (p1Height > containerHeight) {
                    lastChar = p1text.pop();
                    p2text.unshift(lastChar);
                    p1temp = p1text.join(' ');
                    $(p1Array[i]).text(p1temp);
                    p1Height = $(p1Array[i]).height();
                    //re-write the paragraph until the paragraph's height is equal to the container's height
                }
                $(p2Array[i]).text(p2text.join(' '));
                //write the rest of the text in the second container
            }
            if ($(p2Array[i]).text() === "") {
                $(containerArray[i]).append('<img src="img/quote-end.png" alt="" class="quotation-marks quotation-marks-last mt-auto pl-2">')
                $(container2Array[i]).removeClass('d-lg-flex')
                $(p1Array[i]).css('margin', 'auto')
                var margin = $(p1Array[i]).css('margin-top')
                $(containerArray[i]).children('.quotation-marks-first').css('margin-top', margin)
                $(containerArray[i]).children('.quotation-marks-last').css('margin-bottom', margin)
                $(containerArray[i]).removeClass('col-lg-5')
                $(containerArray[i]).addClass('col-lg-7')
                var quoteMargin = -(Number(margin.substring(0, (margin.length - 2))) + 30)
                $(containerArray[i]).parent().children('.quoteOwner').css('top', quoteMargin)
                $(containerArray[i]).parent().children('.quoteOwner').addClass('col-lg-7')

            }
            p2text = [];
            p1text = []
        }
    }
    else {
        for (let i = 0; i < container2Array.length; i++) {
            var margin = $(p1Array[i]).css('margin-top')
            var quoteMargin = -(Number(margin.substring(0, (margin.length - 2))) + 30)
            console.log(margin)
            console.log(quoteMargin)
            $(containerArray[i]).children('.quotation-marks-first').css('margin-top', margin)
            $(containerArray[i]).children('.quotation-marks-last').css('margin-bottom', margin)
            $(containerArray[i]).parent().children('.quoteOwner').css('top', quoteMargin)

        }
    }
}