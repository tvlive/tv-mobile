function transform_minutes(minutes) {
    if (minutes < 10) {
        return '0' + minutes
    }
    return minutes.toString();
}

function remove_content(channel) {
    if ((channel.indexOf("BBC ONE") > -1 || channel.indexOf("BBC TWO") > -1) && (channel != "BBC ONE" && channel != "BBC TWO")) {
        return true;
    } else if (channel.indexOf("HD") > -1) {
        return true;
    } else {
        return false;
    }

}

function transform_content(data) {
    var data_transformed = [];
    for (i = 0; i < data.length; i++) {
        if (remove_content(data[i].channel)) {
            continue;
        }
        if (data[i].series) {
            if (data[i].series.poster)
                data[i].poster = data[i].series.poster;
            else {
                data[i].image = 'img/no_image_available.png';
                data[i].noPoster = true;
            }
            data[i].title = data[i].series.serieTitle;
            data[i].episodeTitle = data[i].series.episode.episodeTitle;
            data[i].episodeNumber = data[i].series.episode.episodeNumber;
            data[i].seasonNumber = data[i].series.episode.seasonNumber;
            data[i].plot = data[i].series.plot;

        }
        if (data[i].film) {
            if (data[i].film.poster)
                data[i].poster = data[i].film.poster;
            else {
                data[i].image = 'img/no_image_available.png';
                data[i].noPoster = true;
            }
            data[i].title = data[i].film.title;
            data[i].plot = data[i].film.plot;

        }

        s = new Date(data[i].start);
        e = new Date(data[i].end);
        s.setUTCHours(s.getUTCHours());
        e.setUTCHours(e.getUTCHours());
        data[i].st = transform_minutes(s.getUTCHours()) + ':' + transform_minutes(s.getMinutes());
        data[i].et = transform_minutes(e.getUTCHours()) + ':' + transform_minutes(e.getMinutes());

        data_transformed.push(data[i]);
    }
    return data_transformed;
}

function transform_date_details(data) {
    s = new Date(data.start);
    e = new Date(data.end);
    s.setUTCHours(s.getUTCHours());
    e.setUTCHours(e.getUTCHours());
    data.st = transform_minutes(s.getUTCHours()) + ':' + transform_minutes(s.getMinutes());
    data.et = transform_minutes(e.getUTCHours()) + ':' + transform_minutes(e.getMinutes());

    return data;
}

