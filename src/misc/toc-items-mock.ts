import { TocItem } from "../accordion/model/toc-item";

export const tocItems: TocItem[] = [
    {
        docLink: 'link',
        name: 'Part1'
    },
    {
        docLink: 'link',
        name: 'Part2',
        subItems: [
            {
                docLink: 'link',
                name: 'Chapter1',
            },
            {
                docLink: 'link',
                name: 'Chapter1',
            },
            {
                docLink: 'link',
                name: 'Chapter1',
            },
            {
                docLink: 'link',
                name: 'Chapter1',
            },
            {
                docLink: 'link',
                name: 'Chapter1',
            },
            {
                docLink: 'link',
                name: 'Chapter1',
            },
        ]
    },
    {
        docLink: 'link',
        name: 'Part3'
    },
    {
        docLink: 'link',
        name: 'Part4'
    },
    {
        docLink: 'link',
        name: 'Part5',
        subItems: [
            {
                docLink: 'link',
                name: 'Chapter1',
            },
            {
                docLink: 'link',
                name: 'Chapter1',
            },
            {
                docLink: 'link',
                name: 'Chapter1',
            },
        ]
    },
    {
        docLink: 'link',
        name: 'Part6'
    },
]