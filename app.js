

// 1. key     67cccefc4295cbee54248449f367fae4
// 2. secret  4380ffb480c38d06


// 3. https://api.flickr.com/services/rest/?method=flickr.photos.search&accuracy=11&per_page=10&has_geo=Madrid&page=1&format=json&api_key=67cccefc4295cbee54248449f367fae4

// 4. Method flickr.photos.search

// global variables
var SEARCH_VIEW  = document.getElementById('search_view');
var RESULTS_VIEW = document.getElementById('results_view');
var GALLERY_VIEW = document.getElementById('gallery_view');

var userSearchedWord = document.getElementById('search_input');

//https://api.foursquare.com/v2/venues/search?v=20161016&near=Struga&intent=checkin&client_id=KTKZSZO410ZEIBDVBGNZLX2VSTMAXLVA4NINTZ1SNUBFWIJ4&client_secret=0AZBQ5OAAC14H1100WJWUFPIJIYJQ1DUG1CNBXLICV5W4VZ1

var API_KEY = '&api_key=67cccefc4295cbee54248449f367fae4';    
var API_BASE ='https://api.flickr.com/services/rest/?method=flickr.photos.search';
var API_Filters = '&per_page=10&page=1';

var API = API_BASE + API_KEY + API_Filters + '&format=json&nojsoncallback=1&' + 'tags=';

function pageLoaded(){
      // page started hide results_view and gallery_view
    RESULTS_VIEW.style.visibility = 'hidden';
    GALLERY_VIEW.style.visibility = 'hidden';
}

function getPictures(){
    
if (userSearchedWord.value.length === 0) {
        console.log('please search something ..');
    }
    else {
        // fetch the data
        fetch(API + userSearchedWord.value.toLowerCase())
        .then(function(response) {return response.json();})
        .then(function(data) {
            console.log(data);

            SEARCH_VIEW.style.visibility = 'hidden';

            // show the results div
            RESULTS_VIEW.style.visibility = 'visible';

            var output = '';
            var photoArray = data.photos.photo;
            photoArray.forEach(function(photo) {
                console.log(photo.title);
//                output += "<div class = 'card' > "
//                    + "<img class = 'picture' src = 'https://farm" + photo.farm +".staticflickr.com/" + photo.server +"/" + photo.id+ "_" + photo.secret+ ".jpg'"
//                    + "<br />"
//                    + "<p>" + photo.title + "</p>"
//                    + '</div>';
            });

            RESULTS_VIEW.innerHTML = output;
        });
    }
}



