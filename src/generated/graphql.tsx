import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type Block = {
   __typename?: 'Block',
  _id: Scalars['ID'],
  index: Scalars['Int'],
  timestamp: Scalars['String'],
  data: Scalars['String'],
  prevHash: Scalars['String'],
  hash: Scalars['String'],
  password: Scalars['String'],
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  signin?: Maybe<ReturnedUser>,
  login?: Maybe<ReturnedUser>,
  createBlock: Block,
};


export type MutationSigninArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationCreateBlockArgs = {
  data: Scalars['String'],
  token: Scalars['String'],
  privateKey: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  users?: Maybe<Array<ReturnedUser>>,
  blocks?: Maybe<Array<Block>>,
  block: Block,
};


export type QueryBlocksArgs = {
  token: Scalars['String']
};


export type QueryBlockArgs = {
  id: Scalars['ID'],
  token: Scalars['String'],
  password: Scalars['String']
};

export type ReturnedUser = {
   __typename?: 'ReturnedUser',
  _id: Scalars['ID'],
  email: Scalars['String'],
  publicKey: Scalars['String'],
  privateKey: Scalars['String'],
  token: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  _?: Maybe<Scalars['Boolean']>,
};


export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  password: Scalars['String'],
};


