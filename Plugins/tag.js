export default  {
    gtag_report_conversion(url) {
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-10992459924/fmsMCIDjzoUYEJTBzvko',
            'event_callback': callback
        });
        return false;
      }      
}