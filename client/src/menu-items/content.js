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
            id: 'participant',
            title: 'Participant',
            type: 'item',
            url: '/participant',
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
                    id: 'CV001',
                    title: 'CV001',
                    type: 'item',
                    url: '/studies/program_lineup',
                    icon: icons.FormatListBulletedRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'CV002',
                    title: 'CV002',
                    type: 'item',
                    url: '/studies/programs',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'CV003',
                    title: 'CV003',
                    type: 'item',
                    url: '/studies/programs',
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
