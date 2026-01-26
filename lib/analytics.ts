export function trackEvent(eventName: string, payload?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  console.log('Analytics Event:', eventName, payload);
  
  // Integrate your analytics provider here:
  // Google Analytics: gtag('event', eventName, payload);
  // Mixpanel: mixpanel.track(eventName, payload);
  // Segment: analytics.track(eventName, payload);
  // Plausible: plausible(eventName, { props: payload });
}
