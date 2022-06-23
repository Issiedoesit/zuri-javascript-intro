
//method one: using console log. Doesn't output to html

console.log("Name: Ekwemuka Isioma Jessica");
console.log("Height: 5'8.9\" FT/IN");
console.log("Country: Nigeria");

//method two: using document. outputs to html. Some browsers require external js document formatting to be declared open and close
document.open();
document.write('<p>Name: Ekwemuka Isioma Jessica <br/><br/>  Height: 5\'8.9" FT/IN <br/><br/> Country: Nigeria<p/>');
document.close();

//method three: using window alert. Doesn't output to html, instead pops up as page loads unless otherwise specified
alert('Name: Ekwemuka Isioma Jessica \n\nHeight: 5\'8.9" FT/IN \n\nCountry: Nigeria');