const { gql } = require("apollo-server")

// [String!]! thats mean the arrays can contain null or can be null
exports.typeDefs = gql`
    type Query {
        hello: String,
        bye: String,
        hellos: [String] 
        products(filter: ProductsFilterInput): [Product!]! 
        product(id: ID!): Product
        categories: [Category]!
        category(id: ID!): Category!
    }

    type Product {
        id: ID!
        name: String,
        description: String,
        quantity: Int,
        price: Float,
        onSale: Boolean,
        category: Category,
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!,
        products(filter: ProductsFilterInput): [Product!]! 
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        Comment: String!
        Rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }
`