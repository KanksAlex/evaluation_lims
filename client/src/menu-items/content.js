// assets
import { AccountCircleRounded, Article, FeaturedPlayListRounded, FormatListBulletedRounded, PeopleOutlineRounded, Radio } from '@mui/icons-material';

// icons
const icons = {
    Article,
    Radio,
    FormatListBulletedRounded,
    FeaturedPlayListRounded,
    AccountCircleRounded,
    PeopleOutlineRounded
};
const content = {
    id: 'group-content',
    title: 'Content',
    type: 'group',
    children: [
        {
            id: 'news',
            title: 'Information',
            type: 'item',
            url: '/news',
            icon: icons.Article,
            breadcrumbs: false,
            level: 1,
        },
        {
            id: 'Participant',
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
            id: 'radio_collapse',
            title: 'FIND ',
            type: 'collapse',
            url: '/studies',
            icon: icons.Radio,
            breadcrumbs: false,
            level: 1,
            children: [
                {
                    id: 'CV001',
                    title: 'CV001',
                    type: 'item',
                    url: '/radio/program_lineup',
                    icon: icons.FormatListBulletedRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'CV002',
                    title: 'CV002',
                    type: 'item',
                    url: '/radio/programs',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'CV003',
                    title: 'CV003',
                    type: 'item',
                    url: '/radio/programs',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                } 
            ]
        },
        {
            id: 'radio_collapse',
            title: 'ASLM ',
            type: 'collapse',
            url: '/studies',
            icon: icons.Radio,
            breadcrumbs: false,
            level: 1,
            children: [
                {
                    id: 'CV003',
                    title: 'CV003',
                    type: 'item',
                    url: '/radio/program_lineup',
                    icon: icons.FormatListBulletedRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'CV009',
                    title: 'CV009',
                    type: 'item',
                    url: '/radio/programs',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'CV010',
                    title: 'CV010',
                    type: 'item',
                    url: '/radio/programs',
                    icon: icons.FeaturedPlayListRounded,
                    breadcrumbs: false,
                    level: 2
                } 
            ]
        }

    ]
};

export default content;
