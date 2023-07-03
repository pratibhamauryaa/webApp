import React from 'react'
import LeftSideMenu from '@/components/layouts/leftmenu'
import { Content } from '@/components/content'


export default function dashboard() {
    return (
        <div>
            <main>
            <LeftSideMenu />
            <Content />
            </main>
            
        </div>


    )
}
