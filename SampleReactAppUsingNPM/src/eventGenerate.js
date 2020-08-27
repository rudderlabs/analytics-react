import * as rudderanalytics from "rudder-js"
// export const rudderKey = "1WKaMhe9YVnHFwTepoEk0Oqw6cn";
// console.log("rudder sdk loaded");
// console.log("rudder sdk key" + rudderKey);

 export function rudderInitialize() {
    rudderanalytics.ready(() => {console.log("we are all set!!!")})
    rudderanalytics.load("YOUR_WRITE_KEY", "YOUR_DATAPLANE_URL",{{logLevel: "DEBUG", integrations:{All:true}})
}

export function eventIdentify() {
    
    // var rudderanalytics = global.window.rudderanalytics = global.window.rudderanalytics || [];
    var analytics = global.window.analytics = global.window.analytics || [];
    rudderanalytics.identify("sampleusrRudder", {
        name: "Sajal Mohanta",
        category: "SampleIdentify",
        email: "sajal@abc.com",
        plan: "Open source",
        logins: 5
    },
        {
            context: {
                ip: '0.0.0.0',
            },
            page: {
                path: 'sdsd',
                referrer: 'dsds',
                search: 'ssss',
                title: 'dddsdsd',
                url: 'sdsdsadd'
            },
            //  anonymousId: "dsknkcnd",
        },{integrations: {All: true}});
        // rudderanalytics.identify("Simple_User_identify",{},{},{integrations:{All:true}});
        
        analytics.identify("sampleusrSegment", {
            name: "Sajal Mohanta",
            category: "SampleIdentify",
            email: "sajal@abc.com",
            plan: "Open source",
            logins: 5
        },
            {
                context: {
                    ip: '0.0.0.0',
                },
                page: {
                    path: 'sdsd',
                    referrer: 'dsds',
                    search: 'ssss',
                    title: 'dddsdsd',
                    url: 'sdsdsadd'
                },
                 anonymousId: "dsknkcnd",
            });
    console.log("rudder identify call");
}

export function eventPage() {
    // var rudderanalytics = global.window.rudderanalytics = global.window.rudderanalytics || [];
    var analytics = global.window.analytics = global.window.analytics || [];
    // rudderanalytics.page('CustomerIO Application Loaded from Rudder',
    //     {
    //         path: 'path',
    //         referrer: 'referrer',
    //         search: 'search',
    //         title: 'title',
    //         url: 'url',
    //     },
    //     {
    //         context: {
    //             ip: '0.0.0.0'
    //         },
    //          anonymousId: '00000000000000000000000000'
    //     },{integrations: {All: false, "Keen": true, "GA": true, "BRAZE": true}});
        // rudderanalytics.page("test4", {"category": "test4"}, {integrations: {All: true, BigQuery: false,  GA: false, "FB_PIXEL": false, "Keen": false}})
        rudderanalytics.page(
            "Cart",
            "Cart Viewed",
            {
              path:  "xcx123",
              referrer:  "xc dd",
              search:  "sefsefes",
              title:  "edwewde",
              url:  "wedwedewdew"
            },
            {
              context: {
                ip:  "0.0.0.0"
              },
              anonymousId:  "xx"
            }, 
            () => {console.log("in page call");}
          );
        // analytics.page('Application Loaded from Segment',
        // {
        //     path: 'path',
        //     referrer: 'referrer',
        //     search: 'search',
        //     title: 'title',
        //     url: 'url',
        // },
        // {
        //     context: {
        //         ip: '0.0.0.0'
        //     },
        //      anonymousId: '00000000000000000000000000'
        // });
    console.log("rudder page call");
}

export function eventTrack() {
    // var rudderanalytics = global.window.rudderanalytics = global.window.rudderanalytics || [];
    var analytics = global.window.analytics = global.window.analytics || [];
    rudderanalytics.track('product removed',
        {
            path: 'path',
            referrer: 'referrer',
            search: 'search',
            "KEY_3" : {
                "CHILD_KEY_4" : "value_3",
                "CHILD_KEY_5" : "value_4",
             },
            title: 'title',
            url: 'url',
                "total": 1009,
            "products": [
            {
                "product_id": "507f1f77bcf86cd79943901ghh1",
                "sku": "45790-38",
                "name": "Monopoly: 7rd Edition",
                "price": "19",
                "position": "1",
                "category": "Cars",
                "quantity": "4",
                "url": "https://www.example.com/product/path",
                "image_url": "https://www.example.com/product/path.jpg"
            },
            {
                "product_id": "507f1f77bcf86cd79943901gth1",
                "sku": "45790-39",
                "name": "Monopoly: 8th Edition",
                "price": "19",
                "quantity": "2",
                "position": "1",
                "category": "Cars",
                "url": "https://www.example.com/product/path",
                "image_url": "https://www.example.com/product/path.jpg"
            }
            ]
            
        },
        {
            context: {
                ip: '0.0.0.0'
            },
            //  anonymousId: '00000000000000000000000000'
        });


      


        
        // rudderanalytics.track('Experiment Viewededws',{integrations: {All: true}}
        //  {
        //     experiment_id: 'home-page-title-2819',
        //     variation_name: 'Variation 1'
        //   }
        //   );

        analytics.track('Track Call test for Iterable from Segment',
        {
            path: 'path',
            referrer: 'referrer',
            search: 'search',
            title: 'title',
            "KEY_3" : {
                "CHILD_KEY_4" : "value_3",
                "CHILD_KEY_5" : "value_4",
             },
            url: 'url',
        },
        {
            context: {
                ip: '0.0.0.0'
            },
             anonymousId: '00000000000000000000000000'
        });

        // rudderanalytics.alias("new-user-id");
        // analytics.alias("new-user-id");


        // analytics.track('Track Call2',
        // {
        //     path: '',
        //     referrer: '',
        //     search: '',
        //     title: '',
        //     url: '',
        // },
        // {
        //     context: {
        //         ip: '0.0.0.0'
        //     },
        // });
    console.log("rudder track call");
}
