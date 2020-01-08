module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateResumeReview {
  count: Int!
}

type AggregateReviewerListing {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createResumeReview(data: ResumeReviewCreateInput!): ResumeReview!
  updateResumeReview(data: ResumeReviewUpdateInput!, where: ResumeReviewWhereUniqueInput!): ResumeReview
  updateManyResumeReviews(data: ResumeReviewUpdateManyMutationInput!, where: ResumeReviewWhereInput): BatchPayload!
  upsertResumeReview(where: ResumeReviewWhereUniqueInput!, create: ResumeReviewCreateInput!, update: ResumeReviewUpdateInput!): ResumeReview!
  deleteResumeReview(where: ResumeReviewWhereUniqueInput!): ResumeReview
  deleteManyResumeReviews(where: ResumeReviewWhereInput): BatchPayload!
  createReviewerListing(data: ReviewerListingCreateInput!): ReviewerListing!
  updateReviewerListing(data: ReviewerListingUpdateInput!, where: ReviewerListingWhereUniqueInput!): ReviewerListing
  updateManyReviewerListings(data: ReviewerListingUpdateManyMutationInput!, where: ReviewerListingWhereInput): BatchPayload!
  upsertReviewerListing(where: ReviewerListingWhereUniqueInput!, create: ReviewerListingCreateInput!, update: ReviewerListingUpdateInput!): ReviewerListing!
  deleteReviewerListing(where: ReviewerListingWhereUniqueInput!): ReviewerListing
  deleteManyReviewerListings(where: ReviewerListingWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  resumeReview(where: ResumeReviewWhereUniqueInput!): ResumeReview
  resumeReviews(where: ResumeReviewWhereInput, orderBy: ResumeReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ResumeReview]!
  resumeReviewsConnection(where: ResumeReviewWhereInput, orderBy: ResumeReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResumeReviewConnection!
  reviewerListing(where: ReviewerListingWhereUniqueInput!): ReviewerListing
  reviewerListings(where: ReviewerListingWhereInput, orderBy: ReviewerListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReviewerListing]!
  reviewerListingsConnection(where: ReviewerListingWhereInput, orderBy: ReviewerListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewerListingConnection!
  node(id: ID!): Node
}

type ResumeReview {
  id: ID!
  coach: String!
  seeker: String!
  name: String!
  isPending: Boolean!
  isAccepted: Boolean!
  isDenied: Boolean!
  isComplete: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
  dateRequested: DateTime
  dateAccepted: DateTime
  dateCompleted: DateTime
}

type ResumeReviewConnection {
  pageInfo: PageInfo!
  edges: [ResumeReviewEdge]!
  aggregate: AggregateResumeReview!
}

input ResumeReviewCreateInput {
  id: ID
  coach: String!
  seeker: String!
  name: String!
  isPending: Boolean!
  isAccepted: Boolean!
  isDenied: Boolean!
  isComplete: Boolean!
  dateRequested: DateTime
  dateAccepted: DateTime
  dateCompleted: DateTime
}

type ResumeReviewEdge {
  node: ResumeReview!
  cursor: String!
}

enum ResumeReviewOrderByInput {
  id_ASC
  id_DESC
  coach_ASC
  coach_DESC
  seeker_ASC
  seeker_DESC
  name_ASC
  name_DESC
  isPending_ASC
  isPending_DESC
  isAccepted_ASC
  isAccepted_DESC
  isDenied_ASC
  isDenied_DESC
  isComplete_ASC
  isComplete_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  dateRequested_ASC
  dateRequested_DESC
  dateAccepted_ASC
  dateAccepted_DESC
  dateCompleted_ASC
  dateCompleted_DESC
}

type ResumeReviewPreviousValues {
  id: ID!
  coach: String!
  seeker: String!
  name: String!
  isPending: Boolean!
  isAccepted: Boolean!
  isDenied: Boolean!
  isComplete: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
  dateRequested: DateTime
  dateAccepted: DateTime
  dateCompleted: DateTime
}

type ResumeReviewSubscriptionPayload {
  mutation: MutationType!
  node: ResumeReview
  updatedFields: [String!]
  previousValues: ResumeReviewPreviousValues
}

input ResumeReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ResumeReviewWhereInput
  AND: [ResumeReviewSubscriptionWhereInput!]
  OR: [ResumeReviewSubscriptionWhereInput!]
  NOT: [ResumeReviewSubscriptionWhereInput!]
}

input ResumeReviewUpdateInput {
  coach: String
  seeker: String
  name: String
  isPending: Boolean
  isAccepted: Boolean
  isDenied: Boolean
  isComplete: Boolean
  dateRequested: DateTime
  dateAccepted: DateTime
  dateCompleted: DateTime
}

input ResumeReviewUpdateManyMutationInput {
  coach: String
  seeker: String
  name: String
  isPending: Boolean
  isAccepted: Boolean
  isDenied: Boolean
  isComplete: Boolean
  dateRequested: DateTime
  dateAccepted: DateTime
  dateCompleted: DateTime
}

input ResumeReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  coach: String
  coach_not: String
  coach_in: [String!]
  coach_not_in: [String!]
  coach_lt: String
  coach_lte: String
  coach_gt: String
  coach_gte: String
  coach_contains: String
  coach_not_contains: String
  coach_starts_with: String
  coach_not_starts_with: String
  coach_ends_with: String
  coach_not_ends_with: String
  seeker: String
  seeker_not: String
  seeker_in: [String!]
  seeker_not_in: [String!]
  seeker_lt: String
  seeker_lte: String
  seeker_gt: String
  seeker_gte: String
  seeker_contains: String
  seeker_not_contains: String
  seeker_starts_with: String
  seeker_not_starts_with: String
  seeker_ends_with: String
  seeker_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  isPending: Boolean
  isPending_not: Boolean
  isAccepted: Boolean
  isAccepted_not: Boolean
  isDenied: Boolean
  isDenied_not: Boolean
  isComplete: Boolean
  isComplete_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  dateRequested: DateTime
  dateRequested_not: DateTime
  dateRequested_in: [DateTime!]
  dateRequested_not_in: [DateTime!]
  dateRequested_lt: DateTime
  dateRequested_lte: DateTime
  dateRequested_gt: DateTime
  dateRequested_gte: DateTime
  dateAccepted: DateTime
  dateAccepted_not: DateTime
  dateAccepted_in: [DateTime!]
  dateAccepted_not_in: [DateTime!]
  dateAccepted_lt: DateTime
  dateAccepted_lte: DateTime
  dateAccepted_gt: DateTime
  dateAccepted_gte: DateTime
  dateCompleted: DateTime
  dateCompleted_not: DateTime
  dateCompleted_in: [DateTime!]
  dateCompleted_not_in: [DateTime!]
  dateCompleted_lt: DateTime
  dateCompleted_lte: DateTime
  dateCompleted_gt: DateTime
  dateCompleted_gte: DateTime
  AND: [ResumeReviewWhereInput!]
  OR: [ResumeReviewWhereInput!]
  NOT: [ResumeReviewWhereInput!]
}

input ResumeReviewWhereUniqueInput {
  id: ID
}

type ReviewerListing {
  id: ID!
  coachID: String
  price: Int
  position: String
  industry: String
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  company: String
  isPublished: Boolean!
}

type ReviewerListingConnection {
  pageInfo: PageInfo!
  edges: [ReviewerListingEdge]!
  aggregate: AggregateReviewerListing!
}

input ReviewerListingCreateInput {
  id: ID
  coachID: String
  price: Int
  position: String
  industry: String
  description: String!
  company: String
  isPublished: Boolean
}

type ReviewerListingEdge {
  node: ReviewerListing!
  cursor: String!
}

enum ReviewerListingOrderByInput {
  id_ASC
  id_DESC
  coachID_ASC
  coachID_DESC
  price_ASC
  price_DESC
  position_ASC
  position_DESC
  industry_ASC
  industry_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  company_ASC
  company_DESC
  isPublished_ASC
  isPublished_DESC
}

type ReviewerListingPreviousValues {
  id: ID!
  coachID: String
  price: Int
  position: String
  industry: String
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  company: String
  isPublished: Boolean!
}

type ReviewerListingSubscriptionPayload {
  mutation: MutationType!
  node: ReviewerListing
  updatedFields: [String!]
  previousValues: ReviewerListingPreviousValues
}

input ReviewerListingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewerListingWhereInput
  AND: [ReviewerListingSubscriptionWhereInput!]
  OR: [ReviewerListingSubscriptionWhereInput!]
  NOT: [ReviewerListingSubscriptionWhereInput!]
}

