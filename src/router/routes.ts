export default (): any => [
    {
        path: '/',
        name: 'Home',
        compUrl: '/Home',
        meta: {
            label: '首页',
            icon: 'home',
            keepAlive: false
        }
    },
    {
        path: '/about',
        name: 'About',
        compUrl: '/About',
        meta: {
            label: '关于',
            icon: 'star'
        }
    },
    {
        path: '/menu',
        name: 'Menu',
        meta: {
            label: '菜单',
            icon: 'star'
        },
        children: [
            {
                path: 'menu1',
                name: 'Menu1',
                meta: {
                    label: '菜单1',
                    icon: 'star'
                },
                children: [
                    {
                        path: 'menu1-1',
                        name: 'Menu11',
                        compUrl: '/sys/Menu11',
                        meta: {
                            label: '菜单1-1',
                            icon: 'star'
                        }
                    },
                    {
                        path: 'menu1-2',
                        name: 'Menu12',
                        meta: {
                            label: '菜单1-2',
                            icon: 'star'
                        },
                        compUrl: '/sys/Menu12',
                        children: [
                            {
                                path: 'menu1-2-1',
                                name: 'Menu121',
                                compUrl: '/sys/Menu121',
                                meta: {
                                    label: '菜单1-2-1',
                                    icon: 'star'
                                }
                            },
                            {
                                path: 'menu1-2-2',
                                name: 'Menu122',
                                compUrl: '/sys/Menu122',
                                meta: {
                                    label: '菜单1-2-2',
                                    icon: 'star'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                path: 'menu2',
                name: 'Menu2',
                compUrl: '',
                meta: {
                    label: '菜单2',
                    icon: 'star'
                }
            },
            {
                path: 'menu3',
                name: 'Menu3',
                compUrl: '',
                meta: {
                    label: '菜单3',
                    icon: 'star'
                }
            },
            {
                path: 'menu4',
                name: 'Menu4',
                compUrl: '',
                meta: {
                    label: '菜单4',
                    icon: 'star'
                }
            },
            {
                path: 'menu5',
                name: 'Menu5',
                compUrl: '',
                meta: {
                    label: '菜单5',
                    icon: 'star'
                }
            }
        ]
    },
    {
        path: '/view',
        name: 'View',
        meta: {
            label: '视图',
            icon: 'star'
        },
        children: [
            {
                path: '/view1',
                name: 'View1',
                meta: {
                    label: '视图1',
                    icon: 'star'
                }
            },
            {
                path: '/view2',
                name: 'View2',
                meta: {
                    label: '视图2',
                    icon: 'star'
                }
            }
        ]
    },
    {
        path: '/twoPackaging',
        name: 'TwoPackaging',
        // compUrl: () => import('../views/TwoPackaging.vue'),
        compUrl: '/TwoPackaging',
        meta: {
            label: '二次封装',
            icon: 'star'
        }
    },
    {
        path: '/slots',
        name: 'Slots',
        // compUrl: () => import('../views/Slots.vue'),
        compUrl: '/TwoPackaging',
        meta: {
            label: '插槽',
            icon: 'star'
        }
    }
]
