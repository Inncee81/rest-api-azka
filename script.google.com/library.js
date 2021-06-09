
function chat_bot(cari = "hay") {
    var url = "https://insaneazka-freeapi.herokuapp.com/chatbot?pertanyaan=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}
function covid(cari = "all") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/information/covid?query=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}


function covid19(cari = "all") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/information/covid19?query=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}


function gempa() {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/information/autogempa"
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}


function gempa_dirasakan() {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/information/gempadirasakan"
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}

function gempa_terkini() {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/information/gempaterkini"
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}


function image_nsfw(cari = "hentai") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/image/nsfw?q=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}
function image_sfw(cari = "dota2") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/image/nsfw?q=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}

function kisah_nabi(cari = "adam") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/muslim/kisahnabi?namenabi=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}


function maps(cari) {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/information/maps?query=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}


function pinterest(cari, random = true) {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/pinterest?text=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    if (random) {
        return response[Math.floor(Math.random() * response.length)]
    } else {
        return response
    }
}

function quran(cari = "1") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/muslim/quran?nosurat=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}

function youtube_channel(cari = "miawaug") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/youtube/channel?query=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}

function youtube_search(cari = "ncs music") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/youtube/videosearch?query=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}

function youtube_video(cari = "https://www.youtube.com/watch?v=iUnobJp3eH0") {
    var url = "https://insaneazka-freeapi.herokuapp.com/api/youtube/videoinfo?url=" + encodeURIComponent(cari.toLowerCase()) + ""
    var response = JSON.parse(UrlFetchApp.fetch(url).getContentText());
    return response.message
}


function test() {
    var data = chat_bot("hay")
    console.log("test function chatbot\n" + data)

    var data = covid("jakarta")
    console.log("test function covid\n" + data)

    var data = covid19("jakarta")
    console.log("test function covid19\n" + data)

    var data = gempa()
    console.log("test function gempa\n" + data)

    var data = gempa_dirasakan()
    console.log("test function gempa dirasakan\n" + data)

    var data = gempa_terkini()
    console.log("test function gempa terkini\n" + data)

    var data = image_nsfw("hentai")
    console.log("test function image nsfw\n" + data)


    var data = image_sfw("dota2")
    console.log("test function image sfw\n" + data)

    var data = kisah_nabi("adam")
    console.log("test function kisah nabi\n" + data)

    var data = maps("jakarta")
    console.log("test function maps\n" + data)

    var data = pinterest("cewe cantik")
    console.log("test function pinterest\n" + data)

    var data = quran("1")
    console.log("test function quuran\n" + data)


    var data = maps("jakarta")
    console.log("test function maps\n" + data)

    var data = youtube_channel("miawaug")
    console.log("test function youtube channel\n" + data)

    var data = youtube_search("ncs music")
    console.log("test function youtube search\n" + data)

    var data = youtube_video("https://www.youtube.com/watch?v=iUnobJp3eH0")
    console.log("test function youtube video\n" + data)

}