import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  api: service('api'),
  current_page:1,
  filters:"",
  filter_type:"connected",
  init: function(){
    this._super(...arguments);
    let component = this;
    component.devices = [];
    this.api.getDevices(1).then(function(devices){
      for(var i = 0; i< devices.content.length; i++){
          var device = devices.content[i];
          component.devices.pushObject(device);
      }
    });//page 1
  },
  actions: {
    nextPage() {
      let component = this;

      component.set('current_page',component.current_page + 1);
      if(component.filters != ""){
        this.api.getDevices(component.current_page,component.filters).then(function(devices){
          if(devices.content.length > 0){
            component.devices.clear();
            for(var i = 0; i< devices.content.length; i++){
                var device = devices.content[i];
                component.devices.pushObject(device);
            }
          }else{
            component.set('current_page',component.current_page - 1);
          }
        })
      }else{
        this.api.getDevices(component.current_page).then(function(devices){
          if(devices.content.length > 0){
            component.devices.clear();
            for(var i = 0; i< devices.content.length; i++){
                var device = devices.content[i];
                component.devices.pushObject(device);
            }
          }else{
            component.set('current_page',component.current_page - 1);
          }
        })
      }

    },
    previousPage(){
      let component = this;
      if(component.current_page - 1 > 0){

        component.set('current_page',component.current_page - 1);
        if(component.filters != ""){
          this.api.getDevices(component.current_page,component.filters).then(function(devices){
            if(devices.content.length > 0){
              component.devices.clear();
              for(var i = 0; i< devices.content.length; i++){
                  var device = devices.content[i];
                  component.devices.pushObject(device);
              }
            }else{
              component.set('current_page',component.current_page + 1);
            }
          });
        }else{
          this.api.getDevices(component.current_page).then(function(devices){
            if(devices.content.length > 0){
              component.devices.clear();
              for(var i = 0; i< devices.content.length; i++){
                  var device = devices.content[i];
                  component.devices.pushObject(device);
              }
            }else{
              component.set('current_page',component.current_page + 1);
            }
          });
        }

      }

    },
    //filters
    applyFilters(){
      let component = this;

      let filters = "&";
      filters += "filter="+this.get('filter_type')+":"+this.get('cfilter');

      component.filters = filters;
      this.api.getDevices(component.current_page,filters).then(function(devices){
        component.devices.clear();
        for(var i = 0; i< devices.content.length; i++){
            var device = devices.content[i];
            component.devices.pushObject(device);
        }
      });//page 1
    },
    updateSelectedFilter(x){
      this.set('filter_type',x);
    }
  }
});
