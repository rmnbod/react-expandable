export interface TocItem {
    docLink: string
    name: string
    subItems?: TocItem[]
}