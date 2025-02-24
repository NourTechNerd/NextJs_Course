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
                Pitch,
                category
            }
    `
)

// 2h:36min













