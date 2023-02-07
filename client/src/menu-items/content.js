// assets
import { AccountCircleRounded, Article, FeaturedPlayListRounded, FolderOpen, FormatListBulletedRounded, PeopleOutlineRounded, Search } from '@mui/icons-material';

// icons
const icons = {
    Article,
    Search,
    FormatListBulletedRounded,
    FeaturedPlayListRounded,
    AccountCircleRounded,
    PeopleOutlineRounded,
    FolderOpen
};
const content = {
    id: 'group-content',
    title: 'Content',
    type: 'group',
    children: [
        {
            id: 'info',
            title: 'Information',
            type: 'item',
            url: '/info',
            icon: icons.Article,
            breadcrumbs: false,
            level: 1,
        },
        {
            id: 'Matrix',
            title: 'Matrix',
            type: 'item',
            url: '/matrix',
            icon: icons.PeopleOutlineRounded,
            breadcrumbs: false,
            level: 1,
        },
        // {
        //     id: 'radio',
        //     title: 'Radio',
        //     type: 'item',
        //     url: '/radio',
        //     icon: icons.Radio,
        //     breadcrumbs: false,
        //     level: 1,
        // },
        {
            id: 'find_collapse',
            title: 'FIND ',
            type: 'collapse',
            url: '/studies',
            icon: icons.Search,
            breadcrumbs: false,
            level: 1,
            children: [
                {
                    id: 'Cv003',
                    title: 'Cv003',
                    type: 'item',
                    url: '/Cv003',
                    icon: icons.FormatListBulletedRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'Cv009',
                    title: 'Cv009',
                    type: 'item',
                    url: '/Cv009',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'Cv010',
                    title: 'Cv010',
                    type: 'item',
                    url: '/Cv010',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                } 
            ]
        },
        {
            id: 'aslm_collapse',
            title: 'ASLM ',
            type: 'collapse',
            url: '/aslm',
            icon: icons.FolderOpen,
            breadcrumbs: false,
            level: 1,
            children: [
                {
                    id: 'CV003',
                    title: 'CV003',
                    type: 'item',
                    url: '/aslm/program_lineup',
                    icon: icons.FormatListBulletedRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'CV009',
                    title: 'CV009',
                    type: 'item',
                    url: '/aslm/programs',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'CV010',
                    title: 'CV010',
                    type: 'item',
                    url: '/aslm/programs',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                } 
            ]
        }

    ]
};

export default content;
