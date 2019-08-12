# Esteban Montes test

This is the test for the Gamanza open position. Below are some of the features that I couldn't implement for time reazons.

Please note that I decided to treat this using an MVP approach, so I decided to first implement the required features to make the site work and accomplish a purpose, and then I was going to start adding nice-to-have features to extend its functionality.

## Requirements not implemented

- Load more fuctionality for the characters on the home screen.
- Ordering functionlaity on the characters list.
- Season dropdown filtering on the episodes screen.

## Bugs identified

1. The site is not responsive.
2. If I quickly change the actual screen before the data loading ends, a warning is logged to the console (not a bug). I could have achieved this by adding a mounted ref to the component and check if the component is mounted before changing the state.

## Things I would add with more time

- Finish pending features.
- Character detail modal.
- Episode detail modal.
- Add TypeScript.
- Implement React Suspense.

## Notes

- I've set up a Netlify project to auto-deploy on every push (Continuous Integration), the url is: https://optimistic-borg-e70bad.netlify.com/
