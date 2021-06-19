$( document ).ready(function() {
  
    const editProfile=$('#edit-profile');
    const saveProfile=$('#save-profile');

    const addContent=$('#add-content');
    const addContent2=$('#add-content2');
    const addCourse=$('#add-course');

    const profileDescription=$('#profile-description');
    const profileForm=$('#profile-form');

    const contentForm=$('#content-form');
    const addContentContainer=$('#add-content-container');
    const contentContainer=$('#content-container');

    $(editProfile).on('click',()=>{
      profileDescription.addClass('uk-hidden');
      profileForm.removeClass('uk-hidden');
      UIkit.switcher('.dashboard-tab').show(0);
    });

    $(saveProfile).on('click',()=>{
        profileForm.addClass('uk-hidden');
        profileDescription.removeClass('uk-hidden');
      });

      $(addContent).on('click',()=>{
        addContentContainer.addClass('uk-hidden');
        contentContainer.addClass('uk-hidden');
        contentForm.removeClass('uk-hidden');
        UIkit.switcher('.dashboard-tab').show(1);  
      });

      $(addContent2).on('click',()=>{
        addContentContainer.addClass('uk-hidden');
        contentContainer.addClass('uk-hidden');
        contentForm.removeClass('uk-hidden');
      });

      $(addCourse).on('click',()=>{
        contentForm.addClass('uk-hidden');
        contentContainer.removeClass('uk-hidden');
      });


      // ! content table

      const addContentTable=$('#add-content-table');
      

      const contentInfoContainer=$('#content-info-container');
      const contentTableContainer=$('#content-table-container');

    

     
      
      $(addContentTable).on('click',()=>{

        let inputTitle=$('#title-content').val();
        let inputDuration=$('#duration-content').val();
        let inputUrl=$('#video').val();

        contentTableContainer.removeClass('uk-hidden');
        
        contentInfoContainer.append(`<tr id="content-element">
        <td>${inputTitle}</td>
        <td>${inputUrl}</td>
        <td>${inputDuration}</td>
        <td><button id="remove-content" class="uk-button uk-button-default" type="button">remove</button></td>
    </tr>`);
      });
   
      $(document).on('click','#remove-content',()=>{
        console.log('btn clicked');
        $('#content-element').remove();
        if(contentInfoContainer.children().length > 0 ){
          contentTableContainer.removeClass('uk-hidden');
        }
   
      });

      $('#category-name').html($('#categorie-list ul li a').first().html());


      $(document).on('click','#categorie-list ul li',function(){
        let categoryName=$('#category-name');
        
        let categoryValue=$(this).children().html();
        $(categoryName).html(categoryValue);
     
        $('#categorie-list ul li').removeClass('active');
        $('#categorie-list ul li a').removeClass('active');
        $('#categorie-list ul li span').removeClass('active');
    
        $(this).addClass('active');
        $(this).children().addClass('active');
    
      });

      $(".search-form").on('submit',function(e) {
        e.preventDefault();
        let searchName=$('#search-name');
        let searchValue=$('.search-value').val();
        $(searchName).html(searchValue);
        
    })


     

  });
 