input ReviewerListingUpdateInput {
  coachID: String
  price: Int
  position: String
  industry: String
  description: String
  company: String
  isPublished: Boolean
}

input ReviewerListingUpdateManyMutationInput {
  coachID: String
  price: Int
  position: String
  industry: String
  description: String
  company: String
  isPublished: Boolean
}

input ReviewerListingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  coachID: String
  coachID_not: String
  coachID_in: [String!]
  coachID_not_in: [String!]
  coachID_lt: String
  coachID_lte: String
  coachID_gt: String
  coachID_gte: String
  coachID_contains: String
  coachID_not_contains: String
  coachID_starts_with: String
  coachID_not_starts_with: String
  coachID_ends_with: String
  coachID_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  position: String
  position_not: String
  position_in: [String!]
  position_not_in: [String!]
  position_lt: String
  position_lte: String
  position_gt: String
  position_gte: String
  position_contains: String
  position_not_contains: String
  position_starts_with: String
  position_not_starts_with: String
  position_ends_with: String
  position_not_ends_with: String
  industry: String
  industry_not: String
  industry_in: [String!]
  industry_not_in: [String!]
  industry_lt: String
  industry_lte: String
  industry_gt: String
  industry_gte: String
  industry_contains: String
  industry_not_contains: String
  industry_starts_with: String
  industry_not_starts_with: String
  industry_ends_with: String
  industry_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  company: String
  company_not: String
  company_in: [String!]
  company_not_in: [String!]
  company_lt: String
  company_lte: String
  company_gt: String
  company_gte: String
  company_contains: String
  company_not_contains: String
  company_starts_with: String
  company_not_starts_with: String
  company_ends_with: String
  company_not_ends_with: String
  isPublished: Boolean
  isPublished_not: Boolean
  AND: [ReviewerListingWhereInput!]
  OR: [ReviewerListingWhereInput!]
  NOT: [ReviewerListingWhereInput!]
}

input ReviewerListingWhereUniqueInput {
  id: ID
  coachID: String
}

type Subscription {
  resumeReview(where: ResumeReviewSubscriptionWhereInput): ResumeReviewSubscriptionPayload
  reviewerListing(where: ReviewerListingSubscriptionWhereInput): ReviewerListingSubscriptionPayload
}
`
      }
    