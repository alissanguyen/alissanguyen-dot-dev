import * as React from 'react';

interface Props {

}

const education = [
    {
        id: 0,
        year: '2024 - Current',
        title: 'Computer Science Major with focus on AI/ML',
        by: "Western Governors University",
        description: "Focused primarily on artificial intelligence and machine learning frameworks such as PyTorch and TensorFlow, as well as language models like LLMs (Large Language Models)."
    },
    {
        id: 1,
        year: '2021 - Current',
        title: "Front-end Engineer & Web Developer",
        by: "at GitHub OpenSource - Seattle, WA",
        description: "Created multiple software applications with React, NextJS, SSR, and experimental UX patterns. Contributed to several open-source repositories on GitHub including Prisma (a GraphQL ORM) and Apple's password manager repo."
    },
    {
        id: 2,
        year: '2023-2024',
        title: "Financial Consultant/Advisor",
        by: "KeyBank - Seattle, WA",
        description: "Assessed and managed clients financial conditions for credit facilities, top performer in the Seattle area within the first quarter. "
    },
    {
        id: 3,
        year: '2019-2021',
        title: "Computer Science & Economics Major",
        by: "Rhodes College - Tennessee, USA",
        description: "Focused primarily on CS courses and gained skills in Python, Java, and OOP."
    }
]

const Education: React.FC<Props> = ({ }) => {
    return (
        <div>
            <p className="MyEducation__Text text-4xl text-textSmColor font-semibold mb-8">My Education</p>
            <div className="line-break-gradient"></div>
            <ul className='Education__ListWrapper flex flex-col gap-6 mt-2 sm:mt-10'>
                {education.map((each) => (
                    <li key={each.id} className="grid sm:grid-cols-6 items-center gap-5 sm:gap-14">
                        <span className="Education__Year Resume__MediumText text-xl font-medium sm:col-span-1">{each.year}</span>
                        <div className="flex flex-col sm:col-span-2">
                            <span className="Education__Title Resume__BigText text-xl font-bold text-textLgColor">{each.title}</span>
                            <span className="Education__Location Resume__MediumText text-lg text-textSmColor">{each.by}</span>
                        </div>
                        <span className="Education__Description Resume__SmallText text-lg sm:col-span-3 text-textSmColor">{each.description}</span>
                        <div className="line-break"></div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Education