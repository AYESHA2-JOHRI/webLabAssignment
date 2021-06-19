$(function() {
    $('#add_phone').click(()=>{
        $('.phone').append("<input type='text' class='form-control mt-2'  name='phone[]' placeholder='Phone'>");
    });
 });