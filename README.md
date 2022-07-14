# graphql-demo
graphql demo and getting started guide

## what GraphQL is
GraphQL is a query language which gives the client the power to ask for exactly what they need.

## Setting up a GraphQL server

create a `Javascript's project`

```bash
npm init -y
```

install apollo-server and graphql

```bash
npm install apollo-server graphql
```

run the project

```bash
node index
```

(optional) you can install nodemon. You must modify the pachage.json at the scripts section in order to get a nodemon index command.

```bash
npm install nodemon 
```

and run with

```bash
npm run dev
```


# Key concepts

## Schema
The way our data looks like

> fruits: [String]

## Resolver
It's a groups of functions that return the data

> fruits: () => { return ['banana', 'apple'] }

Based on https://github.com/harblaith7/GraphQL-Course-Udemy