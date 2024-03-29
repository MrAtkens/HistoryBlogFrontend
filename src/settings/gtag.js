export const GA_TRACKING_ID = process.env.gtag

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    console.log(GA_TRACKING_ID)
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    console.log(GA_TRACKING_ID)
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}
