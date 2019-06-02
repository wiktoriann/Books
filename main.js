   function getdata()
         {
             
          
          
            var field = $('#inp').val();
            
            if(field == '')
                {
                    alert('What are you looking for? Title field is empty!');
                }
            else
                {
                    var link = '';
                    var covr = '';
                    var desc = '';
                    var ttl = '';
                    
                    
                    $.get('https://www.googleapis.com/books/v1/volumes?q= intitle:' + field, function(response)
                         {
                           for(i=0; i<response.items.length; i++)
                               {
                                   
                                   ttl = $('<div class="content"><div class="header">' + response.items[i].volumeInfo.title + '</div>');
                                   desc = $('<div class="desc">' + response.items[i].volumeInfo.description + '</div>');
                                   link = response.items[i].volumeInfo.imageLinks.thumbnail;
                                   covr = $('<div class="cov"><img src="' + link + '"</div></div>');
                                   
                    
                                      
                                   
                                           
                                                
                                                ttl.appendTo('#serc_result');
                                                desc.appendTo('#serc_result');
                                                covr.appendTo('#serc_result');
                                            
                                   
                                        
                                   
                               }
                         });
                    
                    
                }
            
            
        }
