import blogThreeData from '@/data/BlogThreeData';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const { carouselData } = blogThreeData;

const BlogThreeGrid = () => {

    return (
        <section className="blog-three">
            <Container >
                <Row className="gutter-y-30">
                    {
                        carouselData.map(({
                            id,
                            image,
                            href,
                            date,
                            year,
                            comments,
                            title,
                            text,
                            author,
                            authorImage,
                            designation,
                        }) => <Col key={id} md={6} lg={4}>
                                <div
                                    className='blog-card-three wow fadeInUp' data-aos='fade-up'
                                    data-aos-duration='1500'
                                    data-aos-delay='00ms'
                                >
                                    <div className='blog-card-three__image'>
                                        <Image
                                            src={image}
                                            alt={title}
                                            style={{ height: "auto" }}
                                        />
                                        <Image
                                            src={image}
                                            alt={title}
                                            style={{ height: "auto" }}
                                        />
                                        <div className='blog-card-three__date'>
                                            <div dangerouslySetInnerHTML={{ __html: date }} />
                                            <div className='blog-card-three__date__year'>{year}</div>
                                        </div>
                                        <Link href={href} className='blog-card-three__image__link'>
                                            <i className='icon-right-arrow'></i>
                                            <span className='sr-only'>{title}</span>
                                        </Link>
                                    </div>
                                    <div className='blog-card-three__content'>
                                        <h3 className='blog-card-three__title'>
                                            <a href={href}>{title}</a>
                                        </h3>
                                        <p className='blog-card-three__text'>{text}</p>
                                        <div className='blog-card-three__meta'>
                                            <div className='blog-card-three__meta__author'>
                                                <Image src={authorImage} alt='tolak' />
                                                {designation}:<Link href={href}>{author}</Link>
                                            </div>
                                            <div className='blog-card-three__meta__comments'>
                                                <i className='icofont-speech-comments'></i>Comments (
                                                {comments})
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default BlogThreeGrid;