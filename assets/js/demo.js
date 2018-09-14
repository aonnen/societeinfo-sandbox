$(function () {

    //Set your personal societeinfo API KEY here !
    //For production use, please refer to the documentation https://github.com/aonnen/societeinfo-sandbox
    var API_KEY  = 'YOUR_APIKEY';

    var options = {
        url: function(phrase) {
            if (phrase) {
                //Request autocomplete API
                //https://societeinfo.com/api-doc/#autocomplete-company

                return "https://societeinfo.com/app/rest/api/v2/companies.json/autocomplete?query=" + phrase + '&key=' + API_KEY;
            }
        },

        getValue: "name",

        template: {
            type: "custom",
            method: function(value, item) {
                return "<div class=\"company_name\"><i class=\"fa fa-building-o\"/>&nbsp;&nbsp;" + value + "</div>"  +
                    "<div class=\"company_address\">" + item.formatted_address + "</div>";
            }
        },

        list: {
            onClickEvent: function() {

                //Get full company info from API - Below is an example, there are many other fields in API !
                //https://societeinfo.com/api-doc/#get-company

                $("#logo_url").attr("src", "");
                $(".company_field" ).empty();

                var id = $("#autocomplete").getSelectedItemData().id;

                $.ajax({
                    url: "https://societeinfo.com/app/rest/api/v2/company.json/" + id + "?key=" + API_KEY
                }).then(function(data) {
                    $("#logo_url").attr("src", data.result.web_infos.logo_url);
                    $("td.creation_date" ).text( data.result.organization.creation_date );
                    $("td.capital" ).text( data.result.organization.capital );
                    $("td.registration_number" ).text( data.result.organization.registration_number );
                    $("td.full_registration_number" ).text( data.result.organization.full_registration_number );
                    $("td.vat_number" ).text( data.result.organization.vat_number );
                    $("td.name" ).text( data.result.organization.name );
                    $("td.commercial_name" ).text( data.result.organization.commercial_name );
                    $("td.ape_code" ).text( data.result.organization.activity.ape_code );
                    $("td.ape_name" ).text( data.result.organization.activity.ape_name );
                    $("td.legal_name" ).text( data.result.organization.legal.name );
                    $("td.street" ).text( data.result.organization.address.street );
                    $("td.postal_code" ).text( data.result.organization.address.postal_code );
                    $("td.city" ).text( data.result.organization.address.city );
                    $("td.website_url" ).text( data.result.web_infos.website_url );
                    if(data.result.web_infos.linkedin) $("td.linkedin" ).text( data.result.web_infos.linkedin.url );
                    if(data.result.web_infos.twitter) $("td.twitter" ).text( data.result.web_infos.twitter.url );
                    if(data.result.web_infos.facebook) $("td.facebook" ).text( data.result.web_infos.facebook.url );
                    $("td.email" ).text( data.result.contacts.email );
                });
            }
        },

        ajaxSettings: {
            dataType: "json"
        },
        listLocation: "result",
        requestDelay: 150,
        theme: "bootstrap"
    };

    $("#autocomplete").easyAutocomplete(options);
});