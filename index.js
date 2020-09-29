var url = "https://pokeapi.co/api/v2/pokemon/";

    function popularSelect() {
        $.getJSON(url, function (data) {
            $.each(data.results, function (i, item) {
                $('#pokemons').append($('<option>', {
                    value: item.name,
                    text: item.name
                }));
            });
        });
    }