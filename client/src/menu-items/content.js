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
            title: 'News',
            type: 'item',
            url: '/news',
            icon: icons.Article,
            breadcrumbs: false,
            level: 1,
        },
        {
            id: 'staff',
            title: 'Staff',
            type: 'item',
            url: '/staff',
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
            title: 'Radio',
            type: 'collapse',
            url: '/radio',
            icon: icons.Radio,
            breadcrumbs: false,
            level: 1,
            children: [
                {
                    id: 'program_lineup',
                    title: 'Program Lineup',
                    type: 'item',
                    url: '/radio/program_lineup',
                    icon: icons.FormatListBulletedRounded,
                    breadcrumbs: false,
                    level: 2
                },
                {
                    id: 'radio_programs',
                    title: 'Radio Programs',
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
