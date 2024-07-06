

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-2/5 text-center mx-auto">
            <h6 className="text-2xl mb-2 text-[#D99904]">---{subHeading}---</h6>
            <h2 className="border-y-4 border-gray-200 py-6 text-4xl font-bold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;