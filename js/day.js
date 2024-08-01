window.addEventListener('load', () => {
    var d = new Date();
    m = d.getMonth() + 1;
    dd = d.getDate();
    y = d.getFullYear();
    //cookie函数


    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
    //纪念日

    if (m == 12 && dd == 13) {
        document.getElementById("grays").innerText = ":root{filter: grayscale(100%);}";
        if (sessionStorage.getItem("isPopupWindow") != "1") {
            Swal.fire("今天是1937.12.13南京大屠杀" + (y - 1937).toString() + "周年暨国家公祭日。");
            sessionStorage.setItem("isPopupWindow", "1");
        }
    }
    //节假日

    if (m == 1 && dd == 1) { //元旦节
        if (sessionStorage.getItem("isPopupWindow") != "1") {
            Swal.fire(y.toString() + "年元旦快乐！");
            sessionStorage.setItem("isPopupWindow", "1");
        }
    }

    var lunar = calendarFormatter.solar2lunar();

    //农历采用汉字计算，防止出现闰月导致问题

    if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初六") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初五") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初四") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初三") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初二") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初一") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "三十") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "廿九")) {
        //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
        console.log(y.toString() + "年新年快乐！");
        if (sessionStorage.getItem("isPopupWindow") != "1") {
            Swal.fire(y.toString() + "年新年快乐！");
            sessionStorage.setItem("isPopupWindow", "1");
        }
    }
    if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五")) {
        //元宵节
        console.log("元宵节快乐！");
        if (sessionStorage.getItem("isPopupWindow") != "1") {
            Swal.fire("元宵节快乐！");
            sessionStorage.setItem("isPopupWindow", "1");
        }
    }
    if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五")) {
        //元宵节
        console.log("元宵节快乐！");
        if (sessionStorage.getItem("isPopupWindow") != "1") {
            Swal.fire("元宵节快乐！");
            sessionStorage.setItem("isPopupWindow", "1");
        }
    }
    if ((lunar["IMonthCn"] == "五月" && lunar["IDayCn"] == "初五")) {
        //端午节
        console.log("端午节快乐！");
        if (sessionStorage.getItem("isPopupWindow") != "1") {
            Swal.fire("端午节快乐！");
            sessionStorage.setItem("isPopupWindow", "1");
        }
    }
    if ((lunar["IMonthCn"] == "八月" && lunar["IDayCn"] == "十五")) {
        //中秋节
        console.log("中秋节快乐！");
        if (sessionStorage.getItem("isPopupWindow") != "1") {
            Swal.fire("中秋节快乐！");
            sessionStorage.setItem("isPopupWindow", "1");
        }
    }
})