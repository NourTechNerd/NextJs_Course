import { defineField,defineType } from "sanity";

export const startup = defineType(
    {
        name:"startup",
        title:"Startup",
        type:"document",
        fields:[
            defineField({
                name :'title',
                type:'string',
            }),  
            defineField({
                name :'slug', // Sanity will generate a unique identifier based on the title.
                type:'slug', // A specila data type of Sanity.
                options:{
                    source:'title'
                }
            }),
           defineField({
                name :'Author',
                type:'reference',
                to : {type :'author'}
            }),                       
            defineField({
                name :'views',
                type:'number',
            }),
            defineField({
                name :'description',
                type:'text',
            }),
            defineField({
                name :'category',
                type:'string',
                validation:(Rule) => Rule.min(1).max(20).required().error("Please enter a category")
            }),
            defineField({
                name :'image',
                type:'url',
                validation:(Rule)=> Rule.required().error("Please add an image")
            }),
            defineField({
                name :'Pitch',
                type:'markdown',
            }),
        ],

    }
)



