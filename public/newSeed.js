const categSet = (id) => {
    $("#" + id).parent().parent().parent().children()[0].value = $("#" + id).text()
}