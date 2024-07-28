import { Parallax } from 'react-parallax';

const Cover = ({ img, coverTitle, coverDescription }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}>
            <div
                className="hero min-h-[400px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center bg-gray-800 bg-opacity-75">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{coverTitle}</h1>
                        <p className="mb-5">
                            {coverDescription}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;