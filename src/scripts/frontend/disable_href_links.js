export function disable_create_new_destination(index){
  alert(index)
  $(document).on('click','#drive_link',function(e){
    e.preventDefault();
  })
}

export function disable_package_image_uploader(){
  $(document).on('click','#package_image_uploader',function(e){
    e.preventDefault();
  })
}