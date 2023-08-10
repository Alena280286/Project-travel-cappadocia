$(document).ready(() => {
    new WOW({
            animateClass: 'animate__animated'
        }
    ).init();

    $('.tour-slider').slick({

        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('.our-photo-carousel').slick({

        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',

    });
    $('.our-photo-carousel-copy').slick({

        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,

    });

    $('.reviews-carousel').slick({

        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.popup-photo').magnificPopup({
        type: 'image',
    });

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });

    let btnOrder = $('.btn-order');
    let ourName = $('.our-name');
    let ourPhone = $('.our-phone');
    let textError = $('.text-error');
    let textThanks = $('.text-thanks');
    let mainForm = $('.form-order');


    btnOrder.click(function () {

        let hasError = false;
        textError.hide();
        ourName.css('border-color', 'rgb(130, 19, 40)');
        ourPhone.css('border-color', 'rgb(130, 19, 40)');

        if (!ourName.val()) {
            ourName.next().show();
            ourName.css('border-color', 'red');
            hasError = true;
        }
        if (!ourPhone.val()) {
            ourPhone.next().show();
            ourPhone.css('border-color', 'red');
            hasError = true;
        }
        if (!hasError) {

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: ourName.val(), phone: ourPhone.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        mainForm.css('visibility', 'hidden');
                        textThanks.css('display', 'flex');
                    }
                    if (!msg.success) {
                        alert('Возникла ошибка при оформлении заказа!')
                    }
                });
        }
    });

    let btnOrderPop = $('.btn-order-popup');
    let ourNamePop = $('.our-name-popup');
    let ourPhonePop = $('.our-phone-popup');
    let textErrorPop = $('.text-error-popup');
    let textThanksPop = $('.text-thanks-popup');
    let mainFormPop = $('.form-order-popup');


    btnOrderPop.click(function () {

        let hasError = false;
        textErrorPop.hide();
        ourNamePop.css('border-color', 'rgb(130, 19, 40)');
        ourPhonePop.css('border-color', 'rgb(130, 19, 40)');

        if (!ourNamePop.val()) {
            ourNamePop.next().show();
            ourNamePop.css('border-color', 'red');
            hasError = true;
        }
        if (!ourPhonePop.val()) {
            ourPhonePop.next().show();
            ourPhonePop.css('border-color', 'red');
            hasError = true;
        }
        if (!hasError) {

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: ourNamePop.val(), phone: ourPhonePop.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        mainFormPop.css('visibility', 'hidden');
                        textThanksPop.css('display', 'flex');
                    }
                    if (!msg.success) {
                        alert('Возникла ошибка при оформлении заказа!')
                    }
                });
        }
    });


    let mailButton = $('.ellipse');
    let eMail = $('.e-mail');
    let inputMail = $('.input-mail');
    let error = $('.error');
    let thanks = $('.text-thank-you');

    mailButton.click(function () {
        let hasError = false;
        error.hide();
        eMail.css('border-color', 'rgb(130, 19, 40)');

        if (!eMail.val()) {
            eMail.next().show();
            eMail.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {

            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: eMail.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        inputMail.css('visibility', 'hidden');
                        thanks.css('display', 'flex');
                    }
                    if (!msg.success) {
                        alert('Неверное имя!')
                    }
                });
        }
    });

    let blockVideo = $('.block-video');

    blockVideo.click(function () {
        blockVideo.css('visibility', 'hidden');
    });


    document.getElementById('burger').onclick = function () {
        document.getElementById('menu').classList.add('open');
    }

    document.querySelectorAll('#menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }
    })

    let phoneInput = $('#phone');
    phoneInput.inputmask({"mask": "(999) 999-9999"});

    let phonePopup = $('#phone-popup');
    phonePopup.inputmask({"mask": "(999) 999-9999"});


    let readMore = $('.read-more');
    let textHide = $('.text-hide');
    readMore.click(function (e){
       (e).preventDefault();
        $('.dots').hide();
        $('.more').show();
        readMore.hide();
    })
    textHide.click(function (e){
        (e).preventDefault();
        $('.dots').show();
        $('.more').hide();
        readMore.show();
    })

    let readMoreRev = $('.read-more-rev');
    let textHideRev = $('.text-hide-reviews');
    readMoreRev.click(function (e){
        (e).preventDefault();
        $('.dots').hide();
        $('.more').show();
        readMoreRev.hide();
    })

    textHideRev.click(function (e){
        (e).preventDefault();
        $('.dots').show();
        $('.more').hide();
        readMoreRev.show();
    })


});

