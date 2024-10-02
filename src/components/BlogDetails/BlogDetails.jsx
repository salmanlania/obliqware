'use client'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { blogDetailsData } from '@/data/BlogDetailsData';
import BlogSidebar from '../BlogSideBar/BlogSideBar';
import { usePathname } from 'next/navigation';
const {
    image,
    meta: { category: { href: categoryHref, name: categoryText }, date: { href: dateHref, author: dateText, date: blogDate } },
    title,
    paragraphs,
    features,
    finalParagraph,
    blockquote: { text: blockquoteText, author: blockquoteAuthor, },
    // blockquote: {
    //     text: blockquoteText,
    //     author: {
    //         auhorImage,
    //         name: authorName,
    //         role: authorRole,
    //         socialLinks
    //     }
    // },
    comments,
    sidebarData

} = blogDetailsData
const { categories, tags, recentPosts } = sidebarData;

const BlogDetails = () => {
    const pathname = usePathname()


    const [mounted, setMounted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API or handle validation)
        console.log('Submitted data:', formData);
        setFormData({ name: '', email: '', message: '' }); // Clear the form
    };

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }
    return (
        <section className="blog-details">
            <Container>
                <Row className={`${pathname === "/blog-details" ? "justify-content-center" : "gutter-y-60"}`}>
                    {
                        pathname === "/blog-details-left" && <Col lg={4}>
                            <BlogSidebar sidebarData={sidebarData} />
                        </Col>
                    }

                    <Col lg={8}>
                        <div className="blog-details__content">
                            <div className="blog-details__image">
                                <Image
                                    src={image}
                                    alt='tolak'

                                />
                            </div>
                            <div className="blog-details__meta">
                                <div className="blog-details__meta__cats">
                                    <Link href={categoryHref}>
                                        {categoryText}
                                    </Link>
                                </div>
                                <div className="blog-details__meta__date">
                                    <Link href={dateHref}>
                                        {dateText}
                                    </Link> / {blogDate}
                                </div>
                            </div>
                            <h3 className="blog-details__title">
                                {title}
                            </h3>
                            {paragraphs.map((para, index) => (
                                <p key={index} className="blog-details__text">
                                    {para}
                                </p>
                            ))}
                            <Row className="gutter-y-30">
                                {features.map((feature, index) => (
                                    <Col md={6} key={index}>
                                        <div className="blog-details__item">
                                            <div className="blog-details__item__icon">
                                                <span className={feature.icon}></span>
                                            </div>
                                            <h4 className="blog-details__item__title">
                                                {feature.title}
                                            </h4>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <p className="blog-details__text">
                                {finalParagraph}
                            </p>
                            <blockquote className="blog-details__blockquote">
                                <p className="blog-details__blockquote__text">
                                    {blockquoteText}
                                </p>
                                <div className="blog-details__blockquote__meta">
                                    <Image
                                        src={blockquoteAuthor.image}
                                        alt="tolak"

                                    />
                                    <h5 className="blog-details__blockquote__meta__name">
                                        {blockquoteAuthor.name} - <span>{blockquoteAuthor.designation}</span>
                                    </h5>
                                    <div className="blog-details__blockquote__meta__social">
                                        {blockquoteAuthor.social.map((link, index) => (
                                            <Link key={index} href={link.href}>
                                                <i className={link.icon} aria-hidden="true"></i>
                                                <span className="sr-only">{link.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                        <div className="comments-one">
                            <h3 className="comments-one__title">
                                Comments ({comments.length})
                            </h3>
                            <ul className="list-unstyled comments-one__list">
                                {comments.map((comment, index) => (
                                    <li className="comments-one__card" key={index}>
                                        <div className="comments-one__card__image">
                                            <Image
                                                src={comment.image.src}
                                                alt={comment.image.alt}
                                                width={comment.image.width}
                                                height={comment.image.height}
                                            />
                                        </div>
                                        <div className="comments-one__card__content">
                                            <h3 className="comments-one__card__title">
                                                {comment.name}
                                            </h3>
                                            <p className="comments-one__card__text">
                                                {comment.text}
                                            </p>
                                            <div className="comments-one__card__meta">
                                                {comment.date} <Link href="#" className="comments-one__card__reply">Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="comments-form">
                            <h3 className="comments-form__title">Leave a comment</h3>
                            <form onSubmit={handleSubmit} className="comments-form__form contact-form-validated form-one">
                                <div className="form-one__group">
                                    <div className="form-one__control">
                                        <input onChange={handleChange} type="text" name="name" placeholder="Your name" />
                                    </div>
                                    <div className="form-one__control">
                                        <input onChange={handleChange} type="email" name="email" placeholder="Email address" />
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <textarea onChange={handleChange} name="message" placeholder="Write  a message"></textarea>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <button type="submit" className="tolak-btn"><b>Submit Comment</b><span></span></button>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </Col>
                    {
                        pathname === "/blog-details-right" && <Col lg={4}>
                            <BlogSidebar sidebarData={sidebarData} />
                        </Col>
                    }
                </Row>
            </Container>
        </section >
    );
};

export default BlogDetails;
