
/*JavaScript
Rank Up
Train
Skip
Search
7 kyu
Remove anchor from URL
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"*/

function removeUrlAnchor(url) {
  return url.split('#')[0];
}

//python version
//def remove_url_anchor(url):
   // return url.split('#')[0]
