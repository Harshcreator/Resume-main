---
title: "Runes Dashboard"
description: "A web-based dashboard for managing Runes activity for a specific address."
date: "Nov 28 2024"
demoURL: ""
repoURL: "https://github.com/Harshcreator/runes-dashboard"
---

## Tools Used

To learn more about Hiro's Runes APIs:

- [Hiro Documentation](https://docs.hiro.so/bitcoin/runes/api) - learn about the different Runes API endpoints.
- [Hiro Blog](https://www.hiro.so/blog/introducing-the-runes-api) - learn about why Hiro built the Runes API endpoints.
- [Runehook](https://github.com/hirosystems/runehook) - learn about the mechanics behind the Runes API endpoints.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Stacks Connect:

- [Stacks Connect Docs](https://docs.hiro.so/stacks/connect) - learn how you can connect Bitcoin Web3 wallets, such as [Leather](https://leather.io) to your app.

## Future Enhancements

- Add connect compatibility with other Bitcoin wallets
- Implement incrementation of `offset` query parameter if `results` returned from API endpoints are greater than 60.
- Implement new cards or route segments for viewing data from other Runes API endpoints such as:
  - Get rune holders `/runes/v1/etchings/{etching}/holders`
  - Get all activity for a rune `/runes/v1/etchings/{etching}/activity`
  - Get etchings `/runes/v1/etchings`
- Display market price of a rune
- A separate but similar dashboard for Ordinals data using Hiro's [Ordinals API](https://docs.hiro.so/bitcoin/ordinals/api).

## Meta 

Harshcreator (harshsingh220603@gmail.com)