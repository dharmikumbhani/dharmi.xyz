+++
title = "Innovating on Farcaster with Channel Community Tokens and finding right balance between utility and financialization"
date = 2019-11-27
+++

Pump.fun, Token Bonding Curves, Community, Tokens Launches, etc are all the talks of the town. But crypto from the first time i read about blockchain is all about removing th middleman and building sustainable platforms using crypto rails.
With this thought i write this to formulat, or atleast attemp to formulate a framework for decentralized marketplaces and communities where the token isnt only about speculation but is backed by ownership of a organisation and instead of anyone having a chance to buy their way up to ownership, it needs to be earned by your contribution.
These topics have been talked about before and insomecases even worked but I feel we are now at a point where this is truly possible to know someones reputation and contribution in a community all whislt calculating the quantitate and all of the ephimeral qualitative values too.

Disclaimer: A lot of what i write here is my thoughts remixed from a a lot peoples previous thoughts and articles all which will be linked below.
Before i write about the framework, i would live to mention a few terms and relevant protocols that will be crucial to understand as they will be used as the underlying tech to make it all possible.

1. OpenRank Protocol: A decentralised reputation protocol that calculates reputations of users/eoa based on any given context and peer to peer interactions. It works on the concept of eigen trust aka pagerank where in you pick a set of seed peers and bring in all the dataset of interactions as the local trust. it run the algo and produces scores and rankings for each of the user/eoa for that context.
2. Farcaster Protocol: A decentralised social protocol that allows anyone to post data onchain along with that bring twitter like functionality to like, reply, recast, mention and much more available on the protocol layer which will be the backbone of all of the data and interactions.
3. Channels: For this use case we are going to limit the scope of the context to be a channel within farcaster. think about channels as a shared group with common interests/topics/ideas, etc. but channels on farcaster become the place to build your community and interact with other members of that community.

Now that thats out of the way, lets get to the main topic of this post, the framework.
Davids blogpost talks about tokens in a form of ownership

On exploring more in this framework, We can broadly classify the tokenomics of a channel including points/scores (which are the reputation scores based on your activity within a channel and how many other popular people within the channel interact with you) and the second is the actual transferrable tokens that can be used to buy/sell/trade/etc with other members of the community.

The tokenomics of a channel is based on the following:
1. Points: Points are the reputation score (non transferrable parts) of a user within a channel. It is calculated based on the interactions of the user with other members of the channel and the overall popularity of the channel.
2. Tokens: Tokens are the actual tokens that can be used to buy/sell/trade/etc with other members of the community.

Taking inspiration from pumpdotfun this model skipps presales or any kind of early member/team allocations 

## Points
To start of with Points, the article explains how the community owner decides who get how many tokens, however there are problems with this approach.
1. The community/channel owner deciding to give out points to everyone in the community, adds subjectiveness and bias to they system which can come into play in the future.
2. Having to manualy distribute points is cumbersome and time consuming.

Instead we think a good way to start with the points system is to automate it using the OpenRank score, OpenRank scores (already live with 1500+ channels) take all interactions within the channel into account and calculate the score for each user. This score will be the backbone in deciding who gets how many points.

We want to distribute points

## Tokens
### Distribution
100% of the tokens are sold through the bonding curve, ensuring no unfair advantage.
### Bonding Curve 
is a mathematical concept that defines the relationship between the price and supply of an asset.



### Making money
1. Miniting fee (0.0002ETH) for each channel token creation



There is precedence of other Airdrops happeneing using our scores like
1. Degen
2. Superrare
3. StokeFire
4. Bonsai
5. etc