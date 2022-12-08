---
title: 'Quality of Life Improvement'
date: '2022-12-09'
---


Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.


----
> note: (S)EIS refers to a government scheme that allows UK tax payers (ie our LPs) to benefit from various tax reliefs when investing in eligible UK early stage businesses. This will be important once we come to the template later.

## Storytime

When [Ascension](https://ascension.vc) started, it was a small and dynamic team made up of just two partners. Static spreadsheets were the logical choice to manage everything. This was being owned and managed by one of the partners and whenever the other partner wanted to see an update, it was easy enough to send over email. This spreadsheet was used to manage both LPs in the fund (ie. how much invested and then how much allocated to each company within portfolio) as well as the investments themselves. - more specifically you had one spreadsheet for the fund -> this was structured with an overview tab for all the investors (with addresses and phone numbers), then tabs for each of the portfolio companies and how much each investor was allocated of that company).

When it came to reporting, it wasn’t ideal, but it wasn’t too much of a challenge to put together a new spreadsheet for each investor (approx 25 investors) and copy in the relevant data (amount invested number of shares and then current share prices etc.)

The team successfully deployed the first fund (15 investments) and logically created a new spreadsheet for the next fund - its worth mentioning at this point that it contained several of the same LPs as the first fund. Once this fund was fully deployed, they started to really feel the pain of reporting, as for those who were LPs in both funds, it required pulling in current information from both fund spreadsheets and then pulling in current share price from the master AUM). This became even more complicated when it came to managing deal-by-deal follow on. It’s giving me a headache just thinking about it.

The team has since grown to 10 people and deployed 19 funds (with 180 investments and over 160 unique investors, - many of whom have invested across several funds and participated in follow on rounds as well -> you can imagine the headache then when a reporting request came in -> this would be a minimum half day exercise which would require checks from multiple partners before getting sign off.

### So in summary, we had two main problems:

1. data was scattered across static spreadsheets (1 for each fund, and 1 per investor)
   - we used a master google sheet to store current share prices but again there was a ton of redundant information for companies that had been invested in by multiple funds (new share price would require updating in up to 5 places in some instances - just in the master sheet!)
2. and this leads into the problem that highlights what became the solution -> much of the data was related and therefore redundant across other sheets

So about a month ago (on a Friday no less) - I received the dreaded request that we needed to put together an investor holdings overview sheet (huge bummer). I’ve always looked to automate processes where I can (in most cases spending more time automating than would take to do it manually) but in my head this was worth it. And it was also one that I could see the long-term value from. So I set to looking for a solution (app or a platform) that would solve this -> in the past I had looked at the investor specific tools (carta I think and others) but they were just too expensive (in a lean team like ours, if we want to get budget for a solution, we have to bring something tangible or else it will never be approved - as it should be).

So I set out looking for a database of sorts - dynamic spreadsheets. I eventually landed on Airtable (with its related tables) and excitedly got to building - I stupidly went straight to building without drawing out a schema or anything and quickly realised the scale this project would become…

I ended up working on it the entire weekend (LOL) but by the end I had built exactly what I wanted -> with the click of a button I was able to generate an entire report of an LPs shareholding across funds and follow on investments. I was over the moon - but I also started seeing the other potential that came from having all this data linked together. We could start doing analysis that we were never able to do before -> we work in the tax efficient fund space so we were now able to see how much income tax relief, and loss relief we have been able to provide per LP, per Fund. Not only that, when it comes to having visibility on the portfolio, we can very quickly get an idea of our shareholding value across several investments. The possibilities really become endless. SO yeah…
