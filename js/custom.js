$(document).ready(function() {
    feather.replace()
});


$(document).ready(function() {
    feather.replace()

    $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.custom-menu').first().stop(true, true).slideDown(300);
    });

    $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.custom-menu').first().stop(true, true).slideUp(200);
    });

    $(".toggle-btn").click(function() {
        $(".toggle-btn").toggleClass("active");
        $("body").toggleClass("background-black");
        $(".sidebar").toggleClass("small-sidebar");
        $(".signit-main").toggleClass("big-signit-main");
    });
});


$(document).ready(function() {
    var shipmentchartoptions = {
        series: [{
            name: '',
            data: [50, 77, 50, 77, 60, 45, 95, 90, 70, 60, 90, 65]
        }, ],
        chart: {
            type: 'bar',
            height: 244,
            fontFamily: 'Roboto, sans-serif',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '26%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#21C44C']
        },
        fill: {
            opacity: 1,
            colors: ['#CDF9D9'],
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tickPlacement: 'off',
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 4,

        },
        responsive: [{
            breakpoint: 1199,
            options: {
                chart: {
                    height: 193,
                },
            },
            breakpoint: 767,
            options: {
                chart: {
                    height: 190,
                    width: "105%",
                    offsetX: -15,
                },
            },
        }],
    };
    var chart = new ApexCharts(document.querySelector("#shipment-chart"), shipmentchartoptions);
    chart.render();





    var revenuechartoptions = {
        series: [{
            name: '',
            data: [50, 77, 50, 77, 60, 45, 95, 90, 70, 60, 90, 65]
        }, ],
        chart: {
            type: 'bar',
            height: 244,
            fontFamily: 'Roboto, sans-serif',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '26%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#00AEEF']
        },
        fill: {
            opacity: 1,
            colors: ['#CCF1FF'],
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tickPlacement: 'off',
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 4,
        },
        responsive: [{
            breakpoint: 1199,
            options: {
                chart: {
                    height: 193,
                },
            },
            breakpoint: 767,
            options: {
                chart: {
                    height: 190,
                    width: "105%",
                    offsetX: -15,
                },
            },
        }],
    };
    var chart = new ApexCharts(document.querySelector("#revenue-chart"), revenuechartoptions);
    chart.render();




    var revenuepieoptions = {
        series: [70, 30],
        labels: ['', ''],
        chart: {
            type: 'donut',
            width: 268,
            fontFamily: 'Montserrat, sans-serif',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: false,
                    speed: 350
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        fill: {
            opacity: 1,
            colors: ['#FF5A10', '#DDDDDD'],
        },
        stroke: {
            width: 0,
        },
        tooltip: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 0.7,
                }
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '40%',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: '',
                            formatter: () => '70%'
                        },
                    }
                }
            }
        },
        responsive: [{
            breakpoint: 1199,
            options: {
                chart: {
                    width: 242,
                },
            },
        }],
    };

    var chart = new ApexCharts(document.querySelector("#revenue-pie-chart"), revenuepieoptions);
    chart.render();
});


$(document).ready(function() {
    $('.comn-datepicker').datepicker({
        dateFormat: "dd/mm/yy",
    });
});


$('.comn-datetimepicker').datetimepicker();


$(document).ready(function() {
    $('.rem-disable-btn').click(function() {
        $(".rem-disable-btn").hide();
        $(".rem-set-btn").show().css("display", "flex");
        $('.consignment-reminder-row .comn-datepicker').datepicker('setDate', '');
    });


    $('.rem-set-btn').click(function() {
        $(".rem-set-btn").hide();
        $(".rem-disable-btn").show();
    });
});



$(document).ready(function() {
    $('.slide-btn').click(function() {
        $('.carrier-slide-row').slideToggle();
        $('.slide-btn').toggleClass("rotate-icon");
    });
});



$(document).ready(function() {
    $("#serch-box-1").click(function() {
        $("#hide-input-1").slideDown(300);
        $("#serch-box-1").hide();
    });
    $("#hide-input-1 .hide-input-box i").click(function() {
        $("#serch-box-1").slideDown(300);
        $("#hide-input-1").hide();
    });


    $("#serch-box-2").click(function() {
        $("#hide-input-2").slideDown(300);
        $("#serch-box-2").hide();
    });
    $("#hide-input-2 .hide-input-box i").click(function() {
        $("#serch-box-2").slideDown(300);
        $("#hide-input-2").hide();
    });


    $("#serch-box-3").click(function() {
        $("#hide-input-3").slideDown(300);
        $("#serch-box-3").hide();
    });
    $("#hide-input-3 .hide-input-box i").click(function() {
        $("#serch-box-3").slideDown(300);
        $("#hide-input-3").hide();
    });


    $("#serch-box-4").click(function() {
        $("#hide-input-4").slideDown(300);
        $("#serch-box-4").hide();
    });
    $("#hide-input-4 .hide-input-box i").click(function() {
        $("#serch-box-4").slideDown(300);
        $("#hide-input-4").hide();
    });
});


$(document).ready(function() {
    $(".select2-search").select2({});
});


$('.comn-file-input input').bind('change', function() {
    var filename = $(".comn-file-input input").val();
    if (/^\s*$/.test(filename)) {
        $(".comn-file-name").text("No file chosen...");
    } else {
        $(".comn-file-name").text(filename.replace("C:\\fakepath\\", ""));
    }
});



$('.save-next-btn').click(function() {
    const nextTabLinkEl = $('.add-carrier-tabs .active').closest('li').next('li').find('button')[0];
    const nextTab = new bootstrap.Tab(nextTabLinkEl);
    nextTab.show();
});

$('.back-carrier-btn').click(function() {
    const prevTabLinkEl = $('.add-carrier-tabs .active').closest('li').prev('li').find('button')[0];
    const prevTab = new bootstrap.Tab(prevTabLinkEl);
    prevTab.show();
});