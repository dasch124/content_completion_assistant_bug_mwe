function transform(content) {
    var suggestion = [];

    for(var i = 0; i < content.results.length; i++) {
        var val_res = content.results[i].id.split('/');
        var val_res = "apis:" + val_res[val_res.length - 2];
        suggestion.push(
            {
                "tc:value" : val_res,
                "tc:description" : content.results[i].text
            }
        )
    }

    var suggestions = {
        "tc:suggestion": suggestion
    }

    return suggestions;
}