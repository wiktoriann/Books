  function getdata()

                {
          
            var field = $('#inp').val();
            
            if(field == '')
                {
                    alert('Czego szukasz? Nie podano żadnej frazy!');
                }
            else
                {
                    var link = '';
                    var covr = '';
                    var desc = '';
                    var ttl = '';
                    var und = 'Ta książka nie ma jeszcze opisu :c';
                    
                    $.get('https://www.googleapis.com/books/v1/volumes?q= intitle:' + field, function(response)
                         {
                           for(i=0; i<response.items.length; i++)
                               {
                                   
                                   ttl = $('<div class="content"><div class="header">' + response.items[i].volumeInfo.title + '</div>');
                                   desc = $('<div class="desc">' + response.items[i].volumeInfo.description + '</div>');
                                   link = response.items[i].volumeInfo.imageLinks.thumbnail;
                                   covr = $('<div class="cov"><img src="' + link + '" alt="Brak okładki"</div></div>');
                                   var unddisc = $('<div class="desc">' + und + '</div>');
                    
                                       
                                   if(response.items[i].volumeInfo.description === undefined)
                                       {
                                           
                                                
                                                ttl.appendTo('#serc_result');
                                                unddisc.appendTo('#serc_result');
                                                covr.appendTo('#serc_result');
                                   
                                       }
                                   
                                   else
                                       {
                                                ttl.appendTo('#serc_result');
                                                desc.appendTo('#serc_result');
                                                covr.appendTo('#serc_result');
                                       }
                                  
                                   
                                        
                                   
                               }
                         });
                    
                    
                }
       
 
    
  }
  
