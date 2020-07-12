function animasiintro(){
    $("#text span").velocity("transition.slideLeftIn",{
                                stagger: 150,
                                complete: function(){
                                    animasibuttonstart();
                                }
                            });
}

function animasibuttonstart(){
    $("#start").velocity("transition.bounceUpIn")
               .mouseenter(function(){
                    $(this).velocity({width: 100});
               })
               .mouseleave(function(){
                    $(this).velocity({width: 125});
               });
}

function animasiintroout(){
    $("#start").attr("disabled", true).css({"color":"black"}); //membuat button hanya bisa di klik
    $("#start").velocity("transition.whirlOut",{
                            stagger: 150,
                            complete: function(){
                                $("#text").velocity({"font-size":"20px",
                                                          "top":"95%"
                                                    }, {
                                                        duration: 800, //kecepatan
                                                        complete: function(){
                                                            callmenu();
                                                            $("#menu ul li a[href='what_we_do']").trigger("click");
                                                            $("#start").attr("disabled", false).css({"color":"black"});
                                                        }
                                                    });
                            }
                        });
}

function callmenu(){
    $("#menu ul li").velocity("transition.slideLeftIn",{
                                stagger: 250
                             });

    $("#menu ul li a").off().click(function(event){ // off() akan membuat off sementara lalu menjalankan fungsi yg ada di dalamnya
        event.preventDefault(); //agar tidak pindah halaman 404
        $(this).parent("li").addClass("active").siblings().removeClass("active");
        //$(this).parent("li").siblings().removeClass("active");

        var hrefString = $(this).attr("href");
        if(hrefString == "back_to_intro"){
            back_to_intro();
        }
        else
        {
            if(!$("#" + hrefString).is(":visible")){
                $(".container-content").fadeOut(1000); //pergantian menu
            
                setTimeout(function(){ //fungsi ini mendiamkan selama 1000ms hingga .container-content selesai baru dijalankan
                    $("#" + hrefString).show();
                    window[hrefString](); //menjadi function what_we_do dan menu yang ada dibawah
                }, 1000);
            }
        }
    });                      
}

function what_we_do(){
    $("#what_we_do img").velocity("transition.flipYIn",{duration: 1500});
    $("#what_we_do .title").velocity("transition.slideUpIn",{duration: 1500});
    $("#what_we_do div").velocity("transition.slideDownIn",{duration: 1500});
}

function our_team(){
    $(".members.top240").velocity("transition.slideUpIn", {stagger: 500});
    $(".members.top170").velocity("transition.slideDownIn", {stagger: 500});
}

function back_to_intro(){
    $("#menu ul li").hide();
    $(".container-content").hide();
    $("#text").velocity({"font-size":"90px",
                         "top":"50%"
                        }, {
                            duration: 1000, //kecepatan
                            complete: function(){
                                $("#start").velocity("transition.whirlIn");
                            }
                        });
}

$(document).ready(function(){
    animasiintro();
});