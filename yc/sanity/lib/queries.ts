import { defineQuery } from "next-sanity"


export const STARTUPS_QUERY = defineQuery(
    `
    *[_type=='startup'] | order(_createdAt desc)
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













