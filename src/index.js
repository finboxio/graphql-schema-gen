import * as graphql from 'graphql'
import parse from './parser'
import createTypeGenerator from './create-type-generator'

const typeGenerator = createTypeGenerator(graphql)

export default function generate_schema (source, implementation) {
  let { objectTypes } = typeGenerator(parse(source), implementation)
  const schema = new graphql.GraphQLSchema({
    query: objectTypes['Query']
  })
  return schema
}
