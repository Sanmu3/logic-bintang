for (var y = 1; y < 11; y++) {
    for (var x = 1; x < 11; x++) {

        if (x > y && x + y < 11 || x < y && x + y > 11 )
        {
            document.write('_')
        } else {
            document.write('*')
        }

    }
    document.write('<br/>')
}