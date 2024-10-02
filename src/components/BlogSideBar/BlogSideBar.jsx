import React from 'react';

import Image from 'next/image';
import Link from 'next/link';


const BlogSidebar = ({ sidebarData }) => {

    const { search, categories, tags, recentPosts } = sidebarData;

    return (
        <div className="sidebar">
            <aside className="widget-area">
                {/* Search Widget */}
                <div className="sidebar__single sidebar__single--search">
                    <form action="#" className="sidebar__search">
                        <input type="text" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit">
                            <span><i className="icofont-search-2"></i></span>
                        </button>
                    </form>
                </div>

                {/* Categories Widget */}
                <div className="sidebar__single">
                    <h4 className="sidebar__title">Categories</h4>
                    <ul className="sidebar__categories list-unstyled">
                        {categories.map(({ href, text, count }) => (
                            <li key={text}>
                                <Link href={href}>
                                    {text}
                                </Link>
                                ({count})
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tags Widget */}
                <div className="sidebar__single sidebar__single--tags">
                    <h4 className="sidebar__title">Tags</h4>
                    <div className="sidebar__tags">
                        {tags.map(({ href, text }) => (
                            <Link key={text} href={href}>
                                {text}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Recent Posts Widget */}
                <div className="sidebar__single">
                    <h4 className="sidebar__title">Recent Post</h4>
                    <ul className="sidebar__posts list-unstyled">
                        {recentPosts.map(({ image, date, title, href }) => (
                            <li key={title} className="sidebar__posts__item">
                                <div className="sidebar__posts__image">
                                    <Image src={image.src} alt={image.alt} />
                                </div>
                                <div className="sidebar__posts__content">
                                    <p className="sidebar__posts__meta"><i className="icofont-calendar"></i>{date}</p>
                                    <h4 className="sidebar__posts__title">
                                        <Link href={href}>
                                            {title}
                                        </Link>
                                    </h4>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default BlogSidebar;
