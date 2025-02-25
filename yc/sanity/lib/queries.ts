import { defineQuery } from "next-sanity"


export const STARTUPS_QUERY = defineQuery(
    `
    *[_type=='startup' && !defined($search) || title match $search || category match $search || Author->name match $search ] | order(_createdAt desc)
            {
                Author ->{
                            _id,
                            name,
                            image,
                            bio
                        },
                _id,
                title,
                slug,
                image,
                _createdAt,
                views,
                description,
                category
            }
    `
)


export const STARTUP_QUERY = defineQuery(
    `
    *[_type=='startup' && _id==$id ][0] 
            {
                Author ->{
                            _id,
                            name,
                            image,
                            bio,
                            username,
                        },
                _id,
                title,
                slug,
                image,
                _createdAt,
                views,
                description,
                Pitch,
                category
            }
    `
)

export const AUTHOR_BY_GITHUB_ID = defineQuery(
    `
    *[_type == 'author' && id == $id ][0]
    {
    _id,
    id,
    name,
    username,
    email,
    image,
    bio,
    }
    `
)











