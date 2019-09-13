import Service from '@ember/service';
import $ from 'jquery';

export default Service.extend({
  getDevices(page,filters){
    //filter=location:12&parent_location=27&filter=connected:false
    if(filters){
      return $.getJSON("https://recruitment-test-api.devsandbox.knetikcloud.com/devices?page="+page+filters);
    }else{
      return $.getJSON("https://recruitment-test-api.devsandbox.knetikcloud.com/devices?page="+page);
    }
  }
});
