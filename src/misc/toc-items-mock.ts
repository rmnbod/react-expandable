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
                name: 'Chapter2',
            },
            {
                docLink: 'link',
                name: 'Chapter3',
            },
            {
                docLink: 'link',
                name: 'Chapter4',
            },
            {
                docLink: 'link',
                name: 'Chapter5',
            },
            {
                docLink: 'link',
                name: 'Chapter6',
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
                name: 'Chapter2',
            },
            {
                docLink: 'link',
                name: 'Chapter3',
            },
        ]
    },
    {
        docLink: 'link',
        name: 'Part6'
    },
]