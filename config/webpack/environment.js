const { environment } = require('@rails/webpacker')

module.exports = environment

environment.loaders.append('graphql', { test: /\.(graphql|gql)$/,  use: 'graphql-tag/loader', exclude: /node_modules/})
