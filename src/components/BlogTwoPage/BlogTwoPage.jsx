'use client'
import blogTwoData from '@/data/BlogTwoData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogSidebar from '../BlogSideBar/BlogSideBar';
import { usePathname } from 'next/navigation';
import { blogDetailsData } from '@/data/BlogDetailsData';
const { carouselData } = blogTwoData
const { sidebarData } = blogDetailsData
const BlogTwoPage = () => {
    const pathname = usePathname()
    return (
        <section className="blog-two blog-two--page">
            <Container >
                <Row className={`${pathname === "/blog-details" ? "justify-content-center" : "gutter-y-60"}`}>
                    {
                        pathname === "/blog-list-left" && <Col lg={4}>
                            <BlogSidebar sidebarData={sidebarData} />
                        </Col>
                    }
                    <Col lg={8} >
                        <Row className="gutter-y-30">
                            {
                                carouselData.slice(0, 3).map(({ id, image, link, href, date, year, comments, title, text, author, authorImage, designation }) => <Col md={12} key={id}>
                                    <div className="blog-card-two wow fadeInUp" data-aos='fade-up' data-aos-duration='1500' data-aos-delay='00ms'>
                                        <div className="blog-card-two__image">
                                            <Image src={image} alt={title} />
                                            <Image src={image} alt={title} />
                                            <Link href={href} className="blog-card-two__image__link"><span className="sr-only">{title}</span>
                                            </Link>
                                        </div>
                                        <div className="blog-card-two__meta">
                                            <div className="blog-card-two__meta__author"><Image src={authorImage} alt="tolak" />{designation}:<Link href={href}>{author}</Link></div>
                                            <div className="blog-card-two__meta__date" dangerouslySetInnerHTML={{ __html: date }}></div>
                                            <div className="blog-card-two__meta__year">{year}</div>
                                            <div className="blog-card-two__meta__comments">
                                                <i className="icofont-speech-comments"></i>Comments ({comments})
                                            </div>
                                        </div>
                                        <div className="blog-card-two__content">
                                            <h3 className="blog-card-two__title"><Link href={href}>{title}</Link></h3>
                                            <p className="blog-card-two__text">{text}</p>
                                            <Link href={href} className="blog-card-two__link">
                                                Read more
                                                <i className="icofont-rounded-double-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                )
                            }
                        </Row>
                    </Col>
                    {
                        pathname === "/blog-list-right" && <Col lg={4}>
                            <BlogSidebar sidebarData={sidebarData} />
                        </Col>
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BlogTwoPage;