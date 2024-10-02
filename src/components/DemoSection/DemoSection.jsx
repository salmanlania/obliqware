import { demoOneData } from '@/data/DemoOneData';
import Image from 'next/image';

const DemosSection = () => (
    <section className="demos-one" id="demos">
        <div className="container">
            <div className="row">
                {demoOneData.map((demo) => (
                    <div key={demo.id} className="col-md-6 col-lg-4">
                        <div className="demos-one__single">
                            <div className="demos-one__image">
                                <Image width={370} height={431} src={demo.image} alt={demo.alt} />
                                <div className="demos-one__buttons">
                                    {demo.buttons.map((button, index) => (
                                        <a
                                            key={index}
                                            target="_blank"
                                            href={button.href}
                                            className="tolak-btn demo-one__btn"
                                        >
                                            <b>{button.label}</b><span></span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="demos-one__text">
                                <h3 className="demos-one__text__title">{demo.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default DemosSection;
