import * as rudderanalytics from "rudder-js"
// export const rudderKey = "1WKaMhe9YVnHFwTepoEk0Oqw6cn";
console.log("rudder sdk loaded");
// console.log("rudder sdk key" + rudderKey);

 export function rudderInitialize() {
    rudderanalytics.ready(() => {console.log("we are all set!!!")})
    rudderanalytics.load("1cRgsPdyAzc0W3dlQXzMxzpq0vS", "http://localhost:8080/",{logLevel: "DEBUG", integrations:{All:true}})
}

export function eventIdentify() {
    
    // var rudderanalytics = global.window.rudderanalytics = global.window.rudderanalytics || [];
    var analytics = global.window.analytics = global.window.analytics || [];
    // rudderanalytics.identify("CustomerIO Identify Call from Rudder", {
    //     name: "Sajal Mohanta",
    //     category: "SampleIdentify",
    //     email: "sajal@abc.com",
    //     plan: "Open source",
    //     logins: 5
    // },
    //     {
    //         context: {
    //             ip: '0.0.0.0',
    //         },
    //         page: {
    //             path: 'sdsd',
    //             referrer: 'dsds',
    //             search: 'ssss',
    //             title: 'dddsdsd',
    //             url: 'sdsdsadd'
    //         },
    //          anonymousId: "dsknkcnd",
    //     },{integrations: {All: false, AM: true, GA: true,"hubspot": true,"MixPanel":false}});
        rudderanalytics.identify("Simple_User_identify",{},{},{integrations:{All:false,Hotjar:true}});
        
        analytics.identify("CustomerIO Identify Call from Segment", {
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
        rudderanalytics.page("test4", {"category": "test5"}, {integrations: {All: true, "Keen": true, "GA": true, "BRAZE": true}})
        analytics.page('CustomerIO Application Loaded from Segment',
        {
            path: 'path',
            referrer: 'referrer',
            search: 'search',
            title: 'title',
            url: 'url',
        },
        {
            context: {
                ip: '0.0.0.0'
            },
             anonymousId: '00000000000000000000000000'
        });
    console.log("rudder page call");
}

export function eventTrack() {
    // var rudderanalytics = global.window.rudderanalytics = global.window.rudderanalytics || [];
    var analytics = global.window.analytics = global.window.analytics || [];
    // rudderanalytics.track('Track Call test for CustomerIO from Rudder',
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
    //     });

        
        rudderanalytics.track('Experiment Viewededws',{integrations: {All: false, AM: true, GA: true,"Hubspot": true,"Mixpanel":true}}
        //  {
        //     experiment_id: 'home-page-title-2819',
        //     variation_name: 'Variation 1'
        //   }
          );

        analytics.track('Track Call test for CustomerIO from Segment',
        {
            path: 'path',
            referrer: 'referrer',
            search: 'search',
            title: 'title',
